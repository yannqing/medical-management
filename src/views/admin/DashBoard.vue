<script setup lang="ts">

</script>

<template>
<div class="ml-10 mr-5">
<!--  第一行-->
  <v-row class="">
    <v-col cols="15">
      <v-card
        class="first-row-card"
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>
    </v-col>

    <v-col cols="2">
      <v-card class="first-row-card">
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>
      </v-card>
    </v-col>

    <v-col cols="2">
      <v-card class="first-row-card">
        <v-card-item>
          <v-card-title>This is a title</v-card-title>
        </v-card-item>
      </v-card>
    </v-col>
    <v-col cols="2">
      <v-card class="first-row-card">
        <v-card-item>
          <v-card-title>This is a title</v-card-title>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>


  <!--  第二行-->
  <v-row class="">
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
  <v-row class="">
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
</div>
</template>

<style scoped lang="scss">

// first row card style
$first-row-card-height: 20vh;         // card height
$first-row-card-border-radius: 15px;  // card border radius

.first-row-card {
  height: $first-row-card-height;
  border-radius: $first-row-card-border-radius;
}

</style>
