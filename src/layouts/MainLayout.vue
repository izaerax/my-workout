<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated bordered class='glossy'>
      <div class="text-h6 q-pa-md">
        {{ conf.appname }}
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated bordered class='glossy'>
      <footer-menu />
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import conf from 'src/conf/base';
import FooterMenu from 'components/FooterMenu.vue';
</script>
