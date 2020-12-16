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
          item-text="label"
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
import { Component, Vue } from 'vue-property-decorator';
import { Countries } from './countries';
import { Categories } from './categories';
import axios from 'axios'

@Component({
  components: {
  },
})
export default class Filters extends Vue {
    Countries: object = Countries
    Categories: any = Categories
    CountryValue: string = Countries[Countries.length-2].code
    CategoryValue = ''
    QueryValue = ''
    getNews () {
      let params = `?country=${this.CountryValue}`
      if (this.CategoryValue) {
        params = `${params}&category=${this.CategoryValue}`
      }
      if (this.QueryValue) {
        params = `${params}&q=${this.QueryValue}`
      }
      const url =`http://newsapi.org/v2/top-headlines${params}&apiKey=23e24bad61234e3f8db91d0ee67ae75f`
      axios({
        method: 'get',
        url: url
      }).then((response) => {
        this.$emit('data', response)
      })
    }
    created() {
      this.getNews()
    }
}
</script>