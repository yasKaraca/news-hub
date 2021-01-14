<template>
  <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-img :src="NewsDetails.urlToImage" height="300px"></v-img>
        <v-card-title class="headline grey lighten-2">
          {{ NewsDetails.title }}
        </v-card-title>
        <v-spacer></v-spacer>
        <v-card-subtitle>{{ NewsDetails.description }}</v-card-subtitle>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" text :href="NewsDetails.url" target="_blank"
            >Read full article</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="handleClick"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { NewsInterface } from "@/components/news";

@Component
export default class Modal extends Vue {
    dialog = false;
    @Prop() NewsDetails?: NewsInterface;
    @Prop() ShowModal?: boolean;

    handleClick() {
        this.dialog = false;
        this.$emit("closeModal", false)
    }

    @Watch("ShowModal")
    updateDialog(v: boolean) {
        this.dialog = v;
    }
}
</script>

<style>

</style>