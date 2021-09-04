import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http : HttpClient) { }
  url: string = 'https://covid19.mathdro.id/api';

  fetchData() {
    return this.http.get(this.url);
  }

  fetchDataByCountry(country: string) {
    return this.http.get(this.url + '/countries/' + country);
  }

  fetchDailyData() {
    return this.http.get(this.url + '/daily');
  }

  fetchCountries() {
    return this.http.get(this.url + '/countries');
  }
}
