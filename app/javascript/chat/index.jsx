import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import messagesReducer from './reducers/messages_reducer';
import channelsReducer from './reducers/channels_reducer';

const chatContainer = document.getElementById('chat_app');
const channels = JSON.parse(chatContainer.dataset.channels).map(c => c.name);

const initialState = {
  messages: [],
  channels: channels
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/channels/:channel" exact component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  chatContainer
);
