import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalService } from '../../services/principal.service';

@Component({
  selector: 'app-panel-usuario',
  imports: [],
  templateUrl: './panel-usuario.component.html',
  styleUrl: './panel-usuario.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PanelUsuarioComponent {
  router = inject(Router);
  principalService = inject(PrincipalService);
  isLoggedIn = signal<boolean>(false);

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
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
