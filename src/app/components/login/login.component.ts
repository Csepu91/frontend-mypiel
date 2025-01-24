import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredenciales } from '../../models/loginCredenciales.model';
import { PrincipalService } from '../../services/principal.service';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  router = inject(Router);
  principalService = inject(PrincipalService);

  apiLoginObj: LoginCredenciales = {
    "correo": "",
    "password": ""
  }

  onLogin() {
    this.principalService.login(this.apiLoginObj).subscribe({
      next: (res: any) => {
        console.log('Login correcto:', res);
        this.router.navigateByUrl('OnMyAutocuidado');
      },
      error: (error) => {
        console.error('Error en login:', error);
        alert('Usuario o contraseña incorrectos');
      }
    });
  }

}


