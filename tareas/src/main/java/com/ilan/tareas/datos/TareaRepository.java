package com.ilan.tareas.datos;

import com.ilan.tareas.dominio.Tarea;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TareaRepository extends MongoRepository<Tarea, String> {
}
