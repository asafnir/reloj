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
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blue,
    background: {
      default: "#fff"
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        boxShadow: 'none',
        backgroundColor: "#fff"
      },
    },
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
        
          <Route path="/" component={App} />
        
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>

), document.getElementById('root'));
