<template>
  <div class="q-pt-lg excercise-item">
    <div class="name text-h5">{{ template.name }}</div>
    <q-img v-if="template.src" class="full-width" :src="template.src" />

    <div v-if="conf.reps" class="reps">Ripetizioni: {{ conf.reps }}</div>

    <div v-if="conf.series" class="series">Serie: {{ conf.series }}</div>

    <div v-if="conf.rec" class="rec">Recupero: {{ conf.rec }}</div>

    <div v-if="conf.weight" class="weight">Peso: {{ conf.weight }} Kg</div>

    <div v-if="conf.time" class="time">{{ conf.time }}</div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed } from 'vue';
import { Excercise } from 'src/types/data';

const props = defineProps({
  excercise: {
    type: Object as PropType<Excercise>,
    required: true,
  },
});
const conf = computed(() => props.excercise.conf);
const template = computed(() => props.excercise.template);
</script>
