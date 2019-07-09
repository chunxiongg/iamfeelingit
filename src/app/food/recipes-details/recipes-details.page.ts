import { Component, OnInit } from '@angular/core';
import { AppServeService } from 'src/app/app-serve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { timer } from 'rxjs'
import { NavController, ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { TimerPage } from '../../pop-over/timer/timer.page';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  public platform: any;
  constructor(private myPlatform: Platform, private nativePageTransitions: NativePageTransitions,
    private appServe: AppServeService,
    private modalController: ModalController,
    private navController: NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.platform = myPlatform;
  }

  galleryType = 'ingredients';
  public tests = new Array(20);

  makanIndividual = null;
  foodRecipe = [];
  getMakanOne;

  newArr = [];
  finalArr = [];

  newRecipe = [];
  finalRecipe = [];

  stepsArr = [];

  arr = [];
  ngOnInit() {
    this.foodRecipe = this.appServe.getRecipeArr(); // Get all the Recipes
    this.makanIndividual = +this.activatedRoute.snapshot.params['details.id']
    this.getMakanOne = this.appServe.getIndividual(this.makanIndividual);
    console.log(this.getMakanOne)

    // Ingredients
    this.newArr.push(this.getMakanOne.ingredients[0]);
    console.log(Object.values(this.newArr[0]));
    this.finalArr = Object.values(this.newArr[0]);

    for (var i = 0; i < this.getMakanOne.recipe.length; i++) {
      var details = this.getMakanOne.recipe[i]
      this.stepsArr.push(details)
    }
    console.log(this.stepsArr)


  }

  // result: number
  // startTiming;

  // startTimer() {
  //   this.startTiming = timer(0, 1000)
  //     .subscribe(res => {
  //       this.result = res
  //       console.log(this.result)
  //   });
  // }

  // stopTimer() {
  //   this.startTiming.unsubscribe();
  // }

  onRateChange($event) {
    console.log('changed')
  }

  onTimer(steps) {
    console.log(steps)
  }

  // async presentModal(getMakanOne) {
  //   console.log(getMakanOne.name);
  //   // const modal = await this.modalController.create({
  //   //   component: ModalExample,
  //   //   componentProps: { value: [ { name: read.name, image: read.image, goLink: read.link } ] }
  //   // });
  //   // return await modal.present();
  // }

  doRefresh(event) {
    this.appServe.doRefresh(event);
  }

  tickBox(value) {
    console.log(value)
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: TimerPage,
      cssClass: 'timerModal'
    });
    return await modal.present();
  }



}

