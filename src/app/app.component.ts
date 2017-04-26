import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  name: String = 'This is an example for data binding';

  cricketers: Array<any> = [
    {
      name: 'Sanath Jayasuriya',
      type: 'Batsman',
      birthday: new Date(1962, 8, 4)
    },
    {
      name: 'Chaminda Vaas',
      type: 'Bowler',
      birthday: new Date(1992, 8, 3)
    },
    {
      name: 'Marven Athtapattu',
      type: 'Batsman',
      birthday: new Date(1950, 3, 4)
    },
    {
      name: 'Lasit Malinga',
      type: 'Bowler',
      birthday: new Date(1972, 6, 23)
    }
  ];

  buttonHideProp: Boolean = false;
  constructor() { }

  ngOnInit() {
  }


  btnClickExample() {
    alert('Button Clicked');
  }

}
