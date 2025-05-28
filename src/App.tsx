import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';

interface Event {
    id: number;
    title: string;
    date: string;
}

const App: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [editEvent, setEditEvent] = useState<Event | null>(null);
    const [nextId, setNextId] = useState(1);

    const handleAddOrEditEvent = (event: { title: string; date: string }, isEdit: boolean) => {
        if (isEdit && editEvent) {
            setEvents(events.map(e => (e.id === editEvent.id ? { ...e, ...event } : e)));
            setEditEvent(null);
        } else {
            setEvents([...events, { id: nextId, ...event }]);
            setNextId(nextId + 1);
        }
    };

    const handleDeleteEvent = (id: number) => {
        setEvents(events.filter(e => e.id !== id));
    };

    const handleEditEvent = (event: Event) => {
        setEditEvent(event);
    };

    return (
        <div>
            <h1>Список мероприятий</h1>
            <EventForm onSubmit={handleAddOrEditEvent} existingEvent={editEvent} />
            <EventList events={events} onDelete={handleDeleteEvent} onEdit={handleEditEvent} />
        </div>
    );
};

export default App;
