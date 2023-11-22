import { Component } from '@angular/core';
import './second-screen.component.css';


@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.css'],
})
export class SecondScreenComponent {
  selecionarPais(pais: string) {
    console.log(`Você selecionou: ${pais}`);
    // Adicione o código de manipulação aqui
  }
}
