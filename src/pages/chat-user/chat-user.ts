import { MessageProvider } from './../../providers/message/message';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Content } from "ionic-angular";
import * as moment from 'moment';

/**
 * Generated class for the ChatUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat-user',
  templateUrl: 'chat-user.html',
})
export class ChatUserPage {

  @ViewChild(Content) content: Content;
  @ViewChild('txt') txt: any;
  textMessage;
  messeges = [];
  name: string;
  email: string;
  fieldOnfocus: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private messsageing: MessageProvider, public viewCtrl: ViewController) {
    let user = navParams.get('user');
    this.name = user.name;
    this.email = user.email;
    this.messeges = this.messsageing.getStudentsFromBranch(user.id);
    setTimeout(() => {
      try {
        this.content.scrollToBottom()
      } catch (error) {
        console.log('catch an error ', error)
      }
    }, 100);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatUserPage');
  }

  onfocus() {
    console.log("div the field");
    this.fieldOnfocus = false;
  }

  onfocusinput(){
    console.log("input the field");
    this.fieldOnfocus = true;
  }


  updateList(event) {
    if (event.key === 'Enter' && event.srcElement) {
      this.sendMessage();
    }
  }


  sendMessage() {
    this.messeges.push({
      message: this.textMessage,
      type: "right",
      timestamp: new Date().getTime()
    })
    this.textMessage = ""
    setTimeout(() => {
      try {
        this.content.scrollToBottom()
      } catch (error) {
        console.log('catch an error ', error)
      }
    }, 100)
    console.log(this.fieldOnfocus);
    if (this.fieldOnfocus) {
      this.txt.nativeElement.focus();
    }

  }

  close() {
    this.viewCtrl.dismiss();
  }

}
