import { Component, Input, OnInit } from '@angular/core';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.css']
})
export class CountryStatsComponent implements OnInit {

  @Input() country ;

  confirmed: string;
  deaths: string;
  recovered: string;
  update : string;

  constructor(private api : CovidService) { }

  ngOnInit(): void {
    this.api.fetchDataByCountry(this.country).subscribe( (obj:any) => {
      this.confirmed = obj.confirmed.value;
      this.recovered = "5203802";
      this.deaths = obj.deaths.value;
      this.update = obj.lastUpdate;
    } );
  }

}
