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

  galleryType = 'ingredients';

  makanIndividual = null;
  foodRecipe = [];
  getMakanOne;

  newArr = [];
  finalArr = [];

  newRecipe = [];
  finalRecipe = [];

  ngOnInit() {
    this.foodRecipe = this.appServe.getRecipeArr(); // Get all the Recipes
    this.makanIndividual = +this.activatedRoute.snapshot.params['makan.id']
    this.getMakanOne = this.appServe.getIndividual(this.makanIndividual);

    // Ingredients
    this.newArr.push(this.getMakanOne.ingredients[0]);
    console.log(Object.values(this.newArr[0]));
    this.finalArr = Object.values(this.newArr[0]);

    console.log(this.getMakanOne.recipe[0].Step)
    console.log(this.getMakanOne.recipe[0].image)

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

  doRefresh(event) {
    this.appServe.doRefresh(event);
  }

  tickBox(value) {
    if (value) {
      console.log('Value: I have been checked.')
    }

    else {
      console.log('not checked')
    }
  }
}

