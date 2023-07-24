<template>
  <div class="grid gap-4 grid-cols-12 mt-5">
    <div class="xl:col-span-8 col-span-12">
      <Card :img="post1" noborder>
        <div class="flex justify-between mb-4">
          <router-link to="#"
            ><span
              class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
              ><Icon
                icon="heroicons-outline:calendar"
                class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
              />

              10/02/2021
            </span></router-link
          >
          <div class="flex space-x-4 rtl:space-x-reverse">
            <router-link to="#"
              ><span
                class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                ><Icon
                  icon="heroicons-outline:chat"
                  class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                />

                3
              </span></router-link
            >
            <router-link to="#"
              ><span
                class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                ><Icon
                  icon="heroicons-outline:share"
                  class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                />

                4
              </span></router-link
            >
          </div>
        </div>
        <h5 class="card-title text-slate-900 dark:text-white">
          At Healthcare you will be treated by caring
        </h5>
        <div class="card-text mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing eli.
          </p>
          <Button btnClass="btn-outline-dark" text="Read more" class="mt-8" />
        </div>
      </Card>
    </div>
    <div class="xl:col-span-4 col-span-12 space-y-4">
      <Card
        :img="post1"
        imgTop
        gapNull
        noborder
      >
        <div class="flex justify-between mb-4">
          <div>
            <div class="text-xl text-slate-900 dark:text-white">
              Lorem ipsum
            </div>
          </div>
          <router-link to="#"
            ><span
              class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
              ><Icon
                icon="heroicons-outline:calendar"
                class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
              />

              10/02/2021
            </span></router-link
          >
        </div>

        <div class="card-text mt-4">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div class="mt-4 space-x-4 rtl:space-x-reverse">
            <router-link to="#" class="btn-link">Learn more</router-link>
          </div>
        </div>
      </Card>
      <Card>
        <div class="flex justify-between mb-4">
          <div>
            <div class="text-xl text-slate-900 dark:text-white">
              Lorem ipsum
            </div>
          </div>
          <router-link to="#"
            ><span
              class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
              ><Icon
                icon="heroicons-outline:calendar"
                class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
              />

              10/02/2021
            </span></router-link
          >
        </div>

        <div class="card-text mt-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.Lorem ipsum dolor sit amet, consectetur adipiscing eli.
          </p>
          <div class="mt-6 flex justify-between">
            <router-link to="#" class="btn-link">Learn more</router-link>
            <div class="flex space-x-4 rtl:space-x-reverse">
              <router-link to="#"
                ><span
                  class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                  ><Icon
                    icon="heroicons-outline:chat"
                    class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                  />

                  3
                </span></router-link
              >
              <router-link to="#"
                ><span
                  class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                  ><Icon
                    icon="heroicons-outline:share"
                    class="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                  />

                  4
                </span></router-link
              >
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
    <Card>
      <div class="flex">
        <div class="flex-0 mr-6">
          <div class="author-img w-[65px] h-[88px] rounded-[40px]">
            <img
              :src="t1"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <div class="flex-1">
          <div class="mb-4 text-base">
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sintsin. Velit officia consequat duis enim of velit mollit.”
          </div>
          <div class="space-x-5">
            <span class="inline-block font-medium text-base">
              Marvin McKinney</span
            >
            <span class="inline-block">CEO at Bitspin</span>
          </div>
        </div>
      </div>
    </Card>
    <Card className="text-center ha-auto">
      <div class="text-2xl text-slate-600 dark:text-slate-300">
        “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sintsin. Velit officia consequat duis enim of velit mollit.”
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
// Image Import
import post1 from "@/assets/images/all-img/post-1.png"
import t1 from "@/assets/images/all-img/t1.png"

export default {
  data() {
    return {
      post1,t1
    }
  },
  components: {
    Card,
    Button,
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.ha-auto {
  height: auto !important;
}
</style>
