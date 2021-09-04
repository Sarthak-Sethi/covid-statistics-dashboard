import { Component, OnInit } from '@angular/core';
import { model } from 'src/app/model';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private api: CovidService) { }

  ngOnInit(): void {
       this.api.fetchData().subscribe(
        (obj:any) => {
          console.log(obj?.confirmed);
          
        }
      )
  }

}
