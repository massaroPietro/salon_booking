<template>
  <div class="grid xl:grid-cols-2 grid-cols-1 gap-6">
    <Card title="Basic example">
      <Carousel :carousels="carousels" />
    </Card>
    <Card title="With captions">
      <Carousel :carousels="carouselsWithCaption" />
    </Card>
    <Card title="Carousel interval">
      <Carousel
        :carousels="carousels"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      />
    </Card>
    <Card title="Crossfade">
      <Carousel :carousels="carousels" :effect="'fade'" />
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";
import carousel1Img from "@/assets/images/all-img/c1.png";
import carousel2Img from "@/assets/images/all-img/c2.png";
import carousel3Img from "@/assets/images/all-img/c3.png";
import carousel4Img from "@/assets/images/all-img/c4.png";

export default {
  components: {
    Carousel,
    Card,
  },
  data() {
    return {
      carousels: [
        {
          img: carousel1Img,
        },
        {
          img: carousel2Img,
        },
        {
          img: carousel3Img,
        },
        {
          img: carousel4Img,
        },
      ],

      carouselsWithCaption: [
        {
          img: carousel1Img,
          title: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur..",
        },
        {
          img: carousel2Img,
          title: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.",
        },
        {
          img: carousel3Img,
          title: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.",
        },
        {
          img: carousel4Img,
          title: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
