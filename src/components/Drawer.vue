<template>
    <v-bottom-navigation app>
        <template v-for="(item, i) in items" >
                <v-btn :key="`item-${i}`" :to=item.to>
                    <span>{{item.title}}</span>

                    <v-icon>{{item.icon}}</v-icon>
                </v-btn>
        </template>
    </v-bottom-navigation>
</template>

<script>
    // Utilities
    export default {
        name: 'DashboardCoreDrawer',


        data: () => ({
            items: [
                {
                    icon: 'mdi-horse-variant-fast',
                    title: 'Horses',
                    name: 'Horses',
                    to: '/Horses',
                    brief: true,
                },
                {
                    title: 'Events',
                    icon: 'mdi-horse-human',
                    name: 'Events',
                    to: '/Events',
                    brief: true,
                },
                {
                    icon: 'mdi-account',
                    title: 'My',
                    name: 'MyInfo',
                    to: '/MyInfo',
                },
            ],
        }),

    }
</script>

