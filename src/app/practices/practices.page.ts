import { Component, OnInit, ViewChild } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverPage } from '../pop-over/pop-over';
import { ModalExample } from '../pop-over/article-pop';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.page.html',
  styleUrls: ['./practices.page.scss'],
})
export class PracticesPage implements OnInit {

  galleryType = 'makan';
  // public tests = new Array(20);

  constructor(private navCtrl: NavController, private nativePageTransitions: NativePageTransitions, private appServe: AppServeService, private router: Router, private navController: NavController,
              public popoverController: PopoverController, private modalController: ModalController,
              private actionSheetController: ActionSheetController) { }
 
    returnData = [];
    NewMythFact = [];

    ngOnInit() {
      this.returnData = this.appServe.getQuizArr();
      this.foodRecipe = this.appServe.getRecipeArr();

    }

  // ionViewDidLeave() {
  //   this.navCtrl.pop();
  // }


  // async presentPopover(ev: any) {
  //   const popover = await this.popoverController.create({
  //   component: PopoverPage,
  //   event: ev,
  //   translucent: false
  //   });
  //   return await popover.present();
  // }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'More',
      buttons: [ 
      
        {
        text: 'Share',
        handler: () => {
          console.log('Share clicked');
        }
      }, 
      
      {
        text: 'Favourite',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, 
      
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }  
  

  onClickMyth() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
     this.navCtrl.navigateForward(['/myth'])
  }

  takeQuiz() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
    
     this.nativePageTransitions.slide(options);
     this.navCtrl.navigateForward(['/quiz'])
  }

  foodRecipe = [];


  segmentChanged() {
    console.log(true);
  }
  
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.3,
    // autoplay: {
    //   delay: 3000,
    // }
  };

  slideOptsForActivities = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.3
  };


  openRecipe(makan) {
    // this.router.navigate(['/tabs/practices/recipes-details', makan.id])
    this.navController.navigateForward(['/practices/category-details', makan.cat_id])
    //console.log(makan.id)
  }

  readArticles = [
    { id: 1, name: 'Food to Avoid', image: 'assets/warning.jpg', link: 'https://pemconfinement.com/foods-to-avoid-during-confinement-period/',
      details: 'Due to the ‘Qi’ and blood loss during the giving process, it is important for mothers to have the right diet during confinement to ensure that they replenish their body needs, especially when their bodies are weak after giving birth. One of the confinement’s principles stated that it would be important for mothers to consume “the right medicine” to replenish their body. Hence, apart from consuming nutritious food, it is also important for mothers to avoid foods that may cause harm to their body.',
      detailsBreak: 'Shellfish',
      detailsBreak1: 'Seafood like Crabs, Prawn are considered the ‘cold’ element which may easily cause allergic reactions, diarrhea or abdominal pain as mothers immune system and stomach are considered weak after giving birth. Also, shellfish food are considered to be ’poisonous’ food which may cause infection to the wound or even slow down the healing process of the wound. Last but not least, the toxins in seafood will affect the mother’s breast milk which may easily cause their children to have eczema due to weak immune system.'
    },
    
    { id: 2, name: 'Methods of Cooking', image: 'assets/steps/2.svg', link: '',
      details: 'Mothers are encouraged to choose healthier food during confinement period to ensure that they absorb enough nutrients and vitamins. Other than using fresh ingredients, the cooking methods play important roles in dish preparations too.',
      detailsBreak: 'Methods of cooking affect the nutritional content of a dish and thus, it is very important to choose the right method to cook the food. Here, we recommend you 4 different cooking methods which mothers can learn and prepare confinement food for themselves.',
      detailsBreak1: '1. Boiling (Blanching)'
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
    componentProps: { value: [{ name: read.name, image: read.image, seeDetails: read.details, detailsBreak: read.detailsBreak, detailsBreak1: read.detailsBreak1, goLink: read.link }] }
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
      }, 1000);
    }

    //   MythSlideOpts = {
    //     initialSlide: 0,
    //     speed: 400,
    //     slidesPerView: 1
    //   };


    // revealAnswer = '';

    // showAnswer(answer) {
    //   console.log(answer.revealAnswer);
    //   this.revealAnswer = answer.revealAnswer;

    //   Swal.fire({
    //     type: 'info',
    //     text: this.revealAnswer,
    //     animation: false,
    //     customClass: {
    //       popup: 'animated jackInTheBox'
    //     }
    //   })
    // }

    // correctAns = [];
    // wrongAns = []

    // // For MYTH
    // mythClick(answer) {
    //   console.log('SELECTED: ' + answer.optionA + ' for Question ' + answer.id)
    //   if (answer.id == 2 || answer.id == 3) {
    //     console.log('Correct!')
    //     Swal.fire({
    //       type: 'success',
    //       text: 'You\'re right! ' + answer.revealAnswer,
    //       animation: false,
    //       customClass: {
    //         popup: 'animated heartBeat'
    //       }
    //     })
    //     this.correctAns.push(answer.qn)
    //     console.log(this.correctAns);
    //   }

    //   else {
    //     console.log('Wrong')
    //     Swal.fire({
    //       type: 'error',
    //       text: 'You\'re wrong! ' + answer.revealAnswer,
    //       animation: false,
    //       customClass: {
    //         popup: 'animated rubberBand'
    //       }
    //     })
    //     this.wrongAns.push(answer.qn)
    //   }

    // }

    // // FOR FACT 
    // factClick(answer) {
    //   console.log('SELECTED: ' + answer.optionB + ' for Question ' + answer.id)

    //   if (answer.id == 1) {
    //     console.log('Correct!')
    //     Swal.fire({
    //       type: 'success',
    //       text: 'You\'re right! ' + answer.revealAnswer,
    //       animation: false,
    //       customClass: {
    //         popup: 'animated heartBeat'
    //       }
    //     })
    //     this.correctAns.push(answer.qn)
    //     console.log(this.correctAns);
    //   }

    //   else {
    //     console.log('Wrong')
    //     Swal.fire({
    //       type: 'error',
    //       text: 'You\'re wrong! ' + answer.revealAnswer,
    //       animation: false,
    //       customClass: {
    //         popup: 'animated rubberBand'
    //       }
    //     })
    //     this.wrongAns.push(answer.qn)
    //   }
    // }
    
}
