import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public menu : Array<string> ;
  constructor()
  {
      this.menu = ['inicio','Sobre mi', 'Experiencia', 'Educación', 'Portafolio' , 'Blog', 'Contacto' ];
  }

  ngOnInit() {
  }

}
