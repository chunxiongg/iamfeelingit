import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AppServeService } from '../app-serve.service';
import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';

@Component({
    styleUrls: ['./pop-over.scss'],
    template: 
    `
    <ion-header no-border>
        <ion-toolbar>
            <ion-buttons>
                <ion-button (click)='cancel()'>
                    <ion-icon color='dark' slot="icon-only" name="arrow-back"></ion-icon>
                </ion-button>
            </ion-buttons>

            <ion-title>{{ value[0].name }}</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <ion-card class='noBorder'>
            <ion-card-content>
            <img src='{{ value[0].image }}'>
            <br>
            <ion-text> {{ value[0].seeDetails }} </ion-text>
            <br>
            <br>
            <ion-card-subtitle>
            <ion-button expand='block' size="small" fill='outline' href='{{ value[0].goLink }}'>Learn More</ion-button>
            </ion-card-subtitle>
          
            </ion-card-content>
        </ion-card>
    </ion-content>
    `
})

export class ModalExample {

  // "value" passed in componentProps
  @Input() value: '';

  constructor(private navParams: NavParams, private appServe: AppServeService, 
              private coloredBrowserTabs: ColoredBrowserTabs, private modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    this.navParams.get('value');
  }

//   openBrowser() {
//     this.coloredBrowserTabs.openTab("https://{{ this.navParams.get('value') }}", '#ffffff' )
//     .subscribe();
//   }

  cancel() {
      this.modalController.dismiss();
  }

}