<template>
  <div>
    <div class="mx-auto flex z-[5] items-center relative justify-center">
      <div
        class="relative z-[1] items-center item flex flex-start flex-1 last:flex-none"
        v-for="(item, i) in steps"
        :key="i"
      >
        <div
          :class="`   ${
            stepNumber >= i
              ? 'bg-blue-500 text-white ring-primary-500 ring-offset-2'
              : 'bg-white ring-primary-500 ring-opacity-70  text-primary-500 text-opacity-70'
          }`"
          class="icon-box h-12 w-12 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 text-lg font-medium"
        >
          <span v-if="stepNumber <= i"> {{ i + 1 }}</span>
          <span v-else class="text-3xl"><Icon icon="bx:check-double" /></span>
        </div>

        <div
          class="absolute top-1/2 h-[2px] w-full"
          :class="stepNumber >= i ? 'bg-primary-500' : 'bg-[#E0EAFF]'"
        ></div>

        <div
          class="text-sm mt-[10px] leading-[16px] font-medium capitalize text-slate-500-500 text-center"
        ></div>
      </div>
    </div>

    <div class="flex justify-between mt-10">
      <Button
        @click.prevent="prev()"
        text="prev"
        :isDisabled="this.stepNumber === 0"
      />
      <Button
        @click.prevent="next()"
        text="next"
        :isDisabled="this.stepNumber === this.steps.length - 1"
      />
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import Icon from "@/components/Icon";
export default {
  components: {
    Button,
    Icon,
  },
  data() {
    return {
      steps: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
      stepNumber: 0,
    };
  },
  methods: {
    next() {
      let totalSteps = this.steps.length;
      const isLastStep = this.stepNumber === totalSteps - 1;
      if (isLastStep) {
        this.stepNumber = totalSteps - 1;
      } else {
        this.stepNumber++;
      }
    },
    prev() {
      this.stepNumber--;
    },
  },
};
</script>
<style lang="scss" scoped></style>
