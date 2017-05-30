import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


// 关于 Angular 的引导过程
/*
* Angular 通过在 main.ts 中引导 AppModul
* 来启动引用。有种可选的方式，即是即时编译(JIT)和预编译(Ahead-Of-Time,AOT)
* */
