import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { VideoListComponent } from './video-list/video-list.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { VideoPlayComponent } from './video-play/video-play.component';


@NgModule({
  declarations: [VideoListComponent, CategoryNavComponent, VideoPlayComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],

})
export class HomeModule { }
