import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

declare var jQuery:any;
declare var $:any;

@Component ({
  selector: 'form-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})

export class FormLoginComponent {
  private title = 'El día a día en tu trabajo';
  private email:string;
  private contrasena:string;
  private departament:string;

  public items: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.items = af.list('/contactos');
  }

  iniciarSesion() {
    this.email = $('#email').val();
    this.contrasena = $('#contrasena').val();

    console.log(this.email);

    //firebase.auth().singInWithEmailAndPassword(this.email, this.contrasena)
  }
}
