import { expect } from 'chai'
import { Countries, CountryCodes, CountryNames  } from '@/components/Filters/countries'
import { Categories } from '@/components/Filters/categories'

describe('Countries list', () => {
    it('Check countries code and label data', () => {
        expect(Object.keys(CountryCodes).length).to.eql(Object.keys(CountryNames).length);
        expect(Object.keys(CountryCodes).length).to.eql(54);
        expect(Object.keys(CountryNames).length).to.eql(54);
        expect(Countries).to.be.an('array');
        expect(Countries.length).to.eql(55);
    })
  })

  describe('Categories list', () => {
    it('Check categories data', () => {
        expect(Categories).to.eql([
            'business',
            'entertainment',
            'general',
            'health',
            'science',
            'sports',
            'technology'
        ]);
    })
  })
