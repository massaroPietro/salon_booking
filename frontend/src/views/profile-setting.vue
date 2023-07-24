<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="lg:col-span-3 md:col-span-5 col-span-12">
      <Card>
        <div class="space-y-8">
          <div
            class="h-[150px] w-[150px] mx-auto rounded-full ring-4 ring-slate-100 relative"
          >
            <img
              src="@/assets/images/users/user-1.jpg"
              alt=""
              class="w-full h-full object-cover rounded-full"
            />
          </div>
          <div class="text-center">
            <label class="cursor-pointer">
              <input type="file" class="hidden" />
              <span class="btn btn-outline-dark rounded-full">
                Upload Proifle Photo
              </span>
            </label>
          </div>
          <div class="text-sm text-slate-600 dark:text-slate-300">
            <span class="font-bold"> Remember:</span> For best results, use an
            image at least 200px by 200px in .jpg or .png format
          </div>
        </div>
      </Card>
    </div>
    <div class="lg:col-span-9 md:col-span-7 col-span-12">
      <Card title="basic info-500">
        <form class="md:grid-cols-2 grid-cols-1 gap-6 grid">
          <Textinput
            label="First name"
            name="h_Fullname"
            type="text"
            placeholder="First name"
          />
          <Textinput
            label="Last name"
            name="h_last"
            type="text"
            placeholder="Last name"
          />
          <div class="md:col-span-2 col-span-1">
            <Textarea
              label="Boigraphy"
              name="boigraphy"
              placeholder="Boigraphy"
            />
            <div class="text-right mt-6">
              <button class="btn btn-dark rounded-full">Save Changes</button>
            </div>
          </div>
        </form>
      </Card>
    </div>
  </div>
</template>

<script setup>
import Card from "@/components/Card";
import Textinput from "@/components/Textinput";
import Textarea from "@/components/Textarea";
// import Icon from "@/components/Icon";
</script>
<style lang=""></style>
