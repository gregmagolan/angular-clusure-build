import 'zone.js/dist/zone'; // fix for closure build; including 'zone.js' confuses closure and breaks the build

import {enableProdMode} from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import {BrowserAppModuleNgFactory} from './ngfactory/app/browser-app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(BrowserAppModuleNgFactory);
