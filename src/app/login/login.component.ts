import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent
{
  public titulo = 'Login de Daytoday';
  public items:FirebaseListObservable<any[]>;
  constructor(af: AngularFireDatabase)
  {
   this.items=af.list('/contactos');
  }

}
