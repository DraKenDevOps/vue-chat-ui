import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles/main.css"
import { createVuetify } from "vuetify"
import { createApp } from "vue"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "./style.css"
import App from "./App.vue"

// const theme = useTheme()
const ltm = localStorage.getItem("THEME")
// if (ltm) theme.global.name.value = ltm
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: ltm || "dark"
    }
})
const app = createApp(App)
app.use(vuetify)
app.mount("#app")
