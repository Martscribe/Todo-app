import React, {useState} from 'react';
import FormTodo from './FormTodo.jsx';
import TaskList from './TaskList.jsx';

const Container = () => {
  const [list, setList] = useState([]);
  //useState nos permite crear un estado para nuestro componente lo que significa que podemos almacenar informacion en el componente y que cuando esta informacion cambie, el componente se actualizara

  const addItem = addItem => {
    setList([...list, addItem]);
  };
  //additem es una funcion que recibe un objeto y lo agrega al arreglo list
  return (
    <div>      
      <FormTodo addItem={addItem}/>
      <TaskList list={list} setList={setList}/>
    </div>
  );
};

export default Container;