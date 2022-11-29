import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsComponent } from './starships/starships.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  //{path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '', redirectTo: 'welcome', pathMatch: 'full', },
  { path: 'home', component: HomeComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'Login',  component: LoginComponent, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
