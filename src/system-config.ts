/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',
  '@angular/router-deprecated',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/components/main',
  'app/components/test',
  'app/test',
  'app/components/+login',
  'app/components/+login2',
  'app/components/header',
  'app/components/input',
  'app/components/left-side-menu',
  'app/components/dashboard',
  'app/components/+dashboard',
  'app/widget',
  'app/components/widget',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {
  '@ngrx/store' : {
    main: 'index.js',
    defaultExtension: 'js'
  },
  '@ngrx/core' : {
    main: 'index.js',
    defaultExtension: 'js'
  },
  'lodash':{
    format: 'cjs'
  }
};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    '@ngrx/store':'vendor/@ngrx/store',
    '@ngrx/core':'vendor/@ngrx/core',
    'main': 'main.js',
    'lodash': 'vendor/lodash/lodash.js'

  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
