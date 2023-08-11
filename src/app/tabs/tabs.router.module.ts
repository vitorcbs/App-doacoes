import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#HomePageModule',
          },
        ],
      },
      {
        path: 'donate',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#DonatePageModule',
          },
        ],
      },
      {
        path: 'RecieveDonation',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#RecieveDonationPageModule',
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [IonicModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
