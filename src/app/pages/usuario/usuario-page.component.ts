import {Component} from '@angular/core';
import {UserService} from "../../shared/services/user.service";



@Component({
    selector: 'app-user',
    templateUrl: 'usuario-page.html',
    providers: [UserService]
})
export class UsuarioPageComponent {
    RESOURCE_NAME = 'Horizon';
    constructor() { }
}
