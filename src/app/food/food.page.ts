import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverPage } from '../pop-over/pop-over';
import { Router } from '@angular/router';
import { AppServeService } from '../app-serve.service';
import { ModalExample } from '../pop-over/article-pop';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  constructor(public popoverController: PopoverController, 
              public router: Router, 
              private appServe: AppServeService,
              private modalController: ModalController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  foodRecipe = [];

  ngOnInit() {
    this.foodRecipe = this.appServe.getRecipeArr();
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.3
  };

  openRecipe(makan) {
    this.router.navigate(['/tabs/food/recipes-details', makan.id])
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
    }, 1000);
  }


  handleSwipeLeft() {
    console.log('Page Swiped Left: Lactation')
    this.router.navigate(['/tabs/tab3'])
  }

  handleSwipeRight() {
    console.log('Page Swiped Right: Go Back To Previous')
    this.router.navigate(['/tabs/practices'])
  }

}