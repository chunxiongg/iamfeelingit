import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../pop-over/pop-over';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  constructor(public popoverController: PopoverController) { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  public foodRecipe = [
    {image: 'assets/a.png', id: 1, name: 'Cucumber', website: 'Facebook', link: 'https://facebook.com' },
    {image: 'assets/b.png', id: 2, name: 'Carot', website: 'Twitter', link: 'https://twitter.com' },
    {image: 'assets/c.png', id: 3, name: 'Tomato', website: 'Instagram', link: 'https://instagram.com' }
  ]
  
  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1.3
  };

}
