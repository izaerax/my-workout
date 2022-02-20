<template>
  <q-page class="row">
    <div class="q-px-lg q-pb-md full-width">
      <ExcerciseItem
        v-for="excercise in card"
        :key="excercise.template.id"
        :excercise="excercise"
      />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ExcerciseItem from 'src/components/ExcerciseItem.vue';
import { Excercise } from 'src/types/data';

const cardList: Array<Excercise> = [
  {
    template: {
      id: '1',
      name: 'Riscaldamento',
    },
    conf: {
      time: '10 min',
    },
  },
  {
    template: {
      id: '1',
      name: 'Trazioni presa inversa',
      src: 'trazioni_inverse.png',
    },
    conf: {
      reps: 12,
      series: 3,
      rec: '60 sec',
    },
  },
  {
    template: {
      id: '1',
      name: 'Trazioni presa inversa',
      src: 'trazioni_inverse.png',
    },
    conf: {
      reps: 12,
      series: 3,
      rec: '60 sec',
    },
  },
  {
    template: {
      id: '1',
      name: 'Trazioni presa inversa',
      src: 'trazioni_inverse.png',
    },
    conf: {
      reps: 12,
      series: 3,
      rec: '60 sec',
    },
  },
  {
    template: {
      id: '1',
      name: 'Trazioni presa inversa',
      src: 'trazioni_inverse.png',
    },
    conf: {
      reps: 12,
      series: 3,
      rec: '60 sec',
    },
  },
];
const card = ref(cardList);
</script>

<style scoped></style>
