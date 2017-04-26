import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DirectiveExampleComponent } from './directive-example/directive-example.component';
import { UnlessDirective } from './directives/unless.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HighlightDirective,
    DirectiveExampleComponent,
    UnlessDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
