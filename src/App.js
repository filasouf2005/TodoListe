import './App.css';
import TodoList from './components/TodoList';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import { TodosContext } from './contexts/todosContext';
import {v4 as uuidv4} from 'uuid';
import { useState,React } from 'react';

const theme = createTheme({
  typography: {
    fontFamily: 'CustomFont',
  },
  palette: {
    primary: {
      main: '#ff5722',
    },
    secondary: {
      main: '#dc004e',
    },
  },
 
  direction: 'rtl', // Set the direction to right-to-left
});
function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title : 'مهمة 1',
      description: 'وصف المهمة 1',
      isCompleted: false  
    },
    {
      id: uuidv4(),
      title : 'مهمة 2',
      description: 'وصف المهمة 2',
      isCompleted: false  
    },
   
  ]
  );
  return (
    <ThemeProvider theme={theme}>
        <div className="App" style={{ direction: 'rtl', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor: '#191b1f' }}>
      <TodosContext.Provider value={{ todos :todos, setTodos :setTodos }}>
        <TodoList />
      </TodosContext.Provider>
    </div>  
    </ThemeProvider>
  
  );
}

export default App;
