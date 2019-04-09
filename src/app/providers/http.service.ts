import { Injectable, Optional, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASE_PATH } from '../../variables';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  protected basePath = ''
  public defaultHeader = new HttpHeaders()

  constructor(private http: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string) {
    if (basePath) {
      this.basePath = basePath
    }
  }


  createUser(user): Observable<any> {
    return this.http.post(this.basePath + '/create/user', user, { headers: this.defaultHeader })
  }

}
