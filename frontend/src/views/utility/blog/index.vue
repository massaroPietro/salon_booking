<template>
  <div
    class="lg:flex flex-wrap blog-posts lg:space-x-5 space-y-5 lg:space-y-0 rtl:space-x-reverse"
  >
    <div class="flex-none">
      <div class="lg:max-w-[360px]">
        <Card>
          <Sidebar />
        </Card>
      </div>
    </div>
    <div class="flex-1">
      <div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
        <div class="xl:col-span-2 col-span-1">
          <Card :img="post1Img">
            <div class="flex justify-between mb-4">
              <router-link :to="{ name: 'blog-details' }"
                ><span
                  class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                  ><Icon
                    icon="heroicons-outline:calendar"
                    class="text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"
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
                      class="text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"
                    />

                    3
                  </span></router-link
                >
                <router-link to="#"
                  ><span
                    class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                    ><Icon
                      icon="heroicons-outline:share"
                      class="text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"
                    />

                    4
                  </span></router-link
                >
              </div>
            </div>
            <h5 class="card-title text-slate-900">
              <router-link :to="{ name: 'blog-details' }">
                At Healthcare you will be treated by caring</router-link
              >
            </h5>
            <div class="card-text dark:text-slate-300 mt-4 space-y-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur
                adipiscing eli.
              </p>
              <Button
                btnClass="btn-outline-dark"
                text="Read more"
                class="mt-8"
                link="/app/blog-details"
              />
            </div>
          </Card>
        </div>
        <Card
          :img="post1Img"
          imgTop
          gapNull
        >
          <div class="flex justify-between mb-4">
            <div>
              <h5 class="card-title text-slate-900">
                <router-link :to="{ name: 'blog-details' }">
                  Lorem ipsum</router-link
                >
              </h5>
            </div>
            <router-link to="#"
              ><span
                class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                ><Icon
                  icon="heroicons-outline:calendar"
                  class="text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"
                />

                10/02/2021
              </span></router-link
            >
          </div>

          <div class="card-text dark:text-slate-300 mt-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="mt-4 space-x-4 rtl:space-x-reverse">
              <router-link to="#" class="btn-link">Learn more</router-link>
            </div>
          </div>
        </Card>
        <Card
          :img="post1Img"
          imgTop
          gapNull
        >
          <div class="flex justify-between mb-4">
            <div>
              <h5 class="card-title text-slate-900">
                <router-link :to="{ name: 'blog-details' }">
                  Lorem ipsum</router-link
                >
              </h5>
            </div>
            <router-link to="#"
              ><span
                class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                ><Icon
                  icon="heroicons-outline:calendar"
                  class="text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"
                />

                10/02/2021
              </span></router-link
            >
          </div>

          <div class="card-text dark:text-slate-300 mt-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="mt-4 space-x-4 rtl:space-x-reverse">
              <router-link to="#" class="btn-link">Learn more</router-link>
            </div>
          </div>
        </Card>
        <Card
          :img="post1Img"
          imgTop
          gapNull
        >
          <div class="flex justify-between mb-4">
            <div>
              <h5 class="card-title text-slate-900">
                <router-link :to="{ name: 'blog-details' }">
                  Lorem ipsum</router-link
                >
              </h5>
            </div>
            <router-link to="#"
              ><span
                class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                ><Icon
                  icon="heroicons-outline:calendar"
                  class="text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"
                />

                10/02/2021
              </span></router-link
            >
          </div>

          <div class="card-text dark:text-slate-300 mt-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="mt-4 space-x-4 rtl:space-x-reverse">
              <router-link to="#" class="btn-link">Learn more</router-link>
            </div>
          </div>
        </Card>
        <Card
          :img="post1Img"
          imgTop
          gapNull
        >
          <div class="flex justify-between mb-4">
            <div>
              <h5 class="card-title text-slate-900">
                <router-link :to="{ name: 'blog-details' }">
                  Lorem ipsum</router-link
                >
              </h5>
            </div>
            <router-link to="#"
              ><span
                class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
                ><Icon
                  icon="heroicons-outline:calendar"
                  class="text-slate-400 dark:text-slate-400 ltr:mr-2 rtl:ml-2 text-lg"
                />

                10/02/2021
              </span></router-link
            >
          </div>

          <div class="card-text dark:text-slate-300 mt-4">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div class="mt-4 space-x-4 rtl:space-x-reverse">
              <router-link to="#" class="btn-link">Learn more</router-link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Card from "@/components/Card";
import Icon from "@/components/Icon";
import Sidebar from "./sidebar/";
import post1Img from "@/assets/images/all-img/post-1.png";

export default {
  components: {
    Card,
    Button,
    Icon,
    Sidebar,
  },
  data() {
    return {
      post1Img: post1Img
    };
  },
};
</script>
<style lang="scss">
.blog-posts {
  .image-box {
    @apply h-[248px];
  }
  .card {
    @apply h-auto;
  }
  .btn-link {
    @apply font-medium underline;
  }
}
</style>
