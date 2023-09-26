<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/tiptap">TipTap editor</router-link>
      </li>
    </ul>
  </header>
  <RouterView />
</template>

<style scoped></style>
