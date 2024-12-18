import { GiftItem } from '@/features/EditGiftForm';
import styles from './GiftList.module.css';
import { useGetGiftsQuery, useUpdateGiftMutation } from '@/app/provider/giftsApi';
import { useCallbackCustom } from '@/shared/hooks/useCallbackCustom';

export const GiftList = () => {
  const {
    data: gifts,
    isLoading,
    isError
  } = useGetGiftsQuery();
  const [updateGift] = useUpdateGiftMutation();

  const handleUpdate = useCallbackCustom(async (props: {
    id: number,
    name: string,
    description: string
  }) => {
    await updateGift(props)
  }, [updateGift])

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading gifts</div>;

  return (
    <div className={styles.giftList}>
      {gifts?.map((gift) => (
        <GiftItem
          key={gift.id}
          handleUpdate={handleUpdate}
          {...gift}
        />
      ))}
    </div>
  );
};