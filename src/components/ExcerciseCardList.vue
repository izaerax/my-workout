<template>
  <div class="q-pa-md">
    <q-list bordered padding class="rounded-borders">
      <q-item-label header>Schede</q-item-label>

      <q-item clickable :to='"/card/" + id' v-ripple>
        <q-item-section avatar top>
          <q-avatar icon="assignment" color="primary" text-color="white" />
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Scheda</q-item-label>
          <q-item-label caption>Gennaio - febbraio</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon name="info" color="green" />
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script lang="ts" setup>
const id = 1
</script>

<style lang="scss"></style>
