<script setup lang="ts">
import { ref } from "vue"
// const fav = ref(true);
const menu = ref(false)
const message = ref(false)
const hints = ref(true)
</script>
<template>
    <div class="text-center">
        <v-menu v-model="menu" :close-on-content-click="false" location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </template>
            <v-card min-width="300">
                <v-list>
                    <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg" subtitle="Founder of Vuetify" title="John Leider">
                        <!-- <template v-slot:append>
                          <v-btn
                            :class="fav ? 'text-red' : ''"
                            icon="mdi-heart"
                            variant="text"
                            @click="fav = !fav"
                          ></v-btn>
                        </template> -->
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                    <v-list-item>
                        <v-switch v-model="message" color="purple" label="Enable messages" hide-details></v-switch>
                    </v-list-item>
                    <v-list-item>
                        <v-switch v-model="hints" color="purple" label="Enable hints" hide-details></v-switch>
                    </v-list-item>
                    <v-list-item>
                      <v-btn title="log out"></v-btn>
                    </v-list-item>
                </v-list>

                <!-- <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn
                    variant="text"
                    @click="menu = false"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="primary"
                    variant="text"
                    @click="menu = false"
                  >
                    Save
                  </v-btn>
                </v-card-actions> -->
            </v-card>
        </v-menu>
    </div>
</template>
