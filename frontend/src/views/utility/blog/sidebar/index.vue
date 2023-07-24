<template>
  <div class="space-y-5 divide-y divide-slate-100 dark:divide-slate-700 -mx-6">
    <div class="px-6">
      <InputGroup type="text" placeholder="Search....">
        <template v-slot:append>
          <Button
            icon="heroicons-outline:search"
            btnClass="btn-dark dark:bg-slate-600"
          />
        </template>
      </InputGroup>
    </div>
    <div class="pt-4 px-6">
      <h4 class="text-slate-600 dark:text-slate-300 text-xl font-medium mb-4">
        Latest Blogs Post
      </h4>
      <ul class="list-item space-y-4">
        <li v-for="(item, i) in posts" :key="i">
          <div class="flex space-x-4 rtl:space-x-reverse">
            <div class="flex-none">
              <div class="h-20 w-20">
                <img
                  :src="item.img"
                  alt=""
                  class="block w-full h-full"
                />
              </div>
            </div>
            <div class="flex-1 flex flex-col">
              <h4 class="text-sm text-slate-600 font-regular leading-5 mb-4">
                <router-link to="#"
                  >Lorem ipsum dolor sit amet consectetur
                  adipiscing</router-link
                >.
              </h4>
              <span class="text-xs text-slate-400"
                ><router-link to="#">Oct 09, 2021</router-link></span
              >
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="pt-4 px-6">
      <h4 class="text-slate-600 dark:text-slate-300 text-xl font-medium mb-4">
        Category
      </h4>
      <ul class="list-item space-y-6">
        <li v-for="(item, i) in catagory" :key="i">
          <router-link
            to="#"
            class="flex space-x-1 items-start leading-[1] text-sm text-slate-500 dark:text-slate-300 hover:text-slate-900 transition duration-150 rtl:space-x-reverse"
          >
            <span class="text-sm"
              ><Icon icon="heroicons:chevron-right-solid"
            /></span>
            <span>{{ item.cta }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="pt-4 px-6">
      <h4 class="text-slate-600 dark:text-slate-300 text-xl font-medium mb-4">
        Popular tags
      </h4>
      <ul class="flex flex-wrap">
        <li v-for="(item, i) in tags" :key="i" class="mr-2 mb-2">
          <router-link
            :to="item.link"
            class="text-xs font-normal text-slate-600 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 py-1 px-3 rounded-full hover:bg-slate-900 hover:text-white transition duration-150"
          >
            <span>{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      class="mx-6 bg-slate-900 dark:bg-slate-900 text-white rounded-xl p-6 space-y-4"
    >
      <h4 class="text-xl font-medium text-white">Subscribe to our blog</h4>
      <div class="text-sm">
        Lorem ipsum dolor sit amet, consectet ur adipiscing elit.
      </div>
      <form action="#" class="space-y-4">
        <input
          type="text"
          placeholder="Enter your email"
          class="form-control bg-transparent border-secondary-500 text-white placeholder:text-slate-400"
        />
        <button type="button" class="btn btn-light btn-sm w-full">
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import InputGroup from "@/components/InputGroup";
import t1Img from "@/assets/images/post/t-1.png";
import t2Img from "@/assets/images/post/t-2.png";
import t3Img from "@/assets/images/post/t-3.png";
export default {
  components: {
    InputGroup,
    Button,
    Icon,
  },
  data() {
    return {
      catagory: [
        {
          cta: "Graphic Designer (214) ",
        },
        {
          cta: "Engineering Jobs (514) ",
        },
        {
          cta: "Mainframe Jobs (554)",
        },
        {
          cta: "Legal Jobs (457)",
        },
        {
          cta: "IT Jobs (1254) ",
        },
        {
          cta: "R&D Jobs (554) ",
        },
        {
          cta: "Government Jobs (350) ",
        },
        {
          cta: "PSL Jobs (221)",
        },
      ],
      posts: [
        {
          img: t1Img,
        },
        {
          img: t2Img,
        },
        {
          img: t3Img,
        },
      ],
      tags: [
        {
          title: "Business",
          link: "#",
        },
        {
          title: "Consulting",
          link: "#",
        },
        {
          title: "Photographic",
          link: "#",
        },
        {
          title: "Investment",
          link: "#",
        },
        {
          title: "Camera",
          link: "#",
        },
        {
          title: "Assurance",
          link: "#",
        },
        {
          title: "Secutity",
          link: "#",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
