import { expect } from 'chai'
import { Countries, CountryCodes, CountryNames  } from '@/components/index.ts'

describe('Countries list', () => {
    it('Check countries code and label data', () => {
        expect(Object.keys(CountryCodes).length).to.eql(Object.keys(CountryNames).length);
        expect(Object.keys(CountryCodes).length).to.eql(54);
        expect(Object.keys(CountryNames).length).to.eql(54);
        expect(Countries).to.be.an('array');
        expect(Countries.length).to.eql(55);
    })
  })
