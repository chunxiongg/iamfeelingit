import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'practices', loadChildren: './practices/practices.module#PracticesPageModule' },
  { path: 'food', loadChildren: './food/food.module#FoodPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'practices/category-details/recipes-details/:details.id', loadChildren: './food/recipes-details/recipes-details.module#RecipesDetailsPageModule' },
  { path: 'landing-slide', loadChildren: './landing-slide/landing-slide.module#LandingSlidePageModule' },
  { path: 'splash-quote', loadChildren: './splash-quote/splash-quote.module#SplashQuotePageModule' },
  { path: 'practices/category-details/:makan.cat_id', loadChildren: './category-details/category-details.module#CategoryDetailsPageModule' },
  { path: 'myth-page', loadChildren: './myth-page/myth-page.module#MythPagePageModule' },
  { path: 'about-us', loadChildren: './details/about-us/about-us.module#AboutUsPageModule' },
  { path: 'message-us', loadChildren: './details/message-us/message-us.module#MessageUsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
