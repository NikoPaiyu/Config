import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ConfigsComponent } from 'src/app/components/main/configs/configs.component';


const routes: Routes = [{
  path : '',
  component : HomeComponent
},
{
  path : 'config/:quoteId',
  component : ConfigsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
