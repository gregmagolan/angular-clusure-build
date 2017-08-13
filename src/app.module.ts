import {Injectable, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {Basic} from './basic';

@NgModule({
  declarations: [Basic],
  bootstrap: [Basic],
  imports: [BrowserModule],
})
@Injectable()
export class AppModule {
}
