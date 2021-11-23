import {NgModule} from '@angular/core';
import {UsuarioListComponent} from "./usuario-list/usuario-list.component";
import {UsuarioPageRoutingModule} from "./usuario-page-routing.module";
import {CommonModule} from '@angular/common';
import {UsuarioPageComponent} from "./usuario-page.component";
import {DxButtonModule, DxDataGridModule, DxFormModule, DxTreeListModule} from "devextreme-angular";

@NgModule({
  declarations: [
    UsuarioPageComponent,
    UsuarioListComponent,
  ],
  imports: [
    UsuarioPageRoutingModule,
    CommonModule,
    DxDataGridModule,
    DxTreeListModule,
    DxFormModule,
    DxButtonModule,
  ]
})
export class UsuarioPageModule {
}
