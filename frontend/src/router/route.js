import auth from "@/middleware/auth";
import guest from "@/middleware/guest";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/auth/login/index.vue"),
  },
  {
    path: "/login2",
    name: "login2",
    component: () => import("@/views/auth/login/login2.vue"),
  },
  {
    path: "/login3",
    name: "login3",
    component: () => import("@/views/auth/login/login3.vue"),
  },
  {
    path: "/register",
    name: "reg",
    component: () => import("@/views/auth/register"),
  },
  {
    path: "/register2",
    name: "reg2",
    component: () => import("@/views/auth/register/register2"),
  },
  {
    path: "/register3",
    name: "reg3",
    component: () => import("@/views/auth/register/register3"),
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("@/views/auth/forgot-password.vue"),
  },
  {
    path: "/forgot-password2",
    name: "forgot-password2",
    component: () => import("@/views/auth/forgot-password2.vue"),
  },
  {
    path: "/forgot-password3",
    name: "forgot-password3",
    component: () => import("@/views/auth/forgot-password3.vue"),
  },
  {
    path: "/lock-screen",
    name: "lock-screen",
    component: () => import("@/views/auth/lock-screen.vue"),
  },
  {
    path: "/lock-screen2",
    name: "lock-screen2",
    component: () => import("@/views/auth/lock-screen2.vue"),
  },
  {
    path: "/lock-screen3",
    name: "lock-screen3",
    component: () => import("@/views/auth/lock-screen3.vue"),
  },
  {
    path: "/success-500",
    name: "success-500",
    component: () => import("@/views/auth/success.vue"),
  },
  {
    path: "/app",
    name: "Layout",
    redirect: "/app/home",
    component: () => import("@/Layout/index.vue"),
    meta: {
      middleware: [auth],
    },
    children: [
      {
        path: "blank-page",
        name: "blank-page",
        component: () => import("@/views/blank-page.vue"),
      },
      {
        path: "notifications",
        name: "notifications",
        component: () => import("@/views/notifications.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "ecommerce",
        name: "ecommerce",
        component: () => import("@/views/home/ecommerce.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "banking",
        name: "banking",
        component: () => import("@/views/home/banking.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "crm",
        name: "crm",
        component: () => import("@/views/home/crm.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "project",
        name: "project",
        component: () => import("@/views/home/project.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "changelog",
        name: "changelog",
        component: () => import("@/views/changelog.vue"),
      },

      // components
      {
        path: "button",
        name: "button",
        component: () => import("@/views/components/button/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "alert",
        name: "alert",
        component: () => import("@/views/components/alert/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "card",
        name: "card",
        component: () => import("@/views/components/card/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "carousel",
        name: "carousel",
        component: () => import("@/views/components/carousel.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "dropdown",
        name: "dropdown",
        component: () => import("@/views/components/dropdown/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "modal",
        name: "dodal",
        component: () => import("@/views/components/modal/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "tab-accordion",
        name: "tab-accordion",
        component: () => import("@/views/components/tab-accordion/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "badges",
        name: "badges",
        component: () => import("@/views/components/badges.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "tooltip-popover",
        name: "tooltip-popover",
        component: () => import("@/views/components/tooltip-popover.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "typography",
        name: "typography",
        component: () => import("@/views/components/typography.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "colors",
        name: "colors",
        component: () => import("@/views/components/colors.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "image",
        name: "image",
        component: () => import("@/views/components/image/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "video",
        name: "video",
        component: () => import("@/views/components/video.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "pagination",
        name: "pagination",
        component: () => import("@/views/components/pagination"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "progress-bar",
        name: "progress-bar",
        component: () => import("@/views/components/progress-bar/index.vue"),
        meta: {
          groupParent: "components",
        },
      },
      {
        path: "placeholder",
        name: "placeholder",
        component: () => import("@/views/components/placeholder.vue"),
        meta: {
          groupParent: "placeholder",
        },
      },
      // widgets
      {
        path: "basic",
        name: "basic",
        component: () => import("@/views/widgets/basic.vue"),
        meta: {
          groupParent: "widgets",
        },
      },
      {
        path: "statistic",
        name: "statistic",
        component: () => import("@/views/widgets/statistic.vue"),
        meta: {
          groupParent: "widgets",
        },
      },

      // forms
      {
        path: "input",
        name: "input",
        component: () => import("@/views/forms/input"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "input-group",
        name: "input-group",
        component: () => import("@/views/forms/input-group"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "input-layout",
        name: "input-layout",
        component: () => import("@/views/forms/input-layout"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "form-validation",
        name: "form-validation",
        component: () => import("@/views/forms/form-validation"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "form-wizard",
        name: "form-wizard",
        component: () => import("@/views/forms/form-wizard"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "form-repeater",
        name: "form-repeater",
        component: () => import("@/views/forms/form-repeater"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "input-mask",
        name: "input-mask",
        component: () => import("@/views/forms/input-mask"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "file-input",
        name: "file-input",
        component: () => import("@/views/forms/file-input"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "checkbox",
        name: "checkbox",
        component: () => import("@/views/forms/checkbox.vue"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "radio-button",
        name: "radio-button",
        component: () => import("@/views/forms/radio-button.vue"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "textarea",
        name: "textarea",
        component: () => import("@/views/forms/textarea"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "switch",
        name: "switch",
        component: () => import("@/views/forms/switch"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "select",
        name: "select",
        component: () => import("@/views/forms/select"),
        meta: {
          groupParent: "forms",
        },
      },
      {
        path: "date-time-picker",
        name: "date-time-picker",
        component: () => import("@/views/forms/date-time-picker"),
        meta: {
          groupParent: "forms",
        },
      },
      // table view
      {
        path: "table-basic",
        name: "table-basic",
        component: () => import("@/views/table/basic"),
        meta: {
          groupParent: "Table",
        },
      },
      {
        path: "table-advanced",
        name: "table-advanced",
        component: () => import("@/views/table/advanced"),
        meta: {
          groupParent: "Table",
        },
      },
      // chart
      {
        path: "appex-chart",
        name: "appex-chart",
        component: () => import("@/views/chart/appex-chart"),
        meta: {
          groupParent: "charts",
        },
      },
      {
        path: "chartjs",
        name: "chartjs",
        component: () => import("@/views/chart/chartjs"),
        meta: {
          groupParent: "charts",
        },
      },
      // app
      {
        path: "calender",
        name: "calender",
        component: () => import("@/views/app/calendar"),
      },
      {
        path: "todo",
        name: "todo",
        component: () => import("@/views/app/todo"),
        meta: {
          hide: true,
          appheight: true,
        },
      },
      {
        path: "kanban",
        name: "kanban",
        component: () => import("@/views/app/kanban"),
        meta: {
          hide: true,
        },
      },
      {
        path: "email",
        name: "email",
        component: () => import("@/views/app/email"),
        meta: {
          groupParent: "Project",
          hide: true,
          appheight: true,
        },
      },
      {
        path: "projects",
        name: "projects",
        component: () => import("@/views/app/projects"),
        meta: {
          hide: true,
        },
      },
      {
        path: "project-details",
        name: "project-details",
        component: () => import("@/views/app/projects/project-details.vue"),
        meta: {
          hide: true,
        },
      },
      {
        path: "chat",
        name: "chat",
        component: () => import("@/views/app/chat"),
        meta: {
          hide: true,
          appheight: true,
        },
      },
      // normal pages
      {
        path: "invoice",
        name: "invoice",
        component: () => import("@/views/utility/invoice"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "invoice-preview",
        name: "invoice-preview",
        component: () => import("@/views/utility/invoice/invoice-preview"),
        meta: {
          hide: true,
        },
      },
      {
        path: "invoice-edit",
        name: "invoice-edit",
        component: () => import("@/views/utility/invoice/invoice-edit"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "invoice-add",
        name: "invoice-add",
        component: () => import("@/views/utility/invoice/invoice-add"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "Pricing",
        name: "pricing",
        component: () => import("@/views/utility/pricing"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "faq",
        name: "faq",
        component: () => import("@/views/utility/faq"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "blog",
        name: "blog",
        component: () => import("@/views/utility/blog"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "blog-details",
        name: "blog-details",
        component: () => import("@/views/utility/blog/blog-details"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "testimonial",
        name: "testimonial",
        component: () => import("@/views/utility/testimonial"),
        meta: {
          groupParent: "Utility",
        },
      },
      {
        path: "map",
        name: "map",
        component: () => import("@/views/map"),
      },
      {
        path: "profile",
        name: "profile",
        component: () => import("@/views/profile.vue"),
      },
      {
        path: "profile-setting",
        name: "profile-setting",
        component: () => import("@/views/profile.vue"),
      },
      {
        path: "settings",
        name: "settings",
        component: () => import("@/views/settings.vue"),
      },
      {
        path: "icons",
        name: "icons",
        component: () => import("@/views/icons.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/coming-soon",
    name: "coming-soon",
    component: () => import("@/views/utility/comming-soon"),
  },
  {
    path: "/under-construction",
    name: "under-construction",
    component: () => import("@/views/utility/under-construction"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/error.vue"),
  },
];

export default routes;
