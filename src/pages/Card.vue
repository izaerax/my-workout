<template>
  <q-page class="row">
    <div class="q-px-lg q-pb-md">
      <q-timeline
        :layout="layout"
        color="primary"
      >
        <q-timeline-entry heading>
          Scheda A
        </q-timeline-entry>

        <q-timeline-entry
          v-for='excercise in card'
          :key='excercise.template.id'
          :title="excercise.template.name"
          :subtitle="excercise.conf.rec ? excercise.conf.rec + ' recupero' : ''"
          side="left"
        >
          <q-img v-if="excercise.template.src"
            :src='excercise.template.src'
            :ratio="4/3"
            fit='contain'
          />

          <div class='series' v-if='excercise.conf.series'>
            serie: {{excercise.conf.series}}
          </div>
          <div class='reps' v-if='excercise.conf.reps'>
            ripetizioni: {{excercise.conf.reps}}
          </div>
          <div class='time' v-if='excercise.conf.time'>
            tempo: {{excercise.conf.time}}
          </div>

        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 21, 1986"
          side="right"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry heading>
          Scheda B
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="right"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
          color="orange"
          icon="done_all"
        >
          <div>
            Lorem ipsum dolor sit amet
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="right"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>

        <q-timeline-entry
          title="Event Title"
          subtitle="February 22, 1986"
          side="left"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>
  </q-page>
</template>

<script lang='ts'>
import { useQuasar } from 'quasar'
import { computed, ref } from 'vue';
import { Excercise } from '../types/data';

const cardList: Array<Excercise> = [
  {
    template: {
      id: '1',
      name: 'Riscaldamento',
    },
    conf: {
      time: '10 min',
    }
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
    }
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
    }
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
    }
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
    }
  }
]
export default {
  setup () {
    const $q = useQuasar()

    const card = ref(cardList)

    return {
      layout: computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      }),
      card
    }
  }
}
</script>

<style scoped>

</style>
