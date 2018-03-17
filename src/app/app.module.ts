import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UtilService } from './services/util.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { app_routing } from './app.routes';
import { SolutionComponent } from './components/solution/solution.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    SolutionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
