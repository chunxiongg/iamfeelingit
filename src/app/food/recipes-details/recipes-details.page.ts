import { Component, OnInit } from '@angular/core';
import { AppServeService } from 'src/app/app-serve.service';
import { ActivatedRoute } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions,
              private appServe: AppServeService, 
              private activatedRoute: ActivatedRoute) { }

  // example of adding a transition when a page/modal closes
ionViewWillLeave() {

  let options: NativeTransitionOptions = {
     direction: 'up',
     duration: 500,
     slowdownfactor: 3,
     slidePixels: 20,
     iosdelay: 100,
     androiddelay: 150,
     fixedPixelsTop: 0,
     fixedPixelsBottom: 60
    }
 
  this.nativePageTransitions.slide(options)
    .then(() => {
      console.log('succ')
    })
    .catch();
 
 }

  makanIndividual = null;
  foodRecipe = [];
  getMakanOne;

  ngOnInit() {
    this.foodRecipe = this.appServe.getRecipeArr(); // Get all the Recipes
    this.makanIndividual = +this.activatedRoute.snapshot.params['makan.id']
    this.getMakanOne = this.appServe.getIndividual(this.makanIndividual);
  }

  onRateChange($event) {
    console.log('changed')
  }
}
