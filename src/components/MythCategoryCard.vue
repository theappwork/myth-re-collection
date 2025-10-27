<template>
  <!-- REMINDER: do NOT use ion-card :href, use :router-link -->
  <ion-card
      :button="true"
      :disabled="category.total === 0"
      @click="onCardClick">
    <ion-card-header v-if="showTitle">
      <ion-card-title>{{ category.title }}</ion-card-title>
    </ion-card-header>

    <ion-img :src="category.coverPhoto" :alt="category.title"/>

    <ion-card-content>
      <progress
          value="36"
          :max="category.total"
          :data-coming-soon="category.total === 0 ? true : undefined"
      />
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
// TODO: get own collection total figures (replace fixed '36')
import {IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg} from "@ionic/vue";
import {useRouter} from "vue-router";
import {inject} from "vue";

interface Props {
  category: MythCategory,
  showTitle: boolean
}

const {category, showTitle = true} = defineProps<Props>();

const router = useRouter();
const {updateSelectedCategory} = inject<any>('selectedCategory');

const onCardClick = () => {
  updateSelectedCategory(category);
  return router.push(`/categories/${category.slug}`);
}
</script>

<style scoped>
ion-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

ion-card ion-card-header ion-card-title {
  text-align: center;
}

ion-card ion-card-content progress,
ion-card ion-card-content progress:after {
  width: 100%;
  height: 2.5rem;
}

ion-card ion-card-content progress:after {
  color: whitesmoke;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

ion-card ion-card-content progress:not([data-coming-soon]):after {
  content: attr(value) ' / ' attr(max);
}

ion-card ion-card-content progress:after {
  content: 'Coming soon';
}
</style>