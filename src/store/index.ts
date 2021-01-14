import Vue from 'vue'
import Vuex from 'vuex'
import { CountryInterface, ACodes, ANames } from "@/components/Filters/countries";

Vue.use(Vuex)

const ArrayCountry: Array<CountryInterface> = [];

export default new Vuex.Store({
  state: {
    countries: ArrayCountry
  },
  getters: {

  },
  mutations: {
    addCountry(state, country: CountryInterface) {
      state.countries.push(country);
    }
  },
  actions: {
    checkCountries (context, state) {
      if (state.countries.length == 54) {
        return;
      } else {
        for (let i=0; i<ACodes.length; i++) {
          context.commit("addCountry", { code: ACodes[i], name: ANames[i]})
        }
      }
    }
  },
  modules: {
  }
})
