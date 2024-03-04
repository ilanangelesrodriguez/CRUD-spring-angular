import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tareas-cliente';
  tareas: any[] = [];
  tarea = {
    id: null,
    nombre: '',
    completado: false
  }

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.appService.getAll()
      .subscribe((data: any) => this.tareas = data
    );
  }

  save() {
    if (this.tarea.id) {
      this.appService.update(this.tarea.id!, this.tarea)
        .subscribe((data: any) => this.getAll() );
    } else {
      this.appService.create(this.tarea)
        .subscribe((data: any) => this.getAll());
    }

    this.tarea = {
      id: null,
      nombre: '',
      completado: false
    }

  }

  edit(tarea: any) {
    this.tarea = {
      ...tarea
    };

  }

  delete(id: number) {
    this.appService.delete(id)
      .subscribe((data: any) => this.getAll());
  }


}
