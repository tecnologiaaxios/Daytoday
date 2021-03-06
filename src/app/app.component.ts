import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  private title:string = 'El día a día en tu trabajo';
  public items:FirebaseListObservable<any[]>;

  constructor(af: AngularFireDatabase)
  {
   this.items=af.list('/contactos');
  }
}
