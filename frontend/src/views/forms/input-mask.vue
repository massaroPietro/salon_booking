<template>
  <div>
    <Card title="Input Mask">
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <Textinput
          label="Credit Card"
          v-model="form.cardNumber"
          :options="options.creditCard"
          placeholder="0000 0000 0000 0000"
          isMask
        />
        <InputGroup
          label="Phone Number"
          prepend="MY (+6)"
          placeholder="Phone Number"
          name="phoneNumber"
          v-model="form.phone"
          :options="options.phone"
          isMask
        />
        <Textinput
          label="Date"
          name="date"
          v-model="form.date"
          :options="options.date"
          placeholder="YYYY-MM-DD"
          isMask
        />
        <Textinput
          label="Time"
          name="time"
          v-model="form.time"
          :options="options.time"
          placeholder="HH:MM:SS"
          isMask
        />
        <Textinput
          label="Numeral Formatting"
          name="nu"
          v-model="form.number"
          :options="options.number"
          placeholder="10,000"
          isMask
        />
        <Textinput
          label="Blocks"
          name="block"
          v-model="form.block"
          :options="options.block"
          placeholder="Block[1,4,7]"
          isMask
        />
        <Textinput
          label="Delimiters"
          name="delimiters"
          v-model="form.delimiter"
          :options="options.delimiter"
          placeholder="Delimiter: '.'"
          isMask
        />
        <Textinput
          label="Custom Delimiters"
          name="customDelimiter"
          v-model="form.customDelimiter"
          :options="options.customDelimiter"
          placeholder="Delimiter: ['.', '.', '-']"
          isMask
        />
        <Textinput
          label="prefix"
          name="prefix"
          v-model="form.prefix"
          :options="options.prefix"
          placeholder="+88"
          isMask
        />
      </div>
    </Card>
  </div>
</template>
<script>
import Card from "@/components/Card";
import InputGroup from "@/components/InputGroup";
import Textinput from "@/components/Textinput";
export default {
  components: {
    Card,
    Textinput,
    InputGroup,
  },

  data() {
    return {
      form: {
        cardNumber: null,
        phone: null,
        date: null,
        time: null,
        number: null,
        block: null,
        delimiters: null,
        customDelimiter: null,
        prefix: null,
      },
      options: {
        creditCard: {
          creditCard: true,
          delimiter: "-",
        },
        // phone: {
        //   phone: true,
        //   //phoneRegionCode: "US",
        // },
        date: {
          date: true,
          delimiter: "-",
          datePattern: ["Y", "m", "d"],
        },
        time: {
          time: true,
          timePattern: ["h", "m", "s"],
        },
        number: {
          numeral: true,
          numeralThousandsGroupStyle: "thousand",
        },
        block: {
          blocks: [4, 3, 3],
          uppercase: true,
        },
        delimiter: {
          delimiter: "·",
          blocks: [3, 3, 3],
          uppercase: true,
        },
        customDelimiter: {
          delimiters: [".", ".", "-"],
          blocks: [3, 3, 3, 2],
          uppercase: true,
        },
        prefix: {
          prefix: "+88",
          blocks: [3, 3, 3, 4],
          uppercase: true,
        },
      },
    };
  },
};
</script>
<style lang=""></style>
