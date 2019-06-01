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
        path: 'food/recipes-details/:makan.id',
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
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
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
