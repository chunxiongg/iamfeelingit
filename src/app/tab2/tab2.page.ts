import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { AppServeService } from '../app-serve.service';
import { NavController } from '@ionic/angular';
import { IonSlides } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  constructor(private nativePageTransitions: NativePageTransitions, private navController: NavController, private appServe: AppServeService) {}

  @ViewChild('slides') slides: IonSlides;

  returnData = [];

  ngOnInit() {
    this.returnData = this.appServe.getQuizArr();
    this.slides.lockSwipes(true)
  }

  ansArr = [];

  progress = 0;
  selectAnswer(options) {
    console.log('Selected:', options.name)
    this.ansArr.push(options.name);
    console.log(this.ansArr);

    this.slides.lockSwipeToNext(false);
    this.slides.lockSwipeToPrev(true);
    this.slides.slideNext();
    this.progress += 0.1;
  }

  restartQuiz() {
    this.progress = 0;
    this.ansArr.length = 0;
    console.log(this.ansArr);
    this.slides.lockSwipeToPrev(false);
    this.slides.slideTo(this.slideOpts.initialSlide)
  }

  goHome() {
    this.navController.navigateBack('/tabs/practices')
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  goBack() {
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
    this.navController.navigateBack(['/tabs/practices'])
  }

}
