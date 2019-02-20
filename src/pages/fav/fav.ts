import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisualPage } from '../visual/visual';
import { FavoritoProvider } from '../../providers/favorito/favorito';

/**
 * Generated class for the FavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html',
})
export class FavPage {
items = [];
visual = VisualPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public favoritos: FavoritoProvider) {
  this.items= this.favoritos.getFavoritos();  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavPage');
  }
  Verconsola(consola){
    this.navCtrl.push(this.visual, {consola: consola});
  }
}
