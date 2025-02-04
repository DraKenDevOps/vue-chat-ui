<script setup lang="ts">
import { ref } from "vue"
import MenuPopover from "./components/MenuPopover.vue"
import ThemeToggler from "./components/ThemeToggler.vue"
const open = ref(false)
const sidebarItems = ref([
    { title: "Home", icon: "mdi-home" },
    { title: "About", icon: "mdi-information" },
    { title: "Contact", icon: "mdi-email" }
])
function toggleDrawer() {
    open.value = !open.value
}
</script>

<template>
    <v-app>
        <v-navigation-drawer v-model="open">
            <v-list>
                <v-list-item>
                    <div style="display: flex; justify-content: space-between; align-items: center">
                        <v-app-bar-nav-icon v-if="open" @click="toggleDrawer"></v-app-bar-nav-icon>
                        <h4>DeepSeek UI</h4>
                    </div>
                </v-list-item>
                <v-list-item v-for="(item, i) in sidebarItems" :key="i" :value="item">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar dense elevation="0">
            <v-app-bar-nav-icon v-if="!open" @click="toggleDrawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <menu-popover />
            <theme-toggler />
        </v-app-bar>
        <v-main>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <h1>Welcome to DeepSeek UI COPY</h1>
                        <p>This is the main content area.</p>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
