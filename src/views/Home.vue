<template>
  <div class="home">
    <Filters @data="getData" :Countries="countries" :DefaultCountry="defaultCountry" :PCategories="categories"/>
    <Results :data="news"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Filters from '@/components/Filters/Filters.vue';
import Results from '@/components/Results.vue';
import { Country, CountryInterface, Codes, Names } from "@/components/Filters/countries";
import { Categories } from "@/components/Filters/categories";
import { NewsInterface } from "@/components/news";

@Component({
  components: {
    Filters,
    Results
  },
})
export default class Home extends Vue {
  news: Array<NewsInterface> = [];
  countries: Array<CountryInterface> = [];
  categories: Array<string> = Categories;
  defaultCountry: string = Codes[Codes.length-2]; // =us
  getData(data:  Array<NewsInterface>) {
    this.news = data
  }
  created() {
    for (let i=0; i<Codes.length; i++) {
      this.countries.push(new Country( { code: Codes[i], name: Names[i]} ))
    }
  }
}
</script>
