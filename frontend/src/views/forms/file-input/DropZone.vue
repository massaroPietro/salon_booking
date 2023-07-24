<template>
  <div>
    <div
      v-bind="getRootProps()"
      class="w-full text-center border-dashed border border-secondary-500 rounded-md py-[52px] flex flex-col justify-center items-center"
      :class="files.length === 0 ? 'cursor-pointer' : ' pointer-events-none'"
    >
      <div v-if="files.length === 0">
        <input v-bind="getInputProps()" class="hidden" />
        <img src="@/assets/images/svg/upload.svg" alt="" class="mx-auto mb-4" />
        <p
          v-if="isDragActive"
          class="text-sm text-slate-500 dark:text-slate-300 font-light"
        >
          Drop the files here ...
        </p>
        <p v-else class="text-sm text-slate-500 dark:text-slate-300 font-light">
          Drop files here or click to upload.
        </p>
      </div>
      <div class="flex space-x-4">
        <div v-for="(file, i) in files" :key="i" class="mb-4 flex-none">
          <div class="h-[300px] w-[300px] mx-auto mt-6 rounded-md" key="{i}">
            <img
              :src="file.preview"
              class="object-cover h-full w-full block rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useDropzone } from "vue3-dropzone";
import { ref } from "vue";

export default {
  name: "UseDropzoneDemo",
  setup() {
    const files = ref([]);
    function onDrop(acceptFiles) {
      files.value = acceptFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
    }

    const { getRootProps, getInputProps, ...rest } = useDropzone({ onDrop });

    return {
      getRootProps,
      getInputProps,
      ...rest,
      files,
    };
  },
};
</script>
