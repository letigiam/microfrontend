import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
    { path: 'user', redirectTo: 'user', pathMatch: 'full'},
    { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
