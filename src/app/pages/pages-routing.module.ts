import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { FinanceComponent } from './finance/finance.component';
import { BovinComponent } from './bovin/bovin.component';
import { AlimentationComponent } from './alimentation/alimentation.component';
import { ProductionComponent } from './production/production.component';
import { ReproductionComponent } from './reproduction/reproduction.component';
import { SanteComponent } from './sante/sante.component';
import { RapportComponent } from './rapport/rapport.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'iot-dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'finance',
      component: FinanceComponent,
    },
    {
      path: 'bovin',
      component: BovinComponent,
    },
    {
      path: 'alimentation',
      component : AlimentationComponent,
    },
    {
      path: 'production',
      component: ProductionComponent,
    },
    {
      path: 'reproduction',
      component: ReproductionComponent,
    },
    {
      path: 'sante',
      component: SanteComponent,
    },
    {
      path: 'rapport',
      component: RapportComponent,
    },
    {
      path:'profil',
      component: ProfilComponent,
    },    
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
