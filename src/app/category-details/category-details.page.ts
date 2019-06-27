import { Component, OnInit } from '@angular/core';
import { AppServeService } from '../app-serve.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.page.html',
  styleUrls: ['./category-details.page.scss'],
})
export class CategoryDetailsPage implements OnInit {

  constructor(private navController: NavController, private appServe: AppServeService, private router: Router, private activatedRoute: ActivatedRoute) { }


  makanIndividual = null;
  foodRecipe = [];
  getMakanOne;

  arr = []

  ngOnInit() {
    this.foodRecipe = this.appServe.getRecipeArr(); // Get all the Recipes
    this.makanIndividual = +this.activatedRoute.snapshot.params['makan.cat_id']
    this.getMakanOne = this.appServe.getAllCategory(this.makanIndividual);
    console.log('CategoryID: ' + this.getMakanOne.cat_id)

    for (var i = 0; i < this.foodRecipe.length; i++) {
      if (this.foodRecipe[i].cat_id === this.makanIndividual) {
        this.arr.push({
          cat_id: this.foodRecipe[i].cat_id, 
          cat_name: this.foodRecipe[i].cat_name,
          image: this.foodRecipe[i].image,
          name: this.foodRecipe[i].name,
          id: this.foodRecipe[i].id,
          information: this.foodRecipe[i].information,
          briefDes: this.foodRecipe[i].briefDes,
          des: this.foodRecipe[i].des,
          ingredients: this.foodRecipe[i].ingredients,
          recipe: this.foodRecipe[i].recipe
        }) 
      }
    }
    console.log(this.arr);
  }

  openFood(details) {
    console.log('ProductID: ' + details.id)
    this.router.navigate(['/practices/category-details/recipes-details/', details.id])
  }

  returnBack() {
    this.navController.navigateBack(['/tabs/practices'])

  }


  isLoaded = false;

  ionViewWillEnter() {
    setTimeout(() => {
      this.isLoaded = true;
      console.log('Category-details page loaded!')
    }, 1300);
  }

  doRefresh(event) {
    this.appServe.doRefresh(event);
  }
 

}
