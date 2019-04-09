import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AppHeaderComponent } from '../components/app-header/app-header.component';
import { config } from '../../configurations';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocketIoModule.forRoot(config.io),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, AppHeaderComponent]
})
export class HomePageModule {}
