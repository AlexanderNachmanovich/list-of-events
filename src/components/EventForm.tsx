import React, { useState } from 'react';

interface EventFormProps {
    onSubmit: (event: { title: string; date: string }, isEdit?: boolean) => void;
    existingEvent?: { title: string; date: string };
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, existingEvent }) => {
    const [title, setTitle] = useState(existingEvent?.title || '');
    const [date, setDate] = useState(existingEvent?.date || '');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && date) {
            onSubmit({ title, date }, !!existingEvent);
            setTitle('');
            setDate('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Название мероприятия"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button type="submit">{existingEvent ? 'Редактировать' : 'Добавить'}</button>
        </form>
    );
};

export default EventForm;
