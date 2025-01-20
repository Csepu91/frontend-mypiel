import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { PostItemComponent } from "./components/post-item/post-item.component";
import { Post } from './shared/interfaces/post.interface';


@Component({
  selector: 'app-root',
  imports: [
    /*  RouterOutlet, */
    ProductListComponent,
    PostItemComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'frontend-mypiel';

  posts: Post[] = [];

  onNewPost(post: Post) {
    this.posts = [...this.posts, post];
  }

}
