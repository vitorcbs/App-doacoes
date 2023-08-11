import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor() {}

  openMapDoar(doacao: string) {
    window
      .open(
        `https://www.google.com/maps/search/?api=1&query=ponto+doar+${doacao}`
      )
      .focus();
  }
}
