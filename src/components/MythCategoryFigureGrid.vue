<template>
  <ion-grid>
    <ion-row v-for="(subCategory, index) in subCategories" :key="index">
      <ion-col size="12" class="subtitle">{{ subCategory.name }}</ion-col>
      <ion-col v-for="figure in subCategory.figures" :key="figure.id" size="3" size-md="2">
        <ion-img :src="figure.coverPhoto" :alt="figure.name"/>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {IonCol, IonGrid, IonImg, IonRow} from "@ionic/vue";

interface SubCategory {
  name: string,
  figures: { id: string, name: string, character: string, coverPhoto: string }[]
}

interface Props {
  subCategories: SubCategory[]
}

const {subCategories} = defineProps<Props>()
</script>

<style scoped>
.subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
}
</style>