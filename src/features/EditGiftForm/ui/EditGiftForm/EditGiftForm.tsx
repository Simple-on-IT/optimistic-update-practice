import React, { useState } from 'react';
import styles from './EditGiftForm.module.css';

interface EditGiftFormProps {
  initialName: string;
  initialDescription: string;
  onSubmit: (name: string, description: string) => void;
}

export const EditGiftForm: React.FC<EditGiftFormProps> = ({ initialName, initialDescription, onSubmit }) => {
  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, description);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.editForm}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Gift Name"
        data-testid={`nameInput`}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Gift Description"
        data-testid={`descriptionArea`}
      />
      <button type="submit" data-testid='saveButton'>Save</button>
    </form>
  );
};