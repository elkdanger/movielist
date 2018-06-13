import { PLATFORM } from 'aurelia-pal';
import { RouterConfiguration, Router } from "aurelia-router";

export class App {
  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.pushState = true;

    config.map([
      { route: ['', 'watchlist'], name: 'watchlist', title: 'Watchlist', moduleId: PLATFORM.moduleName('pages/watchlist'), nav: true },
      { route: 'popular', name: 'popular', title: 'Popular movies', moduleId: PLATFORM.moduleName('pages/popularmovies'), nav: true },
      { route: 'search/:term', name: 'search', moduleId: PLATFORM.moduleName('pages/searchresults')}
    ]);  
  }
}
