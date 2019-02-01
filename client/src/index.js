import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store ,{history} from './store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './components/App';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
  overrides: {
    MuiButton: {
      root: {
        '&:focus': {
          boxShadow: 'none',
          outline: 'none',
        },
      }
    },
  },
});


ReactDOM.render((
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>

), document.getElementById('root'));
