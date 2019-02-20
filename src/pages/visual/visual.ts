import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritoProvider } from '../../providers/favorito/favorito';

/**
 * Generated class for the VisualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visual',
  templateUrl: 'visual.html',
})
export class VisualPage {
  consola = [];
  imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public favoritos: FavoritoProvider) {

    this.consola = this.navParams.get("consola");
    
    if (this.consola.ad.hasOwnProperty("images")){
      this.imgs = this.consola.ad.images;
    }
  }
 


  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualPage');
  }
  favorito(consola){
    this.favoritos.addFavoritos(consola);
  }

}
