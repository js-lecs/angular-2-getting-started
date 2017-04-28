import { Component, OnInit } from '@angular/core';

@Component({
    selector: '[app-manual-component]',
    template: `<h1> Manual Component WOrks!!! </h1>
    
            <br>

            <h3> Second Line </h3>
    `,
    styles: [` h1{
            color:green;
    }`]

})
export class ManualComponent {

    constructor() {

    }
}
