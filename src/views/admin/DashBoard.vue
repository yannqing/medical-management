<script setup lang="ts">

</script>

<template>
  <v-row class="ml-7 mr-3">
    <v-col cols="15">
      <v-card
        style="border-radius: 15px; height: 20vh;"
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>
    </v-col>

    <v-col cols="2">
      <v-card
      style="border-radius: 15px; height: 20vh;">
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>
      </v-card>
    </v-col>

    <v-col cols="2">
      <v-card
      style="border-radius: 15px; height: 20vh;">
        <v-card-item>
          <v-card-title>This is a title</v-card-title>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card
        style="border-radius: 15px; height: 20vh;">
        <v-card-item>
          <v-card-title>This is a title</v-card-title>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>


<!--  第二行-->
  <v-row class="ml-7 mr-3">
    <v-col cols="15">
      <v-card
        style="border-radius: 15px; height: 60vh;"
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>
    </v-col>

    <v-col cols="4">
      <v-card
        style="border-radius: 15px; height: 60vh;">
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>
    </v-col>
  </v-row>

<!--  第三行-->
  <v-row class="ml-7 mr-3">
    <v-col cols="15">
      <v-card
        style="border-radius: 15px; height: 60vh;"
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>
    </v-col>

    <v-col cols="4">
      <v-card
        style="border-radius: 15px; height: 60vh;">
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>

</style>
