import * as serviceWorker from './serviceWorker';

import React, { Component } from 'react';
import { persistReducer, persistStore } from 'redux-persist';

import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import createRootReducer from 'reducers';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const hist = createBrowserHistory();
const rootReducer = createRootReducer(hist);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

serviceWorker.unregister();

class Root extends Component {
  render() {
    return (
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <App history={ hist } />
        </PersistGate>
      </Provider>
    );
  }
}
ReactDOM.render(<Root/>, document.getElementById('root'));
