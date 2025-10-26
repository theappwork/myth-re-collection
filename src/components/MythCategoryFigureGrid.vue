<template>
  <ion-grid>
    <ion-row v-for="(subCategory, index) in subCategories" :key="index">
      <ion-col size="12" class="subtitle">{{ subCategory.name }}</ion-col>

      <ion-col
          v-for="figure in subCategory.figures"
          :key="figure.id"
          size="3" size-md="2"
          v-long-press :data-figure-id="figure.id" :router-link="'/categories/' + slug + '/figures/' + figure.id"
      >
        <ion-img :src="figure.coverPhoto" :alt="figure.name"/>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import {createGesture, IonCol, IonGrid, IonImg, IonRow} from "@ionic/vue";
import {useRoute} from "vue-router";

const router = useRoute();
const {slug} = router.params;

interface SubCategory {
  name: string,
  figures: { id: string, name: string, character: string, coverPhoto: string }[]
}

interface Props {
  subCategories: SubCategory[]
}

const {subCategories} = defineProps<Props>()

const vLongPress = {
  mounted(el: HTMLElement, binding: any) {
    const gesture = createGesture({
      el: el,
      passive: true,
      disableScroll: true,
      threshold: 0,
      onEnd: ({currentTime, startTime, /*data*/}) => {
        const timeElementPressed = currentTime - startTime;
        if (timeElementPressed > 500) {
          console.log("long pressed figure", el.dataset.figureId);
        }
      },
      gestureName: "long-press",
    });
    gesture.enable();
  },
}

</script>

<style scoped>
.subtitle {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 1rem;
}
</style>