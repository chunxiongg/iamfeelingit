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

  // public foodRecipe = [
  //   { image: 'assets/night.svg', id: 1, name: 'Cucumber', website: 'Facebook', link: 'https://facebook.com' },
  //   { image: 'assets/night.svg', id: 2, name: 'Carot', website: 'Twitter', link: 'https://twitter.com' },
  //   { image: 'assets/night.svg', id: 3, name: 'Tomato', website: 'Instagram', link: 'https://instagram.com' }
  // ]
  
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
    { id: 1, name: 'The Perfect Diet for a Mother during Confinement', image: 'assets/babi.jpg', link: 'https://pemconfinement.com/the-perfect-diet-for-a-mother-during-confinement/' },
    { id: 1, name: 'Article B', image: 'assets/shapes.svg', link: 'https://facebook.com' }
  ]

  async presentModal(read) {
    console.log(read.name);
    
    const modal = await this.modalController.create({
      component: ModalExample,
      componentProps: { value: read.name }
    });
    return await modal.present();
  }

}