import 'reflect-metadata';
import 'zone.js';

import {enableProdMode} from '@angular/core';
import {ServerAppModuleNgFactory} from './ngfactory/app/server-app.module.ngfactory';
import {startServer} from './server-express';

enableProdMode();
startServer(ServerAppModuleNgFactory);
