import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lactation-bg-info',
  templateUrl: './lactation-bg-info.page.html',
  styleUrls: ['./lactation-bg-info.page.scss'],
})
export class LactationBgInfoPage implements OnInit {

  constructor(private modalController: ModalController ) { }

  ngOnInit() {
  }

  cancel() {
    this.modalController.dismiss();
  }
}
