<template>
  <v-container class="grey lighten-5">
    <Modal :ShowModal="showModal" :NewsDetails="modalData" @closeModal="handleModal"/>
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
import { NewsInterface, emptyNews } from "@/components/news";
import Modal from "@/components/Modal.vue";

@Component({
  components: {
    Modal
  }
})
export default class Results extends Vue {
  list: Array<NewsInterface> = [];
  newsDetails: NewsInterface = emptyNews;
  showModal = false;

  get modalData() {
    return this.newsDetails;
  }

  set modalData(v: NewsInterface) {
    this.newsDetails = v; 
  }

  handleModal(v: boolean) {
    this.showModal = v;
  }

  @Prop() private data!: Array<NewsInterface>;
  @Watch("data", { deep: true })
  onChange(v: Array<NewsInterface>) {
    this.list = v;
  }
  handleDetails(item: NewsInterface) {
    this.modalData = item;
    this.showModal = true;
  }
}
</script>