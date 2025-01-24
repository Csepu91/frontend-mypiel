import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-my-inicio',
  imports: [CommonModule, RouterLink],
  templateUrl: './my-inicio.component.html',
  styleUrl: './my-inicio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyInicioComponent {

}
