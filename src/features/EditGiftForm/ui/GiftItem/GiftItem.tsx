import React, { useState } from 'react';
import styles from './GiftItem.module.css';
import { EditGiftForm } from '../EditGiftForm/EditGiftForm';

interface GiftProps {
  id: number;
  name: string;
  description: string;
  handleUpdate: ({ id, name, description }: { id: number, name: string, description: string }) => void;
}

export const GiftItem: React.FC<GiftProps> = ({ id, name, description, handleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSubmit = async (updatedName: string, updatedDescription: string) => {
    setIsEditing(false);
    await handleUpdate({ id, name: updatedName, description: updatedDescription });
  };

  return (
    <div className={styles.giftItem} data-testid={`GiftItem_${id}`}>
      {isEditing ? (
        <EditGiftForm
          initialName={name}
          initialDescription={description}
          onSubmit={onSubmit}
        />
      ) : (
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <button data-testid='editButton' onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};