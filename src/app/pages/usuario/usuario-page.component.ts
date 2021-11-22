import {Component} from '@angular/core';
import {DataService} from "../../shared/services/data.service";



@Component({
    selector: 'app-user',
    templateUrl: 'usuario-page.html',
    providers: [DataService]
})
export class UsuarioPageComponent {
    RESOURCE_NAME = 'Horizon';
    constructor() { }
}
