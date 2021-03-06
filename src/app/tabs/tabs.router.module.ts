import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'lactation',
        children: [
          {
            path: '',
            loadChildren: '../lactation-new/lactation-new.module#LactationNewPageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      {
        path: 'practices',
        children: [
          {
            path: '',
            loadChildren: '../practices/practices.module#PracticesPageModule'
          }
        ]
      },
      {
        path: 'food',
        children: [
          {
            path: '',
            loadChildren: '../food/food.module#FoodPageModule'
          }
        ]
      },
      {
        path: 'practices/category-details/recipes-details/:details.id',
        children: [
          {
            path: '',
            loadChildren: '../food/recipes-details/recipes-details.module#RecipesDetailsPageModule'
          }
        ]
      },
      {
        path: 'contact-us',
        children: [
          {
            path: '',
            loadChildren: '../contact-us/contact-us.module#ContactUsPageModule'
          }
        ]
      },
      {
        path: 'landing',
        children: [
          {
            path: '',
            loadChildren: '../landing-slide/landing-slide.module#LandingSlidePageModule'
          }
        ]
      },
      {
        path: 'practices/category-details/:makan.cat_id',
        children: [
          {
            path: '',
            loadChildren: '../category-details/category-details.module#CategoryDetailsPageModule'
          }
        ]
      },
      {
        path: 'myth',
        children: [
          {
            path: '',
            loadChildren: '../myth-page/myth-page.module#MythPagePageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../details/about-us/about-us.module#AboutUsPageModule'
          }
        ]
      },
      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: '../details/message-us/message-us.module#MessageUsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/splash-quote',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/splash-quote',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
