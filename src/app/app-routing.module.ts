import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full'
  },
  {
    path: 'pages/login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'pages/menu-page',
    loadChildren: () => import('./pages/menu-page/menu-page.module').then( m => m.MenuPagePageModule)
  },
  {
    path: 'pages/songs',
    loadChildren: () => import('./pages/songs/songs.module').then( m => m.SongsPageModule)
  },
  {
    path: 'pages/birre',
    loadChildren: () => import('./pages/birre/birre.module').then( m => m.BirrePageModule)
  },
  {
    path: 'pages/home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pages/off',
    loadChildren: () => import('./pages/off/off.module').then( m => m.OffPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./members/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'pages/code',
    loadChildren: () => import('./pages/code/code.module').then( m => m.CodePageModule)
  },
  {
    path: 'pages/manual-login',
    loadChildren: () => import('./pages/manual-login/manual-login.module').then( m => m.ManualLoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
