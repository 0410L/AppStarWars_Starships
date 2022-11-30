import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListadoComponent } from './listado/listado.component';
import { CardStarshipsComponent } from './card-starships/card-starships.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    NavbarMenuComponent,
    FooterComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    ListadoComponent,
    CardStarshipsComponent,
    LoginComponent,
    RegisterComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
