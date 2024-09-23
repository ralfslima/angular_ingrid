import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  // Variável de imagem
  imagem:string = 'assets/dia.jpg';

  // Função para alterar a imagem
  alterarImagem() {
   if(this.imagem === 'assets/dia.jpg') { // === 3 iguais representa verificar o valor da variável e o tipo da variável
     this.imagem = 'assets/noite.jpg';
   }else {
     this.imagem = 'assets/dia.jpg'
   }
  }
}
