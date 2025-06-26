<template>
  <v-container class="mt-10">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="pa-4" elevation="6" rounded="xl">
          <v-row no-gutters align="center">
            <v-col cols="12" sm="4" class="text-center">
              <v-avatar size="120">
                <v-img :src="profile.avatar" alt="Profile Image" />
              </v-avatar>
            </v-col>

            <v-col cols="12" sm="8">
              <v-card-title class="text-h5">{{ profile.name }}</v-card-title>
              <v-card-subtitle class="mb-2 text-subtitle-1">{{ profile.role }}</v-card-subtitle>
              <v-list dense>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-github</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      <a :href="profile.github" target="_blank">{{ profile.github }}</a>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-icon>
                    <v-icon>mdi-star-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ profile.skills.join(', ') }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const profile = {
  name: 'Alice',
  role: 'Frontend Developer',
  avatar: 'https://i.pravatar.cc/150?u=alice', // เปลี่ยน URL ตามชื่อ
  github: 'https://github.com/alice',
  skills: ['Nuxt', 'Vuetify', 'Git'],
}
</script>
