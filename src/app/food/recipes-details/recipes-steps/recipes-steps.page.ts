import { Component, OnInit } from '@angular/core';
import { AppServeService } from 'src/app/app-serve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-steps',
  templateUrl: './recipes-steps.page.html',
  styleUrls: ['./recipes-steps.page.scss'],
})
export class RecipesStepsPage implements OnInit {

  constructor(private appServe: AppServeService, private activatedRoute: ActivatedRoute) { }

  // makanIndividual = null;
  // foodRecipe = [];
  // getMakanOne;

  ngOnInit() {
    // this.foodRecipe = this.appServe.getRecipeArr(); // Get all the Recipes
    // this.makanIndividual = +this.activatedRoute.snapshot.params['makan.id']
    // this.getMakanOne = this.appServe.getIndividual(this.makanIndividual);
  }

}
