import { Routes } from '@angular/router';

import { ProductDetailComponent } from '@products/pages/product-detail/product-detail.component';
import { LayoutsComponent } from '@shared/components/layouts/layouts.component';
import { AboutComponent } from './domains/info/pages/about/about.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';
import { ListComponent } from './domains/products/pages/list/list.component';
export const routes: Routes = [

  {
    path:'',
    component: LayoutsComponent,
    children:[
        {
          path:'',
          component:ListComponent
        },
        {
          path:'about',
          component:AboutComponent
        },
        {
          path:'product/:id',
          component:ProductDetailComponent
        }
    ]
  },

  {
    path:'**',
    component:NotFoundComponent
  }
];
