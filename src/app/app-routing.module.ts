import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'practices', loadChildren: './practices/practices.module#PracticesPageModule' },
  { path: 'food', loadChildren: './food/food.module#FoodPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'food/recipes-details/:makan.id', loadChildren: './food/recipes-details/recipes-details.module#RecipesDetailsPageModule' },
  { path: 'recipes-steps', loadChildren: './food/recipes-details/recipes-steps/recipes-steps.module#RecipesStepsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
