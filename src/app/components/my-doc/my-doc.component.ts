import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PanelUsuarioComponent } from '../panel-usuario/panel-usuario.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForularioUserExtendComponent } from "../forulario-user-extend/forulario-user-extend.component";

@Component({
  selector: 'app-my-doc',
  imports: [PanelUsuarioComponent, CommonModule, FormsModule, ReactiveFormsModule, ForularioUserExtendComponent],
  templateUrl: './my-doc.component.html',
  styleUrl: './my-doc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyDocComponent {
  formulario: FormGroup;
  imagenesCargadas: File[] = [];

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      consentimiento: [false],
      antecedentes: ['']
    });
  }

  onFileChange(event: any) {
    const files = event.target.files;
    this.imagenesCargadas = Array.from(files);
  }

  esExtendido(): boolean {
    const rolType = localStorage.getItem('rol');
    return rolType === 'EXTENDIDO' ? true : false;
  }

}
