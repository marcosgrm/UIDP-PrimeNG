import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ProjetoPrimeNG';

  public items: MenuItem[];
    
    ngOnInit() {
        this.items = [
            {label:'Meninos'},
            {label:'Roupas'},
            {label:'Frio'},
            {label:'Casacos e Moletom'},
            {label:'10 a 12 anos'},
        ];
    }
}
