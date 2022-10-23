export enum EMApis {
    ALL = 'https://restcountries.com/v3.1/all',
    COUNTRY_DETAIL = 'https://restcountries.com/v3.1/name'
}

export interface IItem {
    flags: {
      png: string;
    };
    name: {
      official: string;
      common: string;
      nativeName: object;
    };
    population: number;
    region: string;
    capital: Array<string>;
    fifa: string;
    languages: object;
    tld: Array<string>
    cioc: string;
    cca3: string;
  }