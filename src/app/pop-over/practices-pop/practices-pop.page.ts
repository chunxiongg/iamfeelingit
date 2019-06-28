import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-practices-pop',
  templateUrl: './practices-pop.page.html',
  styleUrls: ['./practices-pop.page.scss'],
})
export class PracticesPopPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss();
}


}
