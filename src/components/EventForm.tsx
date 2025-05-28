import React, { useState } from 'react';


interface EventFormProps {
  onSubmit: (event: { title: string; date: string }) => void;
  initialData?: { title: string; date: string } | null; // Изменено на | null
}


const EventForm: React.FC<EventFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || '');
  const [date, setDate] = useState(initialData?.date || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && date) {
      onSubmit({ title, date });
      setTitle('');
      setDate('');
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название мероприятия"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default EventForm;