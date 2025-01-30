import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
  isLoggedIn = signal<boolean>(false);


  apiLoginObj: LoginCredenciales = {
    "correo": "",
    "password": ""
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }

  onLogin() {
    this.principalService.login(this.apiLoginObj).subscribe({
      next: (res: any) => {
        console.log('Login correcto:', res, res.rolTipe);
        localStorage.setItem('token', res.LoginToken);
        localStorage.setItem('rol', res.rolTipe);
        this.router.navigateByUrl('myautocuidado');
      },
      error: (error) => {
        console.error('Error en login:', error);
        alert('Usuario o contraseña incorrectos');
      }
    });
  }




}


