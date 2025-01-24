import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-my-doc',
  imports: [],
  templateUrl: './my-doc.component.html',
  styleUrl: './my-doc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyDocComponent {

}
