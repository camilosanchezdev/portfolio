import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  baseUrl: string = '';
  constructor(
    private generalService: GeneralService,
    private http: HttpClient
  ) {
    this.baseUrl = generalService.baseUrl;
  }
  getAllProyectos() {
    return this.http.get(this.baseUrl + 'proyectos');
  }
  getProyectById(slug) {
    return this.http.get(this.baseUrl + 'proyectos/byslug/' + slug);
  }
}
