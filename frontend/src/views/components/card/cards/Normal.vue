<template>
  <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
    <Card
      title="Sales Automation"
      :img="card4"
      imaClass="rounded-t-md"
      imgTop
      gapNull
      noborder
    >
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut .
    </Card>
    <Card
      title="Personalization"
      :img="card5"
      imaClass="rounded-t-md"
      imgBottom
      gapNull
      noborder
      className="text-center"
    >
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut .
    </Card>
    <Card
      title="Marketing Automation"
      :img="card6"
      imaClass="rounded-t-md"
      imgTop
      gapNull
      noborder
      className="text-center"
    >
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut .
    </Card>
    <Card
      title="API Questions"
      :img="card7"
      imgBottom
      gapNull
      className="bg-[#E5F9FF] dark:bg-slate-800	"
      noborder
    >
      <div class="mb-3">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
        tempor incididun ut .
      </div>
    </Card>
    <Card title="Sales Automation" noborder>
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut labore et dolor magna aliqua.
      <div class="mt-4 space-x-4">
        <router-link to="#" class="btn-link">Learn more</router-link>
      </div>
    </Card>
    <Card
      title="Sales Automation"
      className="bg-slate-800"
      titleClass="text-white"
      noborder
    >
      <div class="text-white">
        Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
        tempor incididun ut labore et dolor magna aliqua.
      </div>
      <div class="mt-4 space-x-4">
        <router-link to="#" class="btn-link white">Learn more</router-link>
      </div>
    </Card>
    <Card
      title="Sales Automation"
      className="bg-[#EDFFE5] dark:bg-slate-800"
      noborder
    >
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut labore et dolor magna aliqua.
      <div class="mt-4 space-x-4">
        <router-link to="#" class="btn-link">Learn more</router-link>
      </div>
    </Card>
    <Card
      title="Sales Automation"
      className="bg-[#E5F9FF] dark:bg-slate-800	"
      noborder
    >
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut labore et dolor magna aliqua.
      <div class="mt-4 space-x-4">
        <router-link to="#" class="btn-link">Learn more</router-link>
      </div>
    </Card>
  </div>
  <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
    <Card title="Sales Automation" noborder>
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut labore et dolor magna aliqua.
      <div class="mt-9">
        <Button btnClass="btn-dark" text="Learn more" />
      </div>
    </Card>
    <Card title="Sales Automation" className=" text-center" noborder>
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut labore et dolor magna aliqua.
      <div class="mt-9">
        <Button btnClass="btn-dark" text="Learn more" />
      </div>
    </Card>
    <Card title="Sales Automation" className=" text-center" noborder>
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod
      tempor incididun ut labore et dolor magna aliqua.
      <div class="mt-9">
        <Button btnClass="btn-dark block-btn" text="Learn more" />
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import Button from "@/components/Button";
// image Import
import card4 from "@/assets/images/all-img/card-4.png"
import card5 from "@/assets/images/all-img/card-5.png"
import card6 from "@/assets/images/all-img/card-6.png"
import card7 from "@/assets/images/all-img/card-7.png"
export default {
  data() {
    return {
      card4,card5,card6,card7
    }
  },
  components: {
    Card,
    Button,
  },
};
</script>
<style lang="scss"></style>
