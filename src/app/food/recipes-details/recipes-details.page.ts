import { Component, OnInit } from '@angular/core';
import { AppServeService } from 'src/app/app-serve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions,
              private appServe: AppServeService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  // example of adding a transition when a page/modal closes
// ionViewWillLeave() {

//   let options: NativeTransitionOptions = {
//      direction: 'up',
//      duration: 500,
//      slowdownfactor: 3,
//      slidePixels: 20,
//      iosdelay: 100,
//      androiddelay: 150,
//      fixedPixelsTop: 0,
//      fixedPixelsBottom: 60
//     }
 
//   this.nativePageTransitions.slide(options)
//     .then(() => {
//       console.log('succ')
//     })
//     .catch();
 
//  }

  galleryType = 'ingredients';

  makanIndividual = null;
  foodRecipe = [];
  getMakanOne;

  newArr = [];
  finalArr = [];

  ngOnInit() {
    this.foodRecipe = this.appServe.getRecipeArr(); // Get all the Recipes
    this.makanIndividual = +this.activatedRoute.snapshot.params['makan.id']
    this.getMakanOne = this.appServe.getIndividual(this.makanIndividual);

    this.newArr.push(this.getMakanOne.ingredients[0]);
    console.log(Object.values(this.newArr[0]));
    this.finalArr = Object.values(this.newArr[0]);
  }

  onRateChange($event) {
    console.log('changed')
  }

  async presentModal(getMakanOne) {
    console.log(getMakanOne.name);
    // const modal = await this.modalController.create({
    //   component: ModalExample,
    //   componentProps: { value: [ { name: read.name, image: read.image, goLink: read.link } ] }
    // });
    // return await modal.present();
  }

  handleSwipeRight() {
    console.log('Page Swiped Right: Go Back To Previous')
    this.router.navigate(['/tabs/food'])
  }
}

