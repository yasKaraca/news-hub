<template>
  <div class="home">
    <Filters @data="getData" />
    <Results :data="news"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Filters from '@/components/Filters/Filters.vue';
import Results from '@/components/Results.vue';

@Component({
  components: {
    Filters,
    Results
  },
})
export default class Home extends Vue {
  news: any = {}
  getData(data: any) {
    this.news = data
  }
}
</script>
