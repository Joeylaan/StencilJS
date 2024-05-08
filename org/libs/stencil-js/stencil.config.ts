import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import {angularOutputTarget, ValueAccessorConfig} from "@stencil/angular-output-target";
import {reactOutputTarget} from '@stencil/react-output-target';

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
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'dist-custom-elements',
      dir: '../../dist/libs/stencil-js/dist-custom-elements-single-export',
      customElementsExportBehavior: 'single-export-module'
    },
    {
      type: 'dist-custom-elements',
      dir: '../../dist/libs/stencil-js/dist-custom-elements-bundle',
      customElementsExportBehavior: 'bundle'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      baseUrl: 'https://.local/',
      dir: '../../dist/libs/stencil-js/www'
    },
    angularOutputTarget({
      componentCorePackage: '@org/stencil-js',
      customElementsDir: 'dist-custom-elements',
      outputType: 'standalone',
      directivesProxyFile:
        '../angular-lib/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../angular-lib/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
      excludeComponents: excludeComponents
    }),
    reactOutputTarget({
      componentCorePackage: '@org/stencil-js',
      proxiesFile: '../react-lib/src/components/stencil-generated/index.ts',
      customElementsDir: 'dist-custom-elements-bundle',
      loaderDir: '@org/stencil-js/dist-custom-elements-bundle',
      includeImportCustomElements: true
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
