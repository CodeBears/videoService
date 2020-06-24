import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { VideoPlayComponent } from './video-play/video-play.component';


const routes: Routes = [
  {
    path: '',
    component: CategoryNavComponent,
    children: [
      {
        path: '',
        component: VideoListComponent,
      },
      {
        path: 'watch',
        component: VideoPlayComponent
      }
    ]
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
