// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import {MyComponent} from '@org/react-lib';
// import {defineCustomElements} from "../../../../libs/stencil-js/dist/components";

// applyPolyfills().then(() => {
//   defineCustomElements()
// })


export function App() {
  return (
    <div>
      {/*<NxWelcome title="react-webapp" />*/}
     <MyComponent first="StencilJS"></MyComponent>
      {/* END: routes */}
    </div>
  );
}

export default App;
