import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { DashSideComponent } from './dashboard/dash-side/dash-side.component';
import { DashTitleComponent } from './dashboard/dash-title/dash-title.component';
import { DashMainComponent } from './dashboard/dash-main/dash-main.component';
import { DashComponent } from './dashboard/dash/dash.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EditorComponent} from './editor/editor.component';
import { routing } from './app.routing';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EditorToolbarComponent } from './editor-toolbar/editor-toolbar.component';
import { EditorHamburgerComponent } from './editor-hamburger/editor-hamburger.component';
import { Browser } from 'protractor';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    DashSideComponent,
    DashTitleComponent,
    DashMainComponent,
    DashComponent,
    LandingPageComponent,
    EditorComponent,
    EditorToolbarComponent,
    EditorHamburgerComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
