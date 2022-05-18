/* eslint-disable import/no-extraneous-dependencies */
// import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import store from './configureStore';

const renderContext = (element) => <Provider store={store}>{element}</Provider>;

export default renderContext;
