import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-practices-pop',
  templateUrl: './practices-pop.page.html',
  styleUrls: ['./practices-pop.page.scss'],
})
export class PracticesPopPage implements OnInit {

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
