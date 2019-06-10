import { Component, ViewChild } from '@angular/core';
import { IonTabs, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  constructor(private navCtrl: NavController) { }

  // ionViewDidLeave(){
  //   this.navCtrl.navigateRoot('/tabs/contact-us')
  // }

}