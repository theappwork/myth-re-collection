1
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/home"/>
        </ion-buttons>
        <ion-title>{{ categoryRef?.title }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <MythCategoryCard v-if="categoryRef" v-bind:category="categoryRef" v-bind:show-title="false"/>

      <MythCategoryFigureGrid v-if="subCategoryRef.length" v-bind:sub-categories="subCategoryRef"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  onIonViewWillEnter
} from "@ionic/vue";
import MythCategoryCard from '@/components/MythCategoryCard.vue';
import MythCategoryFigureGrid from '@/components/MythCategoryFigureGrid.vue';
import {inject, onMounted, ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const {showErrorToast} = inject<any>('toast');
const {selectedCategory} = inject<any>('selectedCategory');
const categoryRef = ref<MythCategory | undefined>(selectedCategory.value);
const subCategoryRef = ref<MythCategorySubcategory[]>([]);

onIonViewWillEnter(() => {
  if (selectedCategory.value) {
    return;
  }
  return router.replace('/home');
});

onMounted(async () => {
  await fetch('/myth-figures.json')
      .then(response => response.json())
      .then(data => data.find((figure: any) => figure.category === categoryRef?.value?.slug))
      .then(data => subCategoryRef.value = data.subCategories)
      .catch(error => {
        showErrorToast(`Failed to load sub-lines`);
        console.error(error);
      });
});
</script>

<style scoped>
</style>