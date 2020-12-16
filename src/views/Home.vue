<template>
  <div class="home">
    <Filters />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Filters from '@/components/Filters/Filters.vue';

@Component({
  components: {
    Filters
  },
})
export default class Home extends Vue {}
</script>
