import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  public friends = [
    {
      id:1,
      name: "Jon Snow",
      email: "snow@gmail.com",
      status: "available"
    },
    {
      id:2,
      name: "Tyrion Lannister",
      email: "Tyrion@gmail.com",
      status: "away"
    },
    {
      id:3,
      name: "Daenerys Targaryen",
      email: "Daenerys@gmail.com",
      status: "available"
    },
    {
      id:4,
      name: "Arya Stark",
      email: "Arya@gmail.com",
      status: "away"
    }
  ]
  constructor() {
    console.log('Hello MessageProvider Provider');
  }


  getStudentsFromBranch(id: any) {
    let students = {
      1: [
        {
          message: "Hi there!",
          type: "left",
          timestamp: 1506669284000
        },
        {
          message: "Hi",
          type: "right",
          timestamp: 1506669284000
        },
        {
          message: "I need your army to defeat the dead",
          type: "left",
          timestamp: 1506669284000
        }
      ],
      2: [
        {
          message: "Hey!",
          type: "left",
          timestamp: 1506669284000
        },
        {
          message: "Hi",
          type: "right",
          timestamp: 1506669284000
        }
      ],
      3: [
        {
          message: "Hi there!",
          type: "left",
          timestamp: 1506669284000
        }
      ],
      4: [
        {
          message: "Hi there! Do you in my list",
          type: "left",
          timestamp: 1506669284000
        },
        {
          message: "Im not sure",
          type: "right",
          timestamp: 1506669284000
        }
      ]
    }
    return students[id]
  }




}
