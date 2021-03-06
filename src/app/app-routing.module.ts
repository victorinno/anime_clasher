import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [{
  path: 'principal', component: PrincipalComponent
},{
  path: '', component: PrincipalComponent
},
{
  path: '**', component: PrincipalComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
