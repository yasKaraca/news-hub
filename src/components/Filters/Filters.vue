<template>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <v-select
          :items="Countries"
          item-text="name"
          item-value="code"
          label="Country"
          v-model="CountryValue"
          solo
          @change="getNews"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <v-select
          :items="Categories"
          label="Category"
          v-model="CategoryValue"
          solo
          @change="getNews"
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <v-text-field
            label="Query"
            v-model="QueryValue"
            solo
            @keyup="getNews"
          ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { CountryInterface } from './countries';
import axios from 'axios'

@Component({
  components: {
  },
})
export default class Filters extends Vue {
    CountryValue = '';
    CategoryValue = ''
    QueryValue = ''
    @Prop() Countries?: Array<CountryInterface>;
    @Prop() Categories!: Array<string>;
    @Prop() DefaultCountry!: string;
    getNews () {
      let params = `?country=${this.CountryValue}`
      if (this.CategoryValue) {
        params = `${params}&category=${this.CategoryValue}`
      }
      if (this.QueryValue) {
        params = `${params}&q=${this.QueryValue}`
      }
      const url =`${process.env.VUE_APP_API_URL}${params}&apiKey=${process.env.VUE_APP_API_KEY}`
      axios({
        method: 'get',
        url: url
      }).then((response) => {
        this.$emit('data', response.data.articles)
      })
    }
    created() {
      this.CountryValue = this.DefaultCountry;
      this.getNews();
    }
}
</script>