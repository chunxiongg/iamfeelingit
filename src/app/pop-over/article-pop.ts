import { Component, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AppServeService } from '../app-serve.service';
import { ColoredBrowserTabs } from '@ionic-native/colored-browser-tabs/ngx';
import { ScrollDetail } from '@ionic/core';

@Component({
    styleUrls: ['./pop-over.scss'],
    template: 
    `
    <ion-header>
        <ion-toolbar>
            <ion-buttons>
                <ion-button (click)='cancel()'>
                    <ion-icon color='dark' src='assets/icon/arrow.svg'></ion-icon>
                </ion-button>
            </ion-buttons>

            <ion-title>{{ value[0].name }}</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <ion-card class='noBorder'>
            <ion-card-content>
            <ion-text> {{ value[0].seeDetails }} </ion-text>
            <br>
            <br>
            <ion-text> {{ value[0].detailsBreak }} </ion-text>
            <br>
            <ion-text> {{ value[0].detailsBreak1 }} </ion-text>
            <br>
            <br>
            <ion-card-subtitle>
            <ion-button expand='block' size="small" fill='outline' (click)='openBrowser()'>Learn More</ion-button>
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

  accessIndividual;
  
  ngOnInit() {
    var link = this.navParams.get('value')
    this.accessIndividual = link[0].goLink
    console.log(this.accessIndividual);
  }

  openBrowser() {
    this.coloredBrowserTabs.openTab(this.accessIndividual, '#ffffff' )
        .subscribe();
  }

  cancel() {
      this.modalController.dismiss();
  }

}