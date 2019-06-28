import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-new-mothers',
  templateUrl: './new-mothers.page.html',
  styleUrls: ['./new-mothers.page.scss'],
})
export class NewMothersPage implements OnInit {

  constructor(private navController: NavController, private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

  galleryType = 'a';

  goTo() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
     this.navController.navigateForward(['/tabs/tab1'])
  }

}
