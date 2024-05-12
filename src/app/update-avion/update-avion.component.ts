import { Component, OnInit } from '@angular/core';
import { AvionService } from '../services/avion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from '../model/avion.model';
import { TypeAv } from '../model/TypeAv.model';

@Component({
  selector: 'app-update-avion',
  templateUrl: './update-avion.component.html',
  styles: [],
})
export class UpdateAvionComponent implements OnInit {
  currentAvion = new Avion();
  types!: TypeAv[];
  updatedTypId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private avionService: AvionService
  ) {}

  ngOnInit(): void {
    this.avionService
      .consulterAvion(this.activatedRoute.snapshot.params['id'])
      .subscribe((avio) => {
        this.currentAvion = avio;
      });
  }

  updateAvion() {
    this.avionService.updateAvion(this.currentAvion).subscribe((avio) => {
      this.router.navigate(['avions']);
    });
  }
}
