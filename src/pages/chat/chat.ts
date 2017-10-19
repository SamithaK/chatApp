import { ChatUserPage } from './../chat-user/chat-user';
import { MessageProvider } from './../../providers/message/message';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
type = 'friends'
name = "";
email = ""
friends = []
messeges = []
  constructor(public navCtrl: NavController, public navParams: NavParams, private messsageing: MessageProvider, public modalCtrl: ModalController) {
    this.friends = this.messsageing.friends
  }

  clickTab(event){
    this.type = event

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }
  close(){
    this.type = "friends"
  }

  clickUser(user){
    const profileModal = this.modalCtrl.create(ChatUserPage, {user: user });
    profileModal.present();
  }

}
