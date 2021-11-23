import {Component, ViewChild} from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import {LoadOptions} from "devextreme/data/load_options";
import CustomStore from "devextreme/data/custom_store";
import {Title} from "@angular/platform-browser";
import {DataService} from "../../../shared/services/data.service";
import {Data} from "../../../domain/data";

@Component({
  selector: 'app-transmissao',
  templateUrl: 'usuario-list.component.html',
  styles: [],
  providers: [DataService]
})
export class UsuarioListComponent {
  RESOURCE_NAME = 'Usuários';

  readonly allowedPageSizes = [5, 10, 'all'];

  readonly displayModes = [{ text: "Display Mode 'full'", value: 'full' }, { text: "Display Mode 'compact'", value: 'compact' }];

  displayMode = 'full';

    // Datasource do componente DataGrid
    dataSourceUser: DataSource;
  dataSourceAccessLevel: any;

    constructor(private userService: DataService, private title: Title ) {
        this.title.setTitle(this.RESOURCE_NAME);
        this.dataSourceUser = new DataSource({
            store: new CustomStore({
                key: 'id',
                load: (options: LoadOptions) => {
                    return  this.userService.findAll(options).toPromise();
                },
                insert: (values) => {
                    return userService.insert(values).toPromise();
                },
                update: (key, values) => {
                    return userService.patch(key, Data.from(values)).toPromise()
                },
                remove: (key) => {
                   return  userService.delete(key).toPromise();
                }
            }),
            sort: [{selector: 'nome', desc: false}]
        })
    }
  get isCompactMode() {
    return this.displayMode === 'compact';
  }
}
