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
			<ion-button (click)="cancel()">
				<ion-text>Close</ion-text>
			</ion-button>
        </ion-buttons>
        
            <ion-title>FOOD</ion-title>
        </ion-toolbar>
    </ion-header>


    <ion-content>
        <ion-card>
            <ion-card-content>
            {{ value }}
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