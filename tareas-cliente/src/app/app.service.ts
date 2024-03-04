import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(`${API_URL}/tareas`);
  }

  create(tarea: any) {
    return this.http.post(`${API_URL}/tareas`, tarea);
  }

  update(id: number, tarea: any) {
    return this.http.put(`${API_URL}/tareas/${id}`, tarea);
  }

  delete(id: number) {
    return this.http.delete(`${API_URL}/tareas/${id}`);
  }

}
