import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-confinement-food',
  templateUrl: './confinement-food.page.html',
  styleUrls: ['./confinement-food.page.scss'],
})
export class ConfinementFoodPage implements OnInit {

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
