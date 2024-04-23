import React, { useState } from "react";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo,} from "../actions/index";



const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();



  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption> Add Your list Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder="write here.."
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            ></input>
            <i
              className="fa-solid fa-plus fa-2xl"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></i>
          </div>

          

          <div className="showItems">
            {list.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <div className="todo-btn">
                  <i className="far fa-trash-alt add-btn fa-xl"
                    title="Delete Item"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  ></i>
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
    
  );

  
};




export default Todo;
