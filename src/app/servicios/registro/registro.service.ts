import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  backend = environment.backend+"/registroForm";
  constructor( private http: HttpClient) {

   }

   obtenerRegistros(){
    return this.http.get(`${this.backend}/obtener-registros`);
   }

   crearRegistros(data:any){
    return this.http.post(`${this.backend}/crear-registro`,data);
   }
}
