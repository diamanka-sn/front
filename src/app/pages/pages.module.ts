import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { FinanceModule } from './finance/finance.module';
import { BovinModule } from './bovin/bovin.module';
import { SaisirModule} from './saisir/saisir.module'


import { ReproductionModule } from './reproduction/reproduction.module';
import { SanteModule } from './sante/sante.module';
import { RapportModule } from './rapport/rapport.module';

import { AlimentationModule } from './alimentation/alimentation.module';
import { ProductionModule } from './production/production.module';
import { ProfilComponent } from './profil/profil.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
// import { AuthentificationModule } from './authentification/authentification.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FinanceModule,
    BovinModule,
    ReproductionModule,
    // AuthentificationModule,

    SanteModule,
    RapportModule,
    AlimentationModule,
    ProductionModule,
    SaisirModule,

   
  ],
  declarations: [
    PagesComponent,
    ProfilComponent,
   
  ],
})
export class PagesModule {
}
