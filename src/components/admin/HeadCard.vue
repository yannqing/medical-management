<script setup lang="ts">

const props = defineProps({
  rail: {
    type: Boolean,
    required: true,
  }
});

const emit = defineEmits(['update:rail']);

const changeRail = () => {
  emit('update:rail', !props.rail);
  console.log("update-rail", props.rail);
};
</script>

<template>
<v-card
  elevation="3"
  class="ml-10 mr-5 my-5 pa-3"
  style="border-radius: 15px; position: sticky; top: 0; z-index: 1;">
  <div class="flex flex-row justify-between">

    <v-btn variant="text" density="default" icon="mdi-open-in-new" @click="changeRail">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00c2bf"><path d="M120-240v-80h240v80H120Zm0-200v-80h480v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </v-btn>
    <div class="flex flex-row gap-2">
      <v-btn icon="mdi-apple" variant="text" />
      <v-btn icon="$vuetify" variant="text" />
      <v-btn icon="$vuetify" variant="text" />
      <v-btn icon="$vuetify" variant="text" />
    </div>
  </div>
</v-card>
</template>

<style scoped>

</style>
