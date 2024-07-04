// angular
import { Component, DoCheck } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// services
import { UserServiceService } from './services/user-service.service';
// components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    LoginComponent,
    HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck {

  public title: string = 'nefos-social';
  public identity: any;

  constructor(private userService: UserServiceService) { }

  ngDoCheck() {
    this.identity = this.userService.getIdentityBoolean();
  }
}
