import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeModule } from './components/home/home.module';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch:'full'
  },
  {
    path: 'home',
    loadChildren: () => import('src/app/components/home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'products',
    loadChildren: () => import('src/app/components/productt/productt.module').then(mod => mod.ProducttModule)
  },
  {
    path:'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('src/app/admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path:'order',
    loadChildren: () => import('src/app/order/order.module').then(mod => mod.OrderModule)
  },
  {
    path:'auth',
    loadChildren: () => import('src/app/auth/auth.module').then(mod => mod.AuthModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
