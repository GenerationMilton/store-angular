import { Routes } from '@angular/router';

import { LayoutsComponent } from '@shared/components/layouts/layouts.component';
import { NotFoundComponent } from './domains/info/pages/not-found/not-found.component';

export const routes: Routes = [

  {
    path:'',
    component: LayoutsComponent,
    children:[
        {
          path:'',
          loadComponent:() => import('./domains/products/pages/list/list.component').then(m=> m.ListComponent)
        },
        {
          path:'about',
          loadComponent:() => import('./domains/info/pages/about/about.component').then(p=>p.AboutComponent)

        },
        {
          path:'product/:id',
          loadComponent:() => import('./domains/products/pages/product-detail/product-detail.component').then(d=>d.ProductDetailComponent)

        }
    ]
  },

  {
    path:'**',
    component:NotFoundComponent
  }
];
