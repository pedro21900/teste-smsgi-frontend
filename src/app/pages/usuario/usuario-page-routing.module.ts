import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsuarioListComponent} from "./usuario-list/usuario-list.component";
import {UsuarioPageComponent} from "./usuario-page.component";

export const routes: Routes = [
  {
    path: '', component: UsuarioPageComponent, children: [
      {path: '', component: UsuarioListComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioPageRoutingModule {
}
