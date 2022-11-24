import { Provider } from 'react-redux';
import store from './store';
import NewApp from './NewApp';


const App2 = () => (
    <Provider store={store}>
         <NewApp/>
    </Provider>
);

export default App2;