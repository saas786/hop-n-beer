import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/splashscreen',
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
    path: 'pages/loader',
    loadChildren: () => import('./pages/loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'pages/splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'pages/birre',
    loadChildren: () => import('./pages/birre/birre.module').then( m => m.BirrePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
