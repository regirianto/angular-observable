import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { TodosComponent } from './todos/todos.component';
import {RouteGuard} from "../shared/guard/route.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'demo/resume',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    component: ResumeComponent,
  },
  {
    path: 'demo/anime',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    loadChildren: () => import('./anime/anime.module').then(m => m.AnimeModule)
  },
  {
    path: 'demo/todos',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: 'demo/sample',
    canActivate: [RouteGuard],
    canActivateChild: [RouteGuard],
    loadChildren: () => import('./sample/sample.module').then(m => m.SampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PageRoutingModule { }
