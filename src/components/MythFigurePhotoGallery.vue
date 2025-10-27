<template>
  <div class="carousel">
    <div class="carousel--content" v-for="(photo, index) in photos" :key="index">
      <ion-img v-on:click="onCarouselPhotoClick" :src="photo" :alt="photoAlt"/>
    </div>
  </div>
  <ion-modal ref="modal">
    <ion-content>
      <ion-img :src="selectedPhotoRef" :alt="photoAlt"/>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
import {IonContent, IonImg, IonModal} from "@ionic/vue";
import {ref} from "vue";

interface Props {
  photos: string[],
  photoAlt: string,
}

const {photos, photoAlt} = defineProps<Props>();
const modal = ref();
const selectedPhotoRef = ref();

const onCarouselPhotoClick = (event: any) => {
  selectedPhotoRef.value = event.target.src;
  modal.value.$el.present();
};
</script>

<style scoped>
.carousel {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: grid;
  grid: auto / auto-flow max-content;
  grid-gap: 1rem;
  align-items: center;
}

.carousel--content {
  scroll-snap-align: center;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

ion-modal {
  --height: 75%;
}

ion-modal ion-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>