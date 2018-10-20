import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contatosRoot = 'ContatosPage'
  usuarioRoot = 'UsuarioPage'
  exemploRoot = 'exemploPage'


  constructor(public navCtrl: NavController) {}

}
