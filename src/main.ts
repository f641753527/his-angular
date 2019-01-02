import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

console.log(environment.__NODE_ENV__);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
