import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { DetailsComponent } from './components/main/quote/details/details.component';
import { OpportunityComponent } from './components/main/quote/details/opportunity/opportunity.component';
import { QuotesettingComponent } from './components/main/quote/details/quotesetting/quotesetting.component';
import { CustomerComponent } from './components/main/quote/details/customer/customer.component';
import { PartnerComponent } from './components/main/quote/details/partner/partner.component';
import { ApprovalComponent } from './components/main/quote/approval/approval.component';
import { TotalsComponent } from './components/main/quote/totals/totals.component';
import { DialogComponent } from './components/shared/dialog/dialog.component';
import { ActionComponent } from './components/main/quote/action/action.component';
import { BannerComponent } from './components/main/quote/banner/banner.component';
import { ProductComponent } from './components/main/product/product.component';
import { GridComponent } from './components/main/product/grid/grid.component';
import { GridActionsComponent } from './components/main/product/grid-actions/grid-actions.component';
import { ConfigsComponent } from './components/main/configs/configs.component';
import { CancelComponent } from './components/main/quote/cancel/cancel.component';
import { PhasesComponent } from './components/main/quote/banner/phases/phases.component';
import { ConfigHomeComponent } from './components/config-home/config-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    OpportunityComponent,
    QuotesettingComponent,
    CustomerComponent,
    PartnerComponent,
    ApprovalComponent,
    TotalsComponent,
    DialogComponent,
    ActionComponent,
    BannerComponent,
    ProductComponent,
    GridComponent,
    GridActionsComponent,
    ConfigsComponent,
    CancelComponent,
    PhasesComponent,
    ConfigHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
