<template>
  <v-container class="grey lighten-5">
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-img :src="newsDetails.urlToImage" height="300px"></v-img>
        <v-card-title class="headline grey lighten-2">
          {{ newsDetails.title }}
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle>{{ newsDetails.description }}</v-card-subtitle>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" text :href="newsDetails.url" target="_blank"
            >Read full article</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row>
      <v-col v-for="(item, index) in list" :key="index" cols="6" sm="3">
        <v-card class="pa-2" outlined tile>
          <v-img :src="item.urlToImage" height="200px"></v-img>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-actions @click="handleDetails(item)">
            <v-btn color="orange lighten-2" text> Read more </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>{{ "mdi-chevron-right" }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component
export default class Results extends Vue {
  list: any = [];
  dialog = false;
  newsDetails = {};
  @Prop() private data!: any;
  @Watch("data", { deep: true })
  onChange(v: any) {
    this.list = v;
  }
  handleDetails(item: any) {
    this.dialog = true;
    this.newsDetails = item;
  }
}
</script>