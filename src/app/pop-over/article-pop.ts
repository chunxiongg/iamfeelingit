import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AppServeService } from '../app-serve.service';

@Component({
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
        <ion-card>
            <ion-card-content>
            <img src='{{ value[0].image }}'>
            <br>
            <ion-button href='{{ value[0].goLink }}' color='danger' expand="full" size='default' >Learn More</ion-button>
            </ion-card-content>
        </ion-card>
    </ion-content>
    `
})

export class ModalExample {

  // "value" passed in componentProps
  @Input() value: '';

  constructor(private navParams: NavParams, private appServe: AppServeService, private modalController: ModalController) {
    // componentProps can also be accessed at construction time using NavParams
    this.navParams.get('value');
  }

  cancel() {
      this.modalController.dismiss();
  }

}