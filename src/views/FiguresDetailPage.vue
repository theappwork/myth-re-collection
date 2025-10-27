<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :defaultHref="'/categories/' + slug"/>
        </ion-buttons>
        <ion-title>{{ figureRef?.character }} - {{ figureRef?.cloth }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content v-if="figureRef" :fullscreen="true">
      <MythFigurePhotoGallery v-bind:photos="figureRef?.photos" v-bind:photoAlt="figureRef?.originalName"/>

      <MythFigureDetails v-bind:figure="figureRef"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/vue";
import MythFigurePhotoGallery from "@/components/MythFigurePhotoGallery.vue";
import {inject, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import MythFigureDetails from "@/components/MythFigureDetails.vue";

const route = useRoute();
const {slug, id} = route.params;

const {showErrorToast} = inject<any>('toast');
const figureRef = ref<MythFigure | undefined>();


onMounted(async () => {
  await fetch('/myth-figures-detail.json')
      .then(response => response.json())
      .then(data => data.find((figure: any) => figure.id === id))
      .then(figure => figureRef.value = figure)
      .catch(error => {
        showErrorToast(`Failed to load figure details`);
        console.error(error);
      });
});
</script>

<style scoped>
</style>