import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AbilitiesComponent } from './abilities/abilities.component';
import { ExperiencieComponent } from './experiencie/experiencie.component';
import { FunFactorComponent } from './fun-factor/fun-factor.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
