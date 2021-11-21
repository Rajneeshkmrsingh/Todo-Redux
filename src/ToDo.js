import React,{ useState } from "react";
import {AddItem,DelItem,RemoveAll} from "./action/index";
import { useDispatch,useSelector } from "react-redux";




const ToDo = () => {
  const [getChange, setChange] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state)=> state.todoReducer.list)
  
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <h1>ToDo List</h1>
          <div className="input-div">
            <input
              type="text"
              placeholder=" Enter your tasks here...✍"
              onChange={(event) => {
                return setChange(event.target.value);
              }}
              value={getChange}
            />
            <button onClick = {()=> dispatch(AddItem(getChange),setChange(""))}>
              +
            </button>
          </div>
          <ul className="record">
          {
            list.map((elem)=>{
              return (
                <>
                <li className="list_item" key={elem.id}>
                    <p className="content">{elem.data}</p>
                    <i className="delete_btn fas fa-trash" onClick={()=>dispatch(DelItem(elem.id))}></i>
                  </li> 
                </>
              )
            })
          }
          </ul>
          <button onClick = {()=>dispatch(RemoveAll())} className="clear_all">Clear All</button>
        </div>
      </div>
    </>
  );
};
export default ToDo;
