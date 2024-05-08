import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import {angularOutputTarget, ValueAccessorConfig} from "@stencil/angular-output-target";

const angularValueAccessorBindings: ValueAccessorConfig[] = [];
const excludeComponents = [];

export const config: Config = {
  namespace: 'stenciljs',
  devServer: {
    reloadStrategy: 'pageReload',
    port: 3333,
  },
  plugins: [
    sass()
  ],
  outputTargets: [
    {
      type: 'dist',
      dir: '../../dist/libs/stencil-js/dist',
      esmLoaderPath: '../loader',
      copy: [ { src: 'services' } ]
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'dist-custom-elements',
      dir: '../../dist/libs/stencil-js/dist-custom-elements',
      customElementsExportBehavior: 'single-export-module'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'https://.local/',
      dir: '../../dist/libs/stencil-js/www'
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-js',
      customElementsDir: 'dist-custom-elements',
      outputType: 'standalone',
      directivesProxyFile:
        '../angular-lib/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../angular-lib/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
      excludeComponents: excludeComponents
    })
  ],
  testing: {
    browserHeadless: "new",
  },
};
