<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>{{figureRef?.character}} - {{figureRef?.cloth}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <div class="carousel">
        <div class="carousel--content" v-for="(photo, index) in figureRef?.photos" :key="index">
          <ion-img v-on:click="onCarouselPhotoClick" :src="photo" :alt="figureRef?.character"/>
        </div>
      </div>
      <ion-modal ref="modal">
        <ion-content>
          <ion-img :src="figureRef?.photos[0]" :alt="figureRef?.character"/>
        </ion-content>
      </ion-modal>

      <ion-list lines="full">
        <ion-item>
          <ion-label>
            <h1>Original Name</h1>
            <p>{{figureRef?.originalName}}</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Character</h2>
          </ion-label>
          <ion-note slot="end">{{figureRef?.character}}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Cloth</h2>
          </ion-label>
          <ion-note slot="end">{{figureRef?.cloth}}</ion-note>
        </ion-item>
      </ion-list>

      <ion-list lines="full">
        <ion-item>
          <ion-label>
            <h2>Release Date</h2>
          </ion-label>
          <ion-note slot="end">{{figureRef?.releaseDate}}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Price</h2>
          </ion-label>
          <ion-note slot="end">JYN {{figureRef?.price}}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Edition</h2>
          </ion-label>
          <ion-note slot="end">{{figureRef?.edition}}</ion-note>
        </ion-item>
      </ion-list>

      <ion-list lines="full">
        <ion-item>
          <ion-label>
            <h2>Content</h2>
            <p>{{figureRef?.content}}</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-list lines="full">
        <ion-item>
          <ion-label>
            <h2>Official Site</h2>
          </ion-label>
          <ion-note slot="end">
            <a class="ion-text-nowrap" :href="figureRef?.officialSite" rel="nofollow noopener noreferrer">{{figureRef?.officialSite}}</a>
          </ion-note>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonNote, IonModal, IonImg} from "@ionic/vue";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const {id} = route.params;

const figureRef = ref<{
  id: string,
  photos: string[],
  originalName: string,
  character: string,
  cloth: string,
  releaseDate: string,
  price: string,
  edition: string,
  content: string,
  officialSite: string
}>();
const modal = ref();

onMounted(async () => {
  await fetch('/myth-figures-detail.json')
      .then(response => response.json())
      .then(data => data.find((figure: any) => figure.id === id))
      .then(figure => figureRef.value = figure)
      .catch(error => console.error(error));
});

const onCarouselPhotoClick = () => {
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