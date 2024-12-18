import { Provider } from 'react-redux';
import './App.css';
import { store } from '@/app/provider/store';
import { GiftList } from '@/widgets/GiftList';

export const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <h1 data-testid='AppTitle'>Gift Shop</h1>
      <GiftList />
    </div>
  </Provider>
);
