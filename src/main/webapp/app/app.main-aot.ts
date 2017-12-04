import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { LiveconsultAppModuleNgFactory } from '../../../../build/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(LiveconsultAppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
