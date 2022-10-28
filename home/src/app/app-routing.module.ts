import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  /* Se non viene specificato nessun path il contenuto verrà mostrato nella pagina principale */
  // { path: 'home', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: EmptyRouteComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppRoutingModule { }
