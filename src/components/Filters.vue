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
          solo
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <v-select
          :items="['test']"
          label="Solo field"
          solo
        ></v-select>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="4"
      >
        <v-text-field
            label="Solo"
            solo
          ></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Countries } from './index';

@Component({
  components: {
  },
})
export default class Filters extends Vue {
    Countries: object = Countries
}
</script>