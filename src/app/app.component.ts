import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PostItemComponent } from "./components/post-item/post-item.component";

import { Post } from './shared/interfaces/post.interface';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  /*   standalone: true, */
  imports: [
    CommonModule,
    RouterOutlet,
    NavBarComponent,
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
