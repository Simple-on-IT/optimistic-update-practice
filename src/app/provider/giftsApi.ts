import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Gift {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const giftsApi = createApi({
  reducerPath: 'giftsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getGifts: builder.query<Gift[], void>({
      query: () => 'products',
      providesTags: ['Products'],
    }),
    updateGift: builder.mutation<Gift, Partial<Gift> & Pick<Gift, 'id'>>({
      query: ({ id, ...patch }) => ({
        url: `products/${id}`,
        method: 'PUT',
        body: patch,
      }),
      async onQueryStarted(gift, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          giftsApi.util.updateQueryData('getGifts', undefined, (draft) => {
            // Находим подарок по id

            // Если найден то Обновляем только те поля, которые переданы в запросе

          })
        );

        try {
          await queryFulfilled;
        } catch {
          // Откат при ошибке
        }
      },
    }),
  }),
});

export const { useGetGiftsQuery, useUpdateGiftMutation } = giftsApi;
