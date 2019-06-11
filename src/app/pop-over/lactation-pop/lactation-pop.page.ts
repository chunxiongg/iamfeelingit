import { Component, OnInit, Input } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { AppServeService } from 'src/app/app-serve.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lactation-pop',
  templateUrl: './lactation-pop.page.html',
  styleUrls: ['./lactation-pop.page.scss'],
})
export class LactationPopPage implements OnInit {

  constructor(private navParams: NavParams, private appServe: AppServeService, private modalController: ModalController ) { }

  @Input() value: '';

  getValue;

  ngOnInit() {
    this.getValue = this.navParams.get('value');
    var retrieveCardName = this.getValue[0].cardName;
    var retrieveCardInfo = this.getValue[0].cardInfo;
    console.log(retrieveCardName)
    console.log(retrieveCardInfo)
  }

  cancel() {
    this.modalController.dismiss();
  }

}
