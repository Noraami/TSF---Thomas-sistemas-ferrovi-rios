<template>
  <v-app>
    <v-bottom-navigation class="d-flex align-center ga-10 bg-red-darken-4 h-auto py-3" :class="$vuetify.display.mobile ? 'ga-3' : 'ga-8'" location="bottom" >
      <v-btn v-for="page in pages" :key="page.name" class="bi text-h5 bg-blue text-amber-accent-3" :class="selectedPage === page.name ? `bi${page.selectedIcon}` : `bi${page.icon}`"
      @click="alterPage(page.path, page.name)" />
    </v-bottom-navigation>
    <router-view />
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
      path: 'maintenance',
      icon: 'bi bi-gear',
      selectedIcon: 'bi bi-gear-fill'
    },

    {
      name: 'Relatórios',
      path: 'reports',
      icon: 'bi bi-file-text',
      selectedIcon: 'bi bi-file-text-fill'
    },

    {
      name: 'Alertas',
      path: 'warnings',
      icon: 'bi bi-bell',
      selectedIcon: 'bi bi-bell-fill'
    },
  ])

  const alterPage = (page, name) => {
    router.push({ name: page })
    selectedPage.value = name
    console.log(name, selectedPage)
  }
</script>
