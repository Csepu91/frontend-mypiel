import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PostItemComponent } from "./components/post-item/post-item.component";
import { ProductPruebaItemComponent } from './components/product-prueba-item/product-prueba-item.component';
import { PrincipalService } from './services/principal.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductPrueba } from './models';
import { Post } from './shared/interfaces/post.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    PostItemComponent,
    ProductPruebaItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'frontend-mypiel';

  showProducts = false;

  toggleProducts() {
    this.showProducts = !this.showProducts;
  }

  posts: Post[] = [];

  onNewPost(post: Post) {
    this.posts = [...this.posts, post];
  }

  principalService = inject(PrincipalService);


  productsPrueba: Signal<ProductPrueba[] | undefined> =
    toSignal(this.principalService.getProductsPrueba())

}
