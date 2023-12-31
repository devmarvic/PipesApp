import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLower: string = 'hugo';
  public nameUpper: string = 'HUGO';
  public fullName: string = 'hUgO mARqUez';

  public customDate: Date = new Date();
}
