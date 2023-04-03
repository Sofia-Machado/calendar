import { useState } from 'react';
import './App.css';
import ListTodo from './components/ListTodo';
import ReactCalendar from './components/ReactCalendar';

/* https://jquense.github.io/react-big-calendar/examples/index.html?path=/docs/addons-drag-and-drop--example-3 */

function App() {

  const [draggedEvent, setDraggedEvent] = useState('');

  return (
    <div className='app'>
      <ListTodo setDraggedEvent={setDraggedEvent} />
      <ReactCalendar draggedEvent={draggedEvent} setDraggedEvent={setDraggedEvent} />
    </div>
  );
}

export default App;
