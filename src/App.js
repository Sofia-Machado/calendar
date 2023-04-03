import './App.css';
import ListTodo from './components/ListTodo';
import ReactCalendar from './components/ReactCalendar';

/* https://jquense.github.io/react-big-calendar/examples/index.html?path=/docs/addons-drag-and-drop--example-3 */

function App() {
  return (
    <>
      <ListTodo />
      <ReactCalendar />
    </>
  );
}

export default App;
