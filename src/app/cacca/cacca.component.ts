import {Component, OnInit} from '@angular/core';
import {TestforteService} from "../service/testforte.service";

@Component({
  selector: 'app-cacca',
  templateUrl: './cacca.component.html',
  styleUrls: ['./cacca.component.css']
})
export class CaccaComponent implements OnInit{

  constructor(private serv: TestforteService) {
  }
  ngOnInit(): void {
    this.serv.richiestaCazzoGrosso().subscribe(result => {
      console.log("questa è la risposta");
      console.log(result);
    })
  }


}
