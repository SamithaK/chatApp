import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit, OnDestroy  {
  @Input() title:string;
  ngOnDestroy(): void {
    this.routerEvents.unsubscribe();
  }
  private routerEvents: any;
  private previousUrl: string;
  private currentUrl: string;
  private canGoBack: boolean;

  constructor(private router: Router,
    private ionRouterOutlet: IonRouterOutlet) { }

  ngOnInit() {
    this.canGoBack    = this.ionRouterOutlet.canGoBack();
    this.currentUrl   = this.router.url;
    this.routerEvents = this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            this.previousUrl = this.currentUrl;
            this.currentUrl  = event.url;
        }
    });

  }

}
