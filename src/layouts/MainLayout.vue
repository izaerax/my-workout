<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <div class="text-h6 q-pa-md">
        {{ conf.appname }}
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import conf from 'src/conf/base';
</script>
