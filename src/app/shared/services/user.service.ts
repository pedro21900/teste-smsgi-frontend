import {environment} from 'src/environments/environment';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from "rxjs";
import {catchError, map, retry} from "rxjs/operators";
import {LoadOptions} from "devextreme/data/load_options";
//import {HttpParamsAdapter} from "../@core/types/http-params-adapter";
import {Data} from "../../domain/data";
import DevExpress from "devextreme";
import data = DevExpress.data;
//import {Page} from "../@core/types";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  API_RESOURCE_PATH: string = `https://reqres.in/api/users`

  constructor(private http: HttpClient) {
  }

  public insert(resource: Data): Observable<Data> {
    return this.http.post<Data>(this.API_RESOURCE_PATH, resource);
  }
  public update(id: number, resource: Data): Observable<Data> {
    return this.http.put<Data>(`${this.API_RESOURCE_PATH}/${id}`, resource);
  }
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_RESOURCE_PATH}/${id}`);
  }
 /* public patch(id: number, resourceValues: any) {
    return this.http.patch(`${this.API_RESOURCE_PATH}/${id}`, Data.from(resourceValues));
  }*/

  public findById(id: number, resource: Data): Observable<Data> {
    return this.http.post<any>(`${this.API_RESOURCE_PATH}/${id}`, resource);
  }

  public findAll(loadOptions: LoadOptions): Observable<Data[]> {
    //const params = new HttpParamsAdapter(loadOptions).httpParams();
    console.log(loadOptions);
    return this.http.get<Data[]>(`${this.API_RESOURCE_PATH}`,)
      .pipe(
        retry(2));
  }
}
