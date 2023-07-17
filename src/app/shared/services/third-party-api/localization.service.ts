import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  countryList?: String[];
  regionList?: String[];
  cityList?: String[];
  // TODO: call an api for countries, regions, cities
  constructor(private http: HttpClient) {}

  getCountries(): String[] {
    this.countryList = countries;
    return this.countryList;
  }

  getRegions(): String[] {
    this.regionList = regions;
    return this.regionList;
  }

  getCities(): String[] {
    this.cityList = cities;
    return this.cityList;
  }
}

const countries = ['France', 'Brasil'];

const regions = ['Bretagne', 'Occitanie', 'São Paulo (SP)'];

const cities = ['Montpellier', 'Quimper', 'São Paulo'];
