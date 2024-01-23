// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,

  weatherBaseUrl:
    'https://api.weatherapi.com/v1/current.json?key=801598718fb5457b9f7155802232304',

  firebase: {
    apiKey: 'AIzaSyDc4mUpO7dbCzcOOWp-szzcDr-I5YowO2U',
    authDomain: 'weatherapp-100.firebaseapp.com',
    projectId: 'weatherapp-100',
    storageBucket: 'weatherapp-100.appspot.com',
    messagingSenderId: '858711231470',
    appId: '1:858711231470:web:b239cc89d712f1f2415cff',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
