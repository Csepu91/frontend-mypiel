import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalService } from '../../services/principal.service';
import { RegisterCredenciales } from '../../models/registerCredenciales.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  router = inject(Router);
  principalService = inject(PrincipalService);

  apiRegisterObj: RegisterCredenciales = {
    "nombre": "",
    "apellido1": "",
    "apellido2": "",
    "correo": "",
    "password": ""
  }

  onRegister() {
    this.principalService.register(this.apiRegisterObj).subscribe({
      next: (res: any) => {
        console.log('Registro correcto:', res);
        this.router.navigateByUrl('login');
      },
      error: (error) => {
        console.error('Error en registro:', error);
        alert('Error en el registro');
      }
    });
  }


}
