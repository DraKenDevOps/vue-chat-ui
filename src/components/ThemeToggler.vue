<script setup lang="ts">
import { ref } from "vue"
import { useTheme } from "vuetify"
const theme = useTheme()
const mode = ref("light")
function toggleTheme() {
    mode.value = mode.value === "light" ? "dark" : "light"
    theme.global.name.value = mode.value
    localStorage.setItem("THEME", mode.value)
}
</script>
<template>
    <v-btn icon @click="toggleTheme">
        <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
</template>