import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CinemahallComponent } from './pages/cinemahall/cinemahall.component';
import { MediaDetailsComponent } from './pages/media-details/media-details.component';
import { PersonalDetailsComponent } from './pages/personal-details/personal-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cinemahall',
    pathMatch: 'full'
  },
  {
    path: 'cinemahall',
    component: CinemahallComponent
  },
  {
    path: 'personal-details/:id',
    component: PersonalDetailsComponent
  },
  {
    path: 'media-details/:id',
    component: MediaDetailsComponent
  },
  {
    path: '**',
    title: 'Page Not Found',
    component: CinemahallComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
