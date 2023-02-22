import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostComponent } from 'src/app/components/post/post.component';
import { SinglePostComponent } from '../single-post/single-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: ':id', component: SinglePostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
