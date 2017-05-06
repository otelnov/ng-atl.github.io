import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app-routing.module';
import { RouterModule } from '@angular/router';
// Import Page Components:
import { 
  HomeComponent,
  CodeOfConductComponent,
  DetailsComponent,
  RegistrationComponent,
  SpeakersComponent,
  SponsorsComponent
  } from '../pages/pages';

// Import Re-usable Components:
import { PillButtonComponent } from '../components/components';

@NgModule({
  declarations: [
    AppComponent,
    CodeOfConductComponent,
    DetailsComponent,
    HomeComponent,
    RegistrationComponent,
    SpeakersComponent,
    SponsorsComponent,
    PillButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}