<template>
  <v-app>
    <v-bottom-navigation class="d-flex align-center bg-red-darken-4 h-auto pt-2 pb-2 pr-4 pl-4">
      <div class="w-100 d-flex justify-space-around"><v-btn v-for="page in pages" :key="page.name" class="bi text-h5 text-amber-accent-3" :class="selectedPage === page.name ? `bi${page.selectedIcon}` : `bi${page.icon}`"
      @click="alterPage(page.path, page.name)" style="min-width: 0; width: auto; padding: 10px 7vw; height: fit-content; max-width: 20px;"/></div>
    </v-bottom-navigation>
    <router-view />
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()

  const selectedPage = ref('Status')

  const pages = ref([

    {
      name: 'Status',
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
