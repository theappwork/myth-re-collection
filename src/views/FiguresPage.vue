<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title><!--No title--></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <MythCategoryCard v-if="categoryRef" v-bind:category="categoryRef" v-bind:show-title="false"/>

      <MythCategoryFigureGrid v-bind:sub-categories="subCategoryRef"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/vue";
import MythCategoryCard from '../components/MythCategoryCard.vue';
import MythCategoryFigureGrid from '../components/MythCategoryFigureGrid.vue';
import {useRoute} from 'vue-router';
import {onMounted, ref, watch} from "vue";

const router = useRoute();
const {slug} = router.params;

const categoryRef = ref<{ title: string, slug: string, coverPhoto: string, total: number }>();
const subCategoryRef = ref<{
  name: string,
  figures: { id: string, name: string, character: string, coverPhoto: string }[]
}[]>([]);

onMounted(async () => {
  await fetch('/myth-categories.json')
      .then(response => response.json())
      .then(data => data.find((category: any) => category.slug === slug))
      .then(category => categoryRef.value = category)
      .catch(error => console.error(error));
});

watch(categoryRef, async (newValue) => {
  await fetch('/myth-figures.json')
      .then(response => response.json())
      .then(data => data.find((figure: any) => figure.category === newValue?.slug))
      .then(data => subCategoryRef.value = data.subCategories)
      .catch(error => console.error(error));
});
</script>

<style scoped>
</style>