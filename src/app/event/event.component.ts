import {Component, OnInit} from '@angular/core';
import {TestforteService} from "../service/testforte.service";
import {SigningKeycloakService} from "twenty-signin";
import {TableHeader} from "twentyfive-table/lib/table-header";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit{


  headers : TableHeader[] = [{name: "COLONNA 1", value: "colonna1"}, {name: "COLONNA 2", value: "colonna2"}];
  rows = [{colonna1: "CIAO1", colonna2: "CIAO1COLUMN2"},
    {colonna1: "CIAO1", colonna2: "CIAO1COLUMN2"},
    {colonna1: "CIAO1", colonna2: "CIAO1COLUMN2"},
    {colonna1: "CIAO1", colonna2: "CIAO1COLUMN2"},
    {colonna1: "CIAO1", colonna2: "CIAO1COLUMN2"},{colonna1: "CIAO1", colonna2: "CIAO1COLUMN2"},{colonna1: "CIAO1", colonna2: "CIAO1COLUMN2"}


  ];

  constructor(private serv: TestforteService, private keycloak_service: SigningKeycloakService) {
  }
  ngOnInit(): void {
    this.serv.richiestaCazzo().subscribe(result => {
      console.log("questa è la risposta");
      console.log(result);
    })

    this.serv.richiestaCazzoGrosso().subscribe(result => {
      console.log("questa è la risposta a cazzo grosso");
      console.log(result);
    })
  }

  esco(){
    this.keycloak_service.signout();
  }

}
