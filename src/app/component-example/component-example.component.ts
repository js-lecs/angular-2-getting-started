import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component-example',
  templateUrl: './component-example.component.html',
  styleUrls: ['./component-example.component.scss']
})
export class ComponentExampleComponent implements OnInit {

  @Input() cricketers: Array<any> = [];

  @Output() btnClickEmit = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  btnClickExample() {
    console.log('button clicked from the child component');
    this.btnClickEmit.emit([1, 2, 3]);
  }

}
