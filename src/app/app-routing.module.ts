import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListarComponent} from './Persona/listar/listar.component';
import {AddComponent} from './Persona/add/add.component';
import {EditComponent} from './Persona/edit/edit.component';

const routes: Routes = [
  {path:"add", component:AddComponent},
  {path:"edit", component:EditComponent},
  {path:"listar", component:ListarComponent}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
