<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title><!--No title--></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col
              v-for="(category, index) in categoryArrayRef"
              :key="index"
              size="12"
              size-md="6"
              size-lg="4"
          >
            <MythCategoryCard
                v-bind:category="category"
                v-bind:show-title="true"
            />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar} from '@ionic/vue';
import MythCategoryCard from "@/components/MythCategoryCard.vue";
import {inject, onMounted, ref} from "vue";

const categoryArrayRef = ref<MythCategory[]>([]);
const {showErrorToast} = inject<any>('toast');


const getAllMythCategories = () => fetch('/myth-categories.json')
    .then(response => response.json())
    .then(data => categoryArrayRef.value = data)
    .catch(error => {
      showErrorToast('Failed to load Cloth Lines');
      console.error(error);
    });


onMounted(async () => {
  await getAllMythCategories();
});
</script>

<style scoped>
</style>
