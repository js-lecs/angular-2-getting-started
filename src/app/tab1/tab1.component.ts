import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss']
})
export class Tab1Component implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() {
     console.log('constructor Called');
   }

  ngOnInit() {
    console.log('OnInit Called');
  }
  ngOnChanges() {
    console.log('OnChanges Called');
  }

  ngDoCheck() {
    console.log('DoCheck Called');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit Called');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit Called');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked Called');
  }

  ngOnDestroy() {
    console.log('OnDestroy Called');
  }
}
