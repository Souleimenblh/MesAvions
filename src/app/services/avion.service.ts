import { Injectable } from '@angular/core';
import { Avion } from '../model/avion.model';
import { TypeAv } from '../model/TypeAv.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AvionService {
  apiURL: string = 'http://localhost:8085/avions/api';

  avions!: Avion[];
  //  avions: Avion[];

  // types: Type[];

  constructor(private http: HttpClient) {
    // this.types = [
    //   {
    //     idTyp: 1,
    //     nomTyp: 'Chasse',
    //   },
    //   { idTyp: 2, nomTyp: 'Affaire' },
    // ];
    // console.log("creation d'un service avion");
    // this.avions = [
    //   {
    //     idAvion: 1,
    //     matriculeAvion: 'Raptor e22',
    //     kilometrageAvion: 45434000.546,
    //     datefabrication: new Date('01/14/2019'),
    //     type: { idTyp: 1, nomTyp: 'Chasse' },
    //   },
    //   {
    //     idAvion: 2,
    //     matriculeAvion: 'Mirage g3',
    //     kilometrageAvion: 77546650.924,
    //     datefabrication: new Date('12/17/2015'),
    //     type: { idTyp: 2, nomTyp: 'Affaire' },
    //   },
    //   {
    //     idAvion: 3,
    //     matriculeAvion: 'Boeing 747',
    //     kilometrageAvion: 19057880.123,
    //     datefabrication: new Date('02/20/2022'),
    //     type: { idTyp: 1, nomTyp: 'Chasse' },
    //   },
    // ];
  }
  // listeAvions(): Avion[] {
  //   return this.avions;
  // }

  listeAvion(): Observable<Avion[]> {
    return this.http.get<Avion[]>(this.apiURL);
  }

  // addAvion(avion: Avion) {
  //   // console.log(this.newAvion);
  //   this.avions.push(avion);
  // }

  // ajouterAvion(avio: Avion) {
  //   this.avions.push(avio);
  // }

  ajouterAvion(avio: Avion): Observable<Avion> {
    return this.http.post<Avion>(this.apiURL, avio, httpOptions);
  }

  // supprimerAvion(avio: Avion) {
  //   //supprimer le Avion prod du tableau Avions
  //   const index = this.avions.indexOf(avio, 0);
  //   if (index > -1) {
  //     this.avions.splice(index, 1);
  //   }
  //   //ou Bien
  //   /* this.Avions.forEach((cur, index) => {
  //   if(prod.idAvion === cur.idAvion) {
  //   this.Avions.splice(index, 1);
  //   }
  //   }); */
  // }

  supprimerAvion(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  // consulterAvion(id: number): Avion {
  //   return this.avions.find((p) => p.idAvion == id)!;
  // }

  consulterAvion(id: number): Observable<Avion> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Avion>(url);
  }

  trierAvions() {
    this.avions = this.avions.sort((n1, n2) => {
      if (n1.idAvion! > n2.idAvion!) {
        return 1;
      }
      if (n1.idAvion! < n2.idAvion!) {
        return -1;
      }
      return 0;
    });
  }

  // listeTypes(): Type[] {
  //   return this.types;
  // }

  // consulterType(id: number): Type {
  //   return this.types.find((typ) => typ.idTyp == id)!;
  // }

  updateAvion(avio: Avion): Observable<Avion> {
    return this.http.put<Avion>(this.apiURL, avio, httpOptions);
  }
}
