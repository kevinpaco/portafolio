import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kp_portafolio';

  constructor(){}

  descargarArchivo(){
    const href = './assets/archivos/Kevin Paco-CV-2023-12-03.pdf';
    saveAs.saveAs(href,"Kevin Paco-CV.pdf");
  }
}
