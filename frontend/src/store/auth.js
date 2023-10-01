import {defineStore} from "pinia";
import axios from "@/plugins/axios";
import i18n from "@/plugins/i18n";

const {t} = i18n.global

export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
            isAuthenticated: false,
            token: "",
            user: {
                settings: {
                    lang: "en",
                },
                salons: [],
            },
            currentSalon: null,
            appointments: [],
        }
    },
    getters: {
        fullName() {
            if (this.user) {
                return this.user.first_name + " " + this.user.last_name;
            }
            return "";
        },
        employeePicBySalon() {
            return this.user.employees.find((employee) => employee.salon === this.user.settings.current_salon).pic || "";
        },
        isLoggedUser() {
            return (id) => this.user.id === id;
        },
        isOwner() {
            return (id, salon_id=this.getCurrentSalon.id) => this.getSalon(salon_id).owner === id;
        },
        getCurrentSalon: state => {
            const currentSalonId = state.user.settings.current_salon;
            return state.user.salons.find(salon => salon.id === currentSalonId);
        },
        getSalon: state => id => state?.user?.salons?.find(salon => salon.id === id),
        getSalonBySlug: state => slug => state?.user?.salons?.find(salon => salon.slug === slug),
        statusClass() {
            return (id, salon_id=this.getCurrentSalon.id) => {
                const isOwner = this.isOwner(id, salon_id);
                return {
                    "text-success-500 bg-success-500": isOwner,
                    "text-warning-500 bg-warning-500": !isOwner,
                };
            }
        },
        getService() {
            return (id) => {
                if (this.getCurrentSalon && this.getCurrentSalon.services) {
                    return this.getCurrentSalon?.services?.find((service) => service.id === id)
                } else {
                    return null
                }
            }
        },
        getAppointments() {
            const appointments = this.getCurrentSalon?.appointments || [];
            if (appointments.length === 0) {
                return [];
            } else {
                return appointments.map(appointment => ({
                    ...appointment,
                }));
            }
        },
        getServicesForSelect() {
            return this.getCurrentSalon.services.map(item => {
                return {
                    ...item,
                    label: item.name
                };
            });
        },
    },
    actions: {
        addAppointments(data) {
            if (this.getCurrentSalon) {
                if (this.getAppointments.length > 0) {
                    data.forEach(appointment => {
                        const index = this.getCurrentSalon.appointments.findIndex(existingAppointment => existingAppointment.id === appointment.id);
                        if (index !== -1) {
                            this.getCurrentSalon.appointments[index] = appointment;
                        } else {
                            this.getCurrentSalon.appointments.push(appointment);
                        }
                    });
                } else {
                    this.getCurrentSalon.appointments = data;
                }
            }
        },
        setAppointment(x) {
            if (this.getCurrentSalon && this.getAppointments.length > 0) {
                let index = this.getCurrentSalon.appointments.findIndex((appointment) => appointment.id === x.id);
                if (index !== -1) {
                    this.getCurrentSalon.appointments[index] = {...x}
                }
            }
        },
        initializeStore() {
            if (localStorage.getItem('token')) {
                this.token = localStorage.getItem('token')
                this.isAuthenticated = true
            } else {
                this.token = "";
                this.isAuthenticated = false
            }
        },
        setToken(token, remember) {
            this.token = token
            this.isAuthenticated = true
            axios.defaults.headers['Authorization'] = 'Token ' + token
            if (remember) {
                localStorage.setItem('token', token)
            }
        },
        removeToken() {
            this.token = "";
            this.isAuthenticated = false
            axios.defaults.headers['Authorization'] = null;
            localStorage.removeItem('token')
        },
        getEmployee(id) {
            if (this.getCurrentSalon && this.getCurrentSalon.employees) {
                return this.getCurrentSalon?.employees?.find((employee) => employee.id === id)
            } else {
                return null
            }
        },
        setSalon(id, data) {
            const salonIndex = this.user.salons.findIndex((salon) => salon.id === id);
            if (salonIndex !== -1) {
                this.user.salons[salonIndex] = {...this.user.salons[salonIndex], ...data};
            }
        },
        setService(id, data) {
            if (this.getCurrentSalon && this.getCurrentSalon.services) {
                let serviceIndex = this.getCurrentSalon.services.findIndex((service) => service.id === id);
                if (serviceIndex !== -1) {
                    this.getCurrentSalon.services[serviceIndex] = {...data}
                }
            }
        },
        setEmployee(id, data) {
            let employeeIndex = this.getCurrentSalon.employees.findIndex((employee) => employee.id === id);
            if (employeeIndex !== -1) {
                this.getCurrentSalon.employees[employeeIndex] = {...data}
            }

            if (data.user.id === this.user?.id) {
                employeeIndex = this.user.employees.findIndex((employee) => employee.id === id);
                if (employeeIndex !== -1) {
                    this.user.employees[employeeIndex] = {...data}
                }
            }
        },
        isCurrentSalonOwner() {
            return this.user.id === this.getCurrentSalon.owner;
        },
        deleteService(id) {
            this.getCurrentSalon.services = JSON.parse(JSON.stringify(this.getCurrentSalon.services.filter((service) => service.id !== id)))
        }
    },
})
