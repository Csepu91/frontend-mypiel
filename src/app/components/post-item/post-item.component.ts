import { Component, inject, output, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../shared/interfaces/post.interface';

@Component({
  selector: 'app-post-item',
  imports: [ReactiveFormsModule],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.scss'
})
export class PostItemComponent {
  posts = input.required<Post[]>();
  newPost = output<Post>();

  readonly #formBuilder = inject(FormBuilder);

  message = "";

  postForm: FormGroup = this.#formBuilder.group({
    descripcion: ['Ingresar descripción', Validators.required],
    valoracion: [0, [Validators.required, Validators.min(1), Validators.max(5)]],
    urlImagen: ['Link', Validators.required]
  });

  onSubmit() {
    if (this.postForm.invalid) {
      this.message = "Por favor, ingrese la información faltante y envíe su comentario nuevamente.";
      return;
    }

    const post: Post = {
      ...this.postForm.value,
    };

    this.newPost.emit(post);

    this.postForm.reset({
      descripcion: 'Ingresar descripción',
      valoracion: 0,
      urlImagen: 'Link'
    });
  }
}