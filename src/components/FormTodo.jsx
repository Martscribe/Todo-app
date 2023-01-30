import React, {useState} from "react";

const FormTodo = props => {
  const [description, setDescription] = useState("");

  const {addItem} = props;

  const handleSubmit = e => {
    e.preventDefault();
    //previene la actualizacion de la pagina con el submit del formulario que es su comportamiento por default
    
    addItem({
      done: false,
      id: (+new Date()).toString(),
      description
      //nos manda el estado de la tarea si esta hecho o no, identificador y la descripcion, nos genera un nombre unico para cada tarea
    });
    setDescription("");
    //nos transforma a valor vacio el input
  }


  return (
    <form onSubmit={handleSubmit}>
        <div className="todo-list">
          <div className="file-input">
            <input 
              type="text" 
              className="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              //cuando se mande hacemos un handle submit y nos manda el valor del input
            />
            <button 
            className="button pink" 
            disabled = {description ? "": "disabled"}>
              Agregar tarea
            </button>
          </div>
        </div>
    </form>
  );
};

export default FormTodo;