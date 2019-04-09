import { Component } from '@angular/core';
import { ProfileService } from '../providers/profile.service';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ng-socket-io';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  messages = [];
  message: string = '';
  lastMessageId;
  nickname = '';
  style = "left"



  constructor(private profile: ProfileService, public navCtrl: NavController, private socket: Socket, private toastCtrl: ToastController, private route: ActivatedRoute) {


    this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });

    this.route.queryParams.subscribe(params => {
      this.nickname = params["name"];
      console.log("nickname", this.nickname)
      if (!this.nickname){
        this.navCtrl.navigateRoot('login')
      }

      this.joinChat()
      this.getMessages().subscribe(message => {
        console.log(message)
        this.messages.push(message);
      });
    });
  }




  joinChat() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
  }




  sendMessage() {
    this.socket.emit('add-message', { text: this.message });
    this.message = '';
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });
    })
    return observable;
  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', (data) => {
        observer.next(data);
      });
    });
    return observable;
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    //   toast.present();
  }


  rightBtn(event) {

  }


}


export interface Message {
  id: string;
  text: string;
  timeStamp: Date;
  type: string;
}