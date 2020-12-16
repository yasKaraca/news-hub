import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Filters from '@/components/Filters/Filters.vue'

describe('Filters component', () => {
    const wrapper = shallowMount(Filters)
    it('check country filters', () => {
      expect(wrapper.find("[label='Country']"))
      expect(wrapper.find("[label='Category']"))
      expect(wrapper.find("[label='Query']"))
    })
  })
