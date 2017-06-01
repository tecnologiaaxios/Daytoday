import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { FormLoginComponent } from './formulario-login/formulario-login.component';

export const firebaseConfig = {

    apiKey: "AIzaSyCNT5Gp61NyRo5iGQV3P7d51Y_B6lDLl9g",
    authDomain: "daytoday-21c6d.firebaseapp.com",
    databaseURL: "https://daytoday-21c6d.firebaseio.com",
    storageBucket: "daytoday-21c6d.appspot.com",
    messagingSenderId: "934459413907"
}

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LogoComponent,
    FormLoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
