import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-componente12',
  standalone: true,
  imports: [CommonModule, MediaPipe],
  templateUrl: './componente12.component.html',
  styleUrl: './componente12.component.css'
})
export class Componente12Component {

  // Texto
  nome:string = 'Ingrid';

  //Objeto
  obj:any = {'nome': 'Ingrid', 'idade': 31};

  // Vetor de objetos
  alunos:any = [
    {'nome': 'Ingrid', 'nota1':10, 'nota2':9},
    {'nome': 'Iza',    'nota1':8,  'nota2':7},
    {'nome': 'Rita',   'nota1':3,  'nota2':2},
    {'nome': 'Ana',    'nota1':7,  'nota2':7},
  ];
}
