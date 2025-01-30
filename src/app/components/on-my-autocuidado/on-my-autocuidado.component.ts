import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { PostItemComponent } from '../post-item/post-item.component';
import { Post } from '../../shared/interfaces/post.interface';
import { CommonModule } from '@angular/common';
import { PrincipalService } from '../../services/principal.service';


@Component({
  selector: 'app-on-my-autocuidado',
  standalone: true,
  imports: [PostItemComponent, CommonModule],
  templateUrl: './on-my-autocuidado.component.html',
  styleUrl: './on-my-autocuidado.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnMyAutocuidadoComponent {
  isLoggedIn = signal<boolean>(false);
  principalService = inject(PrincipalService);
  posts = signal<Post[]>([]);

  onNewPost(post: Post) {
    this.posts.update(currentPosts => [...currentPosts, post]);

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
