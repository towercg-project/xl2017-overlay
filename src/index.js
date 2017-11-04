import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root apiUrl="http://<this_host>:14400" />, document.getElementById('root'));
registerServiceWorker();
