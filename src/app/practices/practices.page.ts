import { Component, OnInit } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverPage } from '../pop-over/pop-over';
import { ModalExample } from '../pop-over/article-pop';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.page.html',
  styleUrls: ['./practices.page.scss'],
})
export class PracticesPage implements OnInit {

  galleryType = 'makan';

  constructor(private appServe: AppServeService, private router: Router, private navController: NavController,
              public popoverController: PopoverController, private modalController: ModalController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
    component: PopoverPage,
    event: ev,
    translucent: false
    });
    return await popover.present();
  }

  foodRecipe = [];

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.3
  };

  openRecipe(makan) {
    // this.router.navigate(['/tabs/practices/recipes-details', makan.id])
    this.navController.navigateForward(['/tabs/practices/category-details', makan.cat_id])
    //console.log(makan.id)
  }

  readArticles = [
    { id: 1, name: 'Do\'s and Don\'ts of Asian Confinement', image: 'assets/warning.jpg', link: 'https://bit.ly/2WbQDyt',
      details: 'There are many beliefs in Asia regarding confinement. Here\'s the lowdown: Confinement is a period for your body to recuperate and recover from childbirth. The idea of confinement is very familiar to Asians. Many Asian confinement beliefs and practices originate from culture, with little or no scientific backup. The different cultures\' confinement periods last for different durations: 30 days for the Chinese, 44 days for the Malays and 40 days for Indians. However, the common basis for these beliefs is that they help provide adequate replenishment and recuperation for mothers after delivery. Your elders mean well, but do discuss your preferences with them.' 
    },
    
    { id: 2, name: 'Article 2', image: 'assets/steps/2.svg', link: '',
      details: 'article 2 details'
    },
    
    { id: 3, name: 'Article 3', image: 'assets/steps/3.svg', link: '',
      details: 'article 3 details'
    },

    { id: 4, name: 'Article 4', image: 'assets/steps/4.svg', link: '',
    details: 'article 4 details'
    }
  ]

  async presentModal(read) {
    console.log(read.name);
    const modal = await this.modalController.create({
    component: ModalExample,
    componentProps: { value: [{ name: read.name, image: read.image, seeDetails: read.details, goLink: read.link }] }
    });
    return await modal.present();
  }

  doRefresh(event) {
    this.appServe.doRefresh(event);
    this.ionViewWillEnter();
  }

    isLoaded = false;

    ionViewWillEnter() {
      setTimeout(() => {
      this.isLoaded = true;
      console.log('Yay, page loaded!')
      }, 15000);
    }

    onAnswerBoolean(answer) {
      console.log(answer)
    }

    onAnswerFact(answer) {
      console.log(answer)
    }


    returnData = [];
    NewMythFact = [];

    ngOnInit() {
      this.returnData = this.appServe.getQuizArr();
      this.foodRecipe = this.appServe.getRecipeArr();
      this.NewMythFact = this.appServe.getMythFact();

      console.log(this.NewMythFact)
    }

    revealAnswer = '';

    showAnswer(answer) {
      console.log(answer.revealAnswer);
      this.revealAnswer = answer.revealAnswer;

      Swal.fire({
        text: this.revealAnswer,
        animation: false,
        customClass: {
          popup: 'animated jackInTheBox'
        }
      })
    }

    correctAns = [];
    wrongAns = []

    // For MYTH
    mythClick(answer) {
      console.log('SELECTED: ' + answer.optionA + ' for Question ' + answer.id)
      if (answer.id == 2) {
        console.log('Correct!')
        Swal.fire({
          type: 'success',
          text: 'You\'re right! ' + answer.revealAnswer,
          animation: false,
          customClass: {
            popup: 'animated heartBeat'
          }
        })
        this.correctAns.push(answer.qn)
        console.log(this.correctAns);
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
          }
        })
        this.correctAns.push(answer.qn)
        console.log(this.correctAns);
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
    
}
