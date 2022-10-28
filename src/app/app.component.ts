//importare per bootstrap, ciò che viene caricato per il corretto funzionamento
import { Component } from '@angular/core';

//@Componente è un decorator, è una funzione
@Component({
  selector: 'pippo', //elementi a cui collegare il component

  //struttura html contenuta negli elementi selettori
  templateUrl: './app.component.html', //back-tick consente di scrivere codice html su più linee
})

//export si può vedere come public
//creazione di una classe
export class AppComponent {
  name = 'Angular ';
  cognome = 'Grav';
}
