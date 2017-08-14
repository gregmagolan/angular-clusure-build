import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import {BrowserAppModuleNgFactory} from './ngfactory/app/browser-app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(BrowserAppModuleNgFactory);
