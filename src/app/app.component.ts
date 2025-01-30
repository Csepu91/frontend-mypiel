import { Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Post } from './shared/interfaces/post.interface';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
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
