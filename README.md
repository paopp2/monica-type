# Unggoy Type :speak_no_evil:

Unggoy Type is a simple typing test that allows its users to type a given paragraph while recording their WPM and Accuracy.

## Installation

1. Run `npm install` to install the necessary dependencies.
2. Set up `environment.prod.ts` and `environment.ts` with the following variables:
   in `environment.prod.ts`

```
export const environment = {
  firebase: {
    projectId: ,
    appId: ,
    storageBucket: ,
    apiKey: ,
    authDomain: ,
    messagingSenderId: ,
  },
  formspreeApi: ,
    production: true
  };
```

in `environment.ts`

```
export const environment = {
  firebase: {
    projectId: ,
    appId: ,
    storageBucket: ,
    apiKey: ,
    authDomain: ,
    messagingSenderId: ,
  },
  formspreeApi: ,
    production: true
  };
```

3. Run `ng serve` for a dev server then navigate to `http://localhost:4200`.
4. Start testing your typing speed!

## Built With

This project was built with [Angular](https://angular.io/) version 13.3.8.
