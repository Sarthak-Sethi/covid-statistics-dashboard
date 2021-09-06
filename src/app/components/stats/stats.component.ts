import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { model } from 'src/app/model';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  confirmed: string;
  deaths: string;
  list : boolean = true;
  recovered: string;
  selected_country : string;
  update : string;
  countries: any[] = new Array();
  countryArr:any = new Map();
  constructor(private api: CovidService) { }

  ngOnInit(): void {
    this.api.fetchData().subscribe(
      (obj: any) => {
        this.confirmed = obj.confirmed.value;
        this.recovered = "5203802";
        this.deaths = obj.deaths.value;
        this.update = obj.lastUpdate;
      });

     this.api.fetchCountries().subscribe(
      (obj: any) => {
        obj.countries.map((pair) => {
          if(pair.name !== 'Gambia')
          this.countries.push(pair);
          this.api.fetchDataByCountry(pair.name).subscribe(
            (obj: any) => {
           this.countryArr.set(pair.name,obj);
            });
        })
      });

  }

  countryChanged(selected_county : any) {
     console.log(selected_county);
     this.selected_country = selected_county.name;
     this.list = false;
    
  }

  test(){
    console.log(this.countryArr );
    
  }
}

