<template>
  <v-app>
    <router-view />
    <v-bottom-navigation grow class="d-flex">
      <v-btn v-for="page in pages" :key="page.name" class="bi text-h5" :class="selectedPage === page.name ? `bi${page.selectedIcon}` : `bi${page.icon}`" @click="alterPage(page.path)" />
    </v-bottom-navigation>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const selectedPage = ref('Home')

  const pages = ref([
    {
      name: 'Home',
      path: 'home',
      icon: 'bi bi-house',
      selectedIcon: 'bi bi-house-fill'
    },

    {
      name: 'status',
      path: 'status',
      icon: 'bi bi-train-front',
      selectedIcon: 'bi bi-train-front-fill'
    },

    {
      name: 'Linhas',
      path: 'lines',
      icon: 'bi bi-map',
      selectedIcon: 'bi bi-map-fill'
    },

    {
      name: 'Manutenção',
      path: 'manutention',
      icon: 'bi bi-gear',
      selectedIcon: 'bi bi-gear-fill'
    },

    {
      name: 'Relatórios',
      path: 'relatory',
      icon: 'bi bi-file-text',
      selectedIcon: 'bi bi-file-text-fill'
    },

    {
      name: 'Alertas',
      path: 'alerts',
      icon: 'bi bi-bell',
      selectedIcon: 'bi bi-bell-fill'
    },
  ])

  const alterPage = (page) => {
    router.push({ name: page })
  }
</script>
