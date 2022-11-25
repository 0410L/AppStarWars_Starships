import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  //{path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: '', redirectTo: 'welcome', pathMatch: 'full', },
  {path: 'home', component: HomeComponent},
  {path: 'starships', component: StarshipsComponent},
  {path: '**', component: PageNotFoundComponent},
  {path: 'welcome', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
