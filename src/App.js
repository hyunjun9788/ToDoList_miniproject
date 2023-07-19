import './App.css';
import TodoList from "./components/TodoList";


function App() {
    return (
        <div className='box'>
            <div className='container'>
                <div className='header'>Todo List</div>
                <TodoList />
            </div>
        </div>
    );
}

export default App;
