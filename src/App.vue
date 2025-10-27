<template>
  <ion-app>
    <ion-router-outlet/>
    <ion-toast
        :isOpen="appToastRef?.isOpen"
        :message="appToastRef?.message"
        :duration="appToastRef?.duration"
        :color="appToastRef?.color"
    />
  </ion-app>
</template>

<script setup lang="ts">
import {IonApp, IonRouterOutlet, IonToast} from '@ionic/vue';
import {provide, readonly, ref} from "vue";

const appToastRef = ref<AppShowToast>();
const appSelectedCategoryRef = ref<MythCategory>();

const showSuccessToast = async (message: string) => {
  appToastRef.value = {isOpen: false};
  await new Promise(resolve => setTimeout(resolve, 750));
  appToastRef.value = {
    isOpen: true,
    message: message,
    duration: 2000,
    color: 'success',
  }
};
const showErrorToast = async (message: string) => {
  appToastRef.value = {isOpen: false};
  await new Promise(resolve => setTimeout(resolve, 750));
  appToastRef.value = {
    isOpen: true,
    message: message,
    duration: 2000,
    color: 'danger',
  }
};
provide('toast', {
  showSuccessToast,
  showErrorToast,
});

const updateSelectedCategory = (selectedCategory: MythCategory) => {
  appSelectedCategoryRef.value = selectedCategory;
};
provide('selectedCategory', {selectedCategory: readonly(appSelectedCategoryRef), updateSelectedCategory});
</script>
