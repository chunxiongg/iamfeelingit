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
                    <ion-icon color='dark' name='md-close' slot='icon-only'></ion-icon>
                </ion-button>
            </ion-buttons>

            <ion-title>{{ value[0].name }}</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content>
        <ion-card class='noBorder'>
            <ion-card-content>
            <ion-text> {{ value[0].seeDetails }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak1a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak1b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>    
            <ion-text> {{ value[0].detailsBreak2a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak2b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak3a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak3b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak4a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak4b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak5a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak5b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak6a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak6b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak7a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak7b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak8a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak8b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak9a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak9b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak10a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak10b }} </ion-text>

            <br *ngIf='value[0].detailsBreak1a'>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak11a }} </ion-text>
            <br *ngIf='value[0].detailsBreak1a'>
            <ion-text> {{ value[0].detailsBreak11b }} </ion-text>









            <br *ngIf='value[0].detailsBreak'>
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak1 }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak2 }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak3 }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak4 }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak5 }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak6 }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak8 }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak9 }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak10 }} </ion-text> <!-- Second Article -->
            <br *ngIf='value[0].detailsBreak'>
            <br *ngIf='value[0].detailsBreak'>
            <ion-text> {{ value[0].detailsBreak11 }} </ion-text> <!-- Second Article -->
            <ion-card-subtitle>
            <br>
            <ion-button *ngIf='value[0].detailsBreak1a' expand='block' size="small" fill='outline' (click)='openBrowser()'>Learn More</ion-button>
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