import { Component, OnInit } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-splash-quote',
  templateUrl: './splash-quote.page.html',
  styleUrls: ['./splash-quote.page.scss'],
})
export class SplashQuotePage implements OnInit {

  constructor(private navController: NavController, private nativePageTransitions: NativePageTransitions) { }


  ngOnInit() {
    
  }

  firstTime() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
     this.navController.navigateForward(['/tabs/tab1'])

  }

  wentThrough() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
     this.navController.navigateForward(['/tabs/practices'])

  }

}
