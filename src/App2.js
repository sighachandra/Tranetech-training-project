import { Provider } from 'react-redux';
import store from './store';
import NewApp from './NewApp';
import Router from './Router';

const App2 = () => (
    <Provider store={store}>
         <Router/>
    </Provider>
);

export default App2;