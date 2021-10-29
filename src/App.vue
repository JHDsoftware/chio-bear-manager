<template>

  <v-app>
    <v-main>
      <router-view/>
    </v-main>
    <dashboard-core-drawer/>
  </v-app>
</template>
<script>
  export default {
    name: 'App',

    components: {
      DashboardCoreDrawer: () => import('./components/Drawer'),
    },
  }


</script>

<style>

</style>
