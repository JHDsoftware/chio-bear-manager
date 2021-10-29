<template>
    <v-bottom-navigation>
        <template v-for="(item, i) in items" >
                <v-btn :key="`item-${i}`" @click="goNext(i)">
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
                    to: '/',
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
                    title: 'Training',
                    icon: 'mdi-horseshoe',
                    name: 'Training',
                    to: '/Training',
                    brief: true,
                },
                {
                    icon: 'mdi-account',
                    title: 'My',
                    name: 'MyInfo',
                    to: '/My',
                },
            ],
        }),

        methods:{
            goNext (index) {
                this.$router.push({
                    name: this.items[index].name
                })
            },
        }

    }
</script>

