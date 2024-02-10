import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent, title:'Home'},
  {path:'ABOUT',component:AboutComponent , title:'About'},
  {path:'PORTFOLIO',component:ProtfolioComponent, title:'PORTFOLIO'},
  {path:'contact',component:ContactComponent,title:'contact'},
  {path:'**',component:NotfoundComponent,title:'Not found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
