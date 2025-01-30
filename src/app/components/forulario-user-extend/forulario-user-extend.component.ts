import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PrincipalService } from '../../services/principal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserExtendidoCredenciales } from '../../models/userExtendidoCredenciales.model';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forulario-user-extend',
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './forulario-user-extend.component.html',
  styleUrl: './forulario-user-extend.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForularioUserExtendComponent {

  principalService = inject(PrincipalService);

  apiExtendObj: UserExtendidoCredenciales = {
    "correo": "",
    "fNacimiento": "",
    "nIdentificacion": "",
    "fContacto": "",
  }


  forExtend() {
    this.principalService.createUserExtend(this.apiExtendObj).subscribe({
      next: (res: any) => {
        console.log('Registro correcto:', res);
      },
      error: (error) => {
        console.error('Error en registro:', error);
        alert('Error en el registro');
      }
    });
  }

}
