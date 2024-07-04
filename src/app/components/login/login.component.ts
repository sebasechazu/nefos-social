import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CardModule, 
    ButtonModule, 
    InputTextModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm = new FormGroup({
    mail: new FormControl(''),
    password: new FormControl(''),

  });
  onSubmit() {
    console.warn(this.loginForm.value);
  }

}
