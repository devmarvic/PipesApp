import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Cobi Lopez';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male' : 'invitarlo',
    'female': 'invitarla'
  }

  // changeClient() method
  public changeClient():void{
    this.name = 'Piu';
    this.gender = 'female';
  }

  // i18n Plural
  public cats: string[] = [
    'Cobi Lotez',
    'Piu Lotez',
    'Roi Lotez',
    'Angus Ireland',
    'Polleta',
    'Tio Troi',
    'Negrita',
    'Micho',
    'Nana'
  ]

  public catsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 gatos esperando.',
    'other': 'tenemos # clientes esperando.',

  }

  // atendedCat() method
  public atendedCat():void{
    this.cats.shift();
  }

  public cobiTheCat = {
    name: 'Cobi',
    age: 9,
    origen: 'Castelldefels',
  }

  // Async Pipe
  public myObserbableTimer = interval(2000).pipe(
    tap( value => console.log('tap:', value))
  );
}
