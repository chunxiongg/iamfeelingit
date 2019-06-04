import { Component, OnInit } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverPage } from '../pop-over/pop-over';
import { ModalExample } from '../pop-over/article-pop';

@Component({
  selector: 'app-practices',
  templateUrl: './practices.page.html',
  styleUrls: ['./practices.page.scss'],
})
export class PracticesPage implements OnInit {

  galleryType = 'mvf';

  constructor(private appServe: AppServeService, private router: Router, 
              public popoverController: PopoverController, private modalController: ModalController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
    component: PopoverPage,
    event: ev,
    translucent: true
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
    this.router.navigate(['/tabs/practices/recipes-details', makan.id])
    //console.log(makan.id)
  }

  readArticles = [
    { id: 1, name: 'The Perfect Diet', image: 'assets/babi.jpg' },
    { id: 2, name: 'Article B', image: 'assets/shapes.svg' },
    { id: 3, name: 'Postpartum Massage', image: 'assets/m.png', link: 'https://parenting.firstcry.com/articles/a-quick-guide-to-postnatal-massage/?fbclid=IwAR39EnrK-SIzc_RIbERLXYArsnO64k46bfzqwNPy1Z8D9sHoVVa0jCdM6as' }
  ]

  async presentModal(read) {
    console.log(read.name);
    const modal = await this.modalController.create({
    component: ModalExample,
    componentProps: { value: [ { name: read.name, image: read.image, goLink: read.link } ] }
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
      console.log('yay, page loaded!')
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

    submittedAns = [];

    submitBtn() {
      this.appServe.submitBtn();
    }

    selectAnswer(options) {
      this.appServe.getSelected(options);
      console.log('Selected:', options.name)
    }


}
