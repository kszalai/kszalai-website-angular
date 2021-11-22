import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { FooterComponent } from './footer/footer.component';
import { WorkDetailComponent } from './work/work-detail/work-detail.component';
import { WorkHistoryComponent } from './work/work-history/work-history.component';
import { DatabasePrinciplesComponent } from './pages/database-principles/database-principles.component';
import { WebProgrammingComponent } from './pages/web-programming/web-programming.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    HomeComponent,
    InfoHeaderComponent,
    FooterComponent,
    WorkDetailComponent,
    WorkHistoryComponent,
    DatabasePrinciplesComponent,
    WebProgrammingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
