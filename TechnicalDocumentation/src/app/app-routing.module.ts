import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './dash/home/home.component';
import { IntroComponent } from './dash/intro/intro.component';
import { SidebarComponent } from './dash/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '', component:SidebarComponent,
    children:[]
  },
  {path: 'intro',component:IntroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
