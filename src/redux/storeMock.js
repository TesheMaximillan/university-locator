import { Provider } from 'react-redux';
import store from './configureStore';

const renderContext = (element) => <Provider store={store}>{element}</Provider>;

export default renderContext;
