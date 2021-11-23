import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
  LoginFormComponent,
  ResetPasswordFormComponent,
  CreateAccountFormComponent,
  ChangePasswordFormComponent
} from './shared/components';
import {AuthGuardService} from './shared/services';
import {DxDataGridModule, DxFormModule} from 'devextreme-angular';

const routes: Routes = [
  {
    path: 'usuario', loadChildren: () => import('./pages/usuario/usuario-page.module').then(m => m.UsuarioPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'usuario'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), DxDataGridModule, DxFormModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
