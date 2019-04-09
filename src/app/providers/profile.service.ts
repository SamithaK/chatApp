import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private profile: Profile = null;

  constructor(private httpService: HttpService) {


  }

  createUser(user: User): Promise<Profile> {
    return new Promise((resole, reject) => {
      this.httpService.createUser(user).subscribe((val) => {
        this.profile = val;
        resole(val)
        this.setHeaders()
      }, (error) => {
        reject(error)
      })
    })

  }


  setHeaders() {
    // not using these header sinces this is not authenticate
    this.httpService.defaultHeader = this.httpService.defaultHeader.append('Authorization', null);
    this.httpService.defaultHeader = this.httpService.defaultHeader.append('Accept', 'application/json');
    this.httpService.defaultHeader = this.httpService.defaultHeader.append('Content-Type', 'application/json');
  }
}


export interface Profile {
  user: User
  token: string

}

export interface User {
  name: string,
  userName: string,
  password: string,
  type: string
}