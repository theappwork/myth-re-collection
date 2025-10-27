<template>
  <ion-list lines="full">
        <ion-item>
          <ion-label>
            <h1>Original Name</h1>
            <p>{{ figure.originalName }}</p>
          </ion-label>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Character</h2>
          </ion-label>
          <ion-note slot="end">{{ figure.character }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Cloth</h2>
          </ion-label>
          <ion-note slot="end">{{ figure.cloth }}</ion-note>
        </ion-item>
      </ion-list>

      <ion-list lines="full">
        <ion-item>
          <ion-label>
            <h2>Release Date</h2>
          </ion-label>
          <ion-note slot="end">{{ figure.releaseDate }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Price</h2>
          </ion-label>
          <ion-note slot="end">JYN {{ figure.price }}</ion-note>
        </ion-item>
        <ion-item>
          <ion-label>
            <h2>Edition</h2>
          </ion-label>
          <ion-note slot="end">{{ figure.edition }}</ion-note>
        </ion-item>
      </ion-list>

      <ion-list lines="full">
        <ion-item>
          <ion-label>
            <h2>Content</h2>
            <p>{{ figure.content }}</p>
          </ion-label>
        </ion-item>
      </ion-list>

      <ion-list lines="full">
        <ion-item>
          <ion-label>
            <h2>Official Site</h2>
          </ion-label>
          <ion-note slot="end">
            <a class="ion-text-nowrap" :href="figure.officialSite"
               rel="nofollow noopener noreferrer">{{ figure.officialSite }}</a>
          </ion-note>
        </ion-item>
      </ion-list>
</template>

<script setup lang="ts">
import {IonItem, IonLabel, IonList, IonNote} from "@ionic/vue";

interface Props {
  figure: MythFigure
}

const {figure} = defineProps<Props>();
</script>

<style scoped>
</style>