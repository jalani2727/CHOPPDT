import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Category Components/Category.css';
import './Rounds Components/Rounds.css';
import './Ingredient Components/Ingredient.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
