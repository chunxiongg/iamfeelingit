import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confinement-food',
  templateUrl: './confinement-food.page.html',
  styleUrls: ['./confinement-food.page.scss'],
})
export class ConfinementFoodPage implements OnInit {

  constructor(private modalController: ModalController ) { }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss();
}

}
