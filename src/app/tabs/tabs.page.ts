import { Component, ViewChild } from '@angular/core';
import { IonTabs, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  constructor(private navCtrl: NavController) { }

//   ionChange(tab) {
//     if (tab.getSelected()) {
//       console.log('Tab Selected: ' + tab.getSelected());
//     }
// }

}