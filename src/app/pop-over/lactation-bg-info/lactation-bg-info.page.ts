import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-lactation-bg-info',
  templateUrl: './lactation-bg-info.page.html',
  styleUrls: ['./lactation-bg-info.page.scss'],
})
export class LactationBgInfoPage implements OnInit {

  public platform: any;
  constructor(private myPlatform: Platform, private modalController: ModalController) {
    this.platform = myPlatform;
   }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss();
  }
}
