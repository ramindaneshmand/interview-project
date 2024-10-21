import {RouterModule, Routes} from '@angular/router';
import {HOME_URL} from './constants/home.constant';
import {LayoutComponent} from './layout/layout.component';
import {EmptyComponent} from './layout/empty.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {path: '', redirectTo: HOME_URL, pathMatch: 'full'},
  {
    path: ':module', component: LayoutComponent
  },
  {
    path: ':module/:moduleId', component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
