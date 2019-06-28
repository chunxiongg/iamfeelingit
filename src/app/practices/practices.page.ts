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
      detailsBreak1a: 'Shellfish',
      detailsBreak1b: 'Seafood like Crabs, Prawn are considered the ‘cold’ element which may easily cause allergic reactions, diarrhea or abdominal pain as mothers immune system and stomach are considered weak after giving birth. Also, shellfish food are considered to be ’poisonous’ food which may cause infection to the wound or even slow down the healing process of the wound. Last but not least, the toxins in seafood will affect the mother’s breast milk which may easily cause their children to have eczema due to weak immune system.',
      detailsBreak2a: 'High in Mercury Content Seafood',
      detailsBreak2b: 'Many mothers may think or consider Salmon and Tuna to be very nutritional as it may help in producing breast milk. However, Salmon and Tuna are found to be high in mercury content which may cause digestive systems to be in discomfort. This may then cause mothers to have diarrhea and vomiting, which slows down the healing process.',
      detailsBreak3a: 'Cabbage',
      detailsBreak3b: 'Cabbages are considered as a ‘cold’ food, and hence may cause abdominal pain for mothers with weak stomach. During confinement period, mother’s body are considered to be ‘cold’ as well. Hence, if they consume cabbages, it may cause them to have Hives or ​Urticaria.',
      detailsBreak4a: 'Cold Drinks', 
      detailsBreak4b: 'Mothers should also avoid drinks like bubble milk tea, soft drinks or drinks that are high in sugar content during their confinement period. If mothers were to consume a high amount of sugar during their confinement, the collagen levels in their body would be affected, which will slow down the healing process. On the other hand, cold drinks will not only bring a negative impact to Mothers whose bodies are already considered ‘cold’, their wombs will also be affected and swelling might also be observed.',
      detailsBreak5a: 'Hotpot',
      detailsBreak5b: 'Everyone naturally love hotpot and hence, mothers may crave for hotpot during confinement to warm their bodies up. However, the process of cooking hotpot may cause cross contamination as raw ingredients are mixed with the cooked ingredients. This may cause bacteria contamination and hence, causing mothers with weak digestive systems to have food poisoning and diarrhea.', 
      detailsBreak6a: 'Greasy and Spicy Food',
      detailsBreak6b: 'Spicy food can cause constipation or diarrhea, and when mixed with chinese herbs may cause bodies to be very ‘hot’. Mothers should also avoid greasy food as it may cause severe health issues.',
      detailsBreak7a: 'Raw Food',
      detailsBreak7b: 'Raw food (e.g sashimi) may contain bacteria which can cause severe abdominal pain and diarrhea and hence causing the process of recuperation of wounds and ligament to slow down. Raw food may also cause joint pains.',
      detailsBreak8a: 'Caffeine and Alcoholic Content',
      detailsBreak8b: 'Caffeine and Alcoholic content can increase heartbeat, which cause one to be very excited, anxious which causes ​insomnia​. Also, the caffeine and alcoholic content will affect mother’s breast milk content. This may cause their children to indirectly consume these contents and affect their health.',
      detailsBreak9a: 'High in Salt content',
      detailsBreak9b: 'Consuming too much salt content can cause mothers to have more serious water retention issues after birth. Hence, consuming less salt content can increase mother’s metabolism rate and reduce water retention in their body.',
      detailsBreak10a: 'Acidic food content',
      detailsBreak10b: 'Breastfeeding mothers should avoid acidic fruits as they are cooling. Apart from causing harm to the mother’s body and uterus, acidic fruits also affects the developement of the child’s digestive tract.',
      detailsBreak11a: 'Garlic',
      detailsBreak11b: 'Garlic taste may cause mother’s breast milk to have a smell and taste which causes babies to refuse their mother’s milk. Hence, mothers should avoid food with garlic content.',
      detailsBreak12a: 'Coconut',
      detailsBreak12b: 'Coconut is one of the fruits commonly consumed in warm countries to relieve heat. However, due to its ‘cooling’ properties, mothers who have a weaker body constitution should avoid them to prevent the slowing down of her recuperation process.',

    },
    
    { id: 2, name: 'Methods of Cooking', image: 'assets/steps/2.svg', link: '',
      details: 'Mothers are encouraged to choose healthier food during confinement period to ensure that they absorb enough nutrients and vitamins. Other than using fresh ingredients, the cooking methods play important roles in dish preparations too.',
      detailsBreak: 'Methods of cooking affect the nutritional content of a dish and thus, it is very important to choose the right method to cook the food. Here, we recommend you 4 different cooking methods which mothers can learn and prepare confinement food for themselves.',
      detailsBreak1: '1. Boiling (Blanching)',
      detailsBreak2: 'The standard procedure in boiling requires the water to boil first followed by the adding of the ingredients till cooked and this is why timing in boiling is key. Boiling food may taste bland but it is assured that you are able to taste the original flavour of each ingredient. In addition, boiling does not affect the fat content of the food that is being cooked.',
      detailsBreak3: 'However, mothers have to be well aware of the timing involved in boiling/blanching as it affects the nutrient loss of the ingredients into the water. Consuming over-boiled/blanched food will cause mothers to not be able to absorb sufficient nutrients. During such instances, mothers are encouraged to consume the water used for boiling with the food cooked to ensure that existing nutrients are absorbed as well.',
      detailsBreak4: '2. Steaming',
      detailsBreak5: 'Steaming suits mother who are conscious over the food calories as this cooking method does not involve any oil or fats. Steaming also retains the nutrient content of each ingredient which ensures mothers absorbing sufficient nutrients when consuming their food.',
      detailsBreak6: 'As mothers’ stomachs will be slightly weaker during confinement period, they may face indigestion issues and may not be able to completely absorb the nutrients in the food consumed. However, steaming will soften the dietary fibre present in the food which solves the indigestion problems faced by mothers.',
      detailsBreak7: '3. Stewing',
      detailsBreak8: 'Stewing requires lesser amount of oil, and sometimes none oil is required. Although stewing requires a longer cooking time, lesser moisture and nutrients are lost as they do not evaporate easily. This results in more tenderness among the ingredients stewed, making the dish easily digestible. If boiling/blanching does not satisfy the mother’s taste buds, stewing will definitely satisfy their taste buds. With adequate stewing timings of meat, the meat can be tenderised yet retaining its juice in the soup, ensuring the dish to be tasty and nutritious.',
      detailsBreak9: '4. Stir-frying',
      detailsBreak10: 'Stir-frying is one of the healthy cooking options as it is less time-consuming and also requires less oil. Mothers can opt for vegetable oil to increase the nutritional value of the meal. However, olive oil is recommended as it is not only a healthier choice, but also enables the food to turn more flavorful. In addition, stir-fried food contains fat soluble enzymes which can only dissolve into the body system with the aid of the grease. Hence, the combination of fat soluble enzymes and olive oil is effective in helping the body to absorb vitamins.',
      detailsBreak11: 'The four cooking methods provided each have their own benefits and mothers are free to choose them based on their own health condition or liking. We hope that more mothers will choose the above-mentioned cooking methods more often while eating healthily during their confinement process!'
    }
  ]

  async presentModal(read) {
    console.log(read.name);
    const modal = await this.modalController.create({
    component: ModalExample,
    componentProps: { value: [{ name: read.name, image: read.image, seeDetails: read.details, 
      
      detailsBreak1a: read.detailsBreak1a, detailsBreak1b: read.detailsBreak1b, 
      detailsBreak2a: read.detailsBreak2a,
      detailsBreak2b: read.detailsBreak2b,
      detailsBreak3a: read.detailsBreak3a,
      detailsBreak3b: read.detailsBreak3b,
      detailsBreak4a: read.detailsBreak4a,
      detailsBreak4b: read.detailsBreak4b,
      detailsBreak5a: read.detailsBreak5a,
      detailsBreak5b: read.detailsBreak5b,
      detailsBreak6a: read.detailsBreak6a,
      detailsBreak6b: read.detailsBreak6b,
      detailsBreak7a: read.detailsBreak7a,
      detailsBreak7b: read.detailsBreak7b,
      detailsBreak8a: read.detailsBreak8a,
      detailsBreak8b: read.detailsBreak8b,
      detailsBreak9a: read.detailsBreak9a,
      detailsBreak9b: read.detailsBreak9b,
      detailsBreak10a: read.detailsBreak10a,
      detailsBreak10b: read.detailsBreak10b,
      detailsBreak11a: read.detailsBreak11a,
      detailsBreak11b: read.detailsBreak11b,
      
      goLink: read.link,
      
      detailsBreak: read.detailsBreak, detailsBreak1: read.detailsBreak1,
      detailsBreak2: read.detailsBreak2,
      detailsBreak3: read.detailsBreak3,
      detailsBreak4: read.detailsBreak4,
      detailsBreak5: read.detailsBreak5,
      detailsBreak6: read.detailsBreak6,
      detailsBreak7: read.detailsBreak7,
      detailsBreak8: read.detailsBreak8,
      detailsBreak9: read.detailsBreak9,
      detailsBreak10: read.detailsBreak10,
      detailsBreak11: read.detailsBreak11 }] }
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
