import './App.css';
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div className="to-do">
      <TodoList></TodoList>
      <Helmet>
    <meta charSet="utf-8" />
    <title>To-Do App</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <meta name="description" content="To-do" />
   </Helmet>
    </div>
  );
}

export default App;
