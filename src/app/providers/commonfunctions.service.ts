import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonfunctionsService {

  loading:LoadingController
  constructor(public loadingController: LoadingController) { }


  loader = {
    show(message) {
      this.loading = this.loadingController.create({
        message: 'Hellooo'
      });
     this.loading.present();
    },
    dismiss(){
      const { role, data } = this.loading.onDidDismiss();
      console.log('Loading dismissed!');
    }
  }

}


