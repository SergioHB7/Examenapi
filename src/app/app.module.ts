import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpClientModule} from '@angular/common/http'
import { VisualPage } from '../pages/visual/visual';
import { FavPage } from '../pages/fav/fav';
import { FavoritoProvider } from '../providers/favorito/favorito';
import { TabPage } from '../pages/tab/tab';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisualPage,
    FavPage,
    TabPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisualPage,
    FavPage,
    TabPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritoProvider
  ]
})
export class AppModule {}
