import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
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
  isLoggedIn = signal<boolean>(false);

  apiExtendObj: UserExtendidoCredenciales = {
    correo: '',
    idUserComun: localStorage.getItem('id') || '',
    fNacimiento: "",
    nIdentificacion: "",
    fContacto: "",
  }


  forExtend() {
    this.principalService.createUserExtend(this.apiExtendObj).subscribe({
      next: (res: any) => {
        console.log('Registro correcto:', res);

        this.principalService.updateToExtend(this.apiExtendObj).subscribe({
          next: (updateRes: any) => {
            console.log('Actualización correcta:', updateRes);
            localStorage.setItem('rol', 'EXTENDIDO');
            location.reload();
          },
          error: (updateError) => {
            console.error('Error en actualización:', updateError);
            alert('Error al actualizar el perfil');
          }
        });
      },
      error: (error) => {
        console.error('Error en registro:', error);
        alert('Error en el registro');
      }
    });
  }


  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    this.principalService.isAuthenticated().subscribe(
      (status: boolean) => {
        this.isLoggedIn.set(status);
      }
    );
  }

}
