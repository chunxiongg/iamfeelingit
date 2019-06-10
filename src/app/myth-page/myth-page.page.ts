import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppServeService } from '../app-serve.service';
import { IonSlides } from '@ionic/angular';
import Swal from 'sweetalert2';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-myth-page',
  templateUrl: './myth-page.page.html',
  styleUrls: ['./myth-page.page.scss'],
})
export class MythPagePage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions, private navController: NavController, 
              private appServe: AppServeService, private vibration: Vibration) { }

  @ViewChild('slides') slides: IonSlides;
  NewMythFact = [];

  ngOnInit() {
    this.NewMythFact = this.appServe.getMythFact();
    console.log(this.NewMythFact)
    this.slides.lockSwipes(true);  
    
  }

  goHome() {
    this.navController.navigateBack('/tabs/practices')
  }

  MythSlideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1
  };


revealAnswer = '';

showAnswer(answer) {
  console.log(answer.revealAnswer);
  this.revealAnswer = answer.revealAnswer;

  Swal.fire({
    type: 'info',
    text: this.revealAnswer,
    animation: false,
    customClass: {
      popup: 'animated jackInTheBox'
    }
  })
}

correctAns = [];
wrongAns = []

progress = 0;

// For MYTH
mythClick(answer) {
  console.log('SELECTED: ' + answer.optionA + ' for Question ' + answer.id)
  if (answer.id == 2 || answer.id == 3) {
    console.log('Correct!')

    Swal.fire({
      type: 'success',
      text: 'You\'re right! ' + answer.revealAnswer,
      animation: false,
      customClass: {
        popup: 'animated heartBeat'
      },
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.value) {
        this.correctAns.push(answer.qn)
        this.progress += 0.35;
        console.log(this.correctAns);
        this.slides.lockSwipeToNext(false);
        this.slides.lockSwipeToPrev(true);
        this.slides.slideNext();
      }
    })
  }

  else {
    console.log('Wrong')
    Swal.fire({
      type: 'error',
      text: 'You\'re wrong! ' + answer.revealAnswer,
      animation: false,
      customClass: {
        popup: 'animated rubberBand'
      }
    })
    this.wrongAns.push(answer.qn)
  }

}

// FOR FACT 
factClick(answer) {
  console.log('SELECTED: ' + answer.optionB + ' for Question ' + answer.id)

  if (answer.id == 1) {
    console.log('Correct!')
    Swal.fire({
      type: 'success',
      text: 'You\'re right! ' + answer.revealAnswer,
      animation: false,
      customClass: {
        popup: 'animated heartBeat'
      },
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.value) {
        this.correctAns.push(answer.qn)
        console.log(this.correctAns);
        this.progress += 0.35;
        this.slides.lockSwipeToNext(false);
        this.slides.lockSwipeToPrev(true);
        this.slides.slideNext();
      }
    })

  }

  else {
    console.log('Wrong')
    Swal.fire({
      type: 'error',
      text: 'You\'re wrong! ' + answer.revealAnswer,
      animation: false,
      customClass: {
        popup: 'animated rubberBand'
      }
    })
    this.wrongAns.push(answer.qn)
  }
}

restartQuiz() {
  this.progress = 0;
  this.slides.lockSwipeToPrev(false);
  this.slides.slideTo(this.MythSlideOpts.initialSlide)
}

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
