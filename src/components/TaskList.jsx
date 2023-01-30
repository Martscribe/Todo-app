import React from "react";
import Checkbox from "./checkbox";

const TaskList = props => {
  const {list, setList} = props;

  const onChangeStatus = e => {
    const {name, checked} = e.target;
    const updatedList = list.map(item => ({
      ...item,
      done: item.id === name ? checked : item.done
  }));
    setList(updatedList);
  }
  //Cuando actualiza el dato, se actualiza el estado de la lista

  const onClickRemoveItem = e => {
    const updateList = list.filter(item => !item.done)
    setList(updateList);
  }
  //elimina las tareas que no estan hechas

  const checkbox = list.map(item =>(
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ))
 //.map nos permite procesar/iterar un arreglo y devolver un nuevo arreglo con los elementos procesados.
  
 return (
    <div className="todo-list">
        {list.length ? checkbox : "No hay tarea"}
        {list.length ? (
          <p>
          <button className="button pink" onClick={onClickRemoveItem}>Delete</button>
          </p>
        ) : null}
    </div>
  );
}

export default TaskList;