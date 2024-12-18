import { server } from '../../../../../public/mocks/server';

import {
  render,
  screen,
  waitFor,
  within
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GiftItem } from './GiftItem';
import { Provider } from 'react-redux';
import { store } from '@/app/provider/store';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App Component', () => {
  it('renders the heading', async () => {
    render(
      <Provider store={store}>
        <GiftItem id={1} name='Имя' description='Описание' />
      </Provider>
    );
    await waitFor(() => screen.findByTestId('GiftItem_1'));
    const gift = await screen.findByTestId('GiftItem_1');

    // Проверяем наличие элемента в документе
    expect(gift).toBeInTheDocument();

    const editButton = await within(gift).findByTestId('editButton');
    expect(editButton).toBeInTheDocument();

    userEvent.click(editButton);
    const saveButton = await within(gift).findByTestId('saveButton');
    expect(saveButton).toBeInTheDocument();

    // const nameInput = 
    // expect(nameInput).toBeInTheDocument();

    // await userEvent...; очистите поля
    // await userEvent...; введите новые значения 
    // await waitFor(() => expect(nameInput).toHaveValue('...'));

  });
});

