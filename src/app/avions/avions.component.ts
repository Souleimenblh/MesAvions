import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
})
export class AvionsComponent implements OnInit {

  avions?: Avion[]; //un tableau des avions

  constructor(private avionService: AvionService) {
    //this.avions = [];
  }

  ngOnInit(): void {
    this.chargerAvions();
  }
  chargerAvions() {
    this.avionService.listeAvion().subscribe((avios) => {
      console.log(avios);
      this.avions = avios;
    });
  }
  supprimerAvion(a: Avion) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.avionService.supprimerAvion(a.idAvion).subscribe(() => {
        console.log('avion supprimé');
        this.chargerAvions();
      });
  }


}
