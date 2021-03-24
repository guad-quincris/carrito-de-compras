import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { BannerComponent } from './components/banner/banner/banner.component';
import { HomeComponent } from './components/banner/home/home.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
   BannerComponent,
   HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: []
})
export class HomeModule { }
