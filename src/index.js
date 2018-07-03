import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main'
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components'

injectGlobal`
  ul, li {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }
`

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
