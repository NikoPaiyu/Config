import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigHomeComponent } from 'src/app/components/config-home/config-home.component';


const routes: Routes = [{
  path : '',
  component : ConfigHomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
