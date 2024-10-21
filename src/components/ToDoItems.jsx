import "./style.css"
import { useState } from 'react';

function ToDoItems(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(props.seperateTask.task);
    const [ischecked, setIsChecked] = useState(false);
    function handleCheck() {
        setIsChecked(!ischecked)
    }

    function handleEdit() {
        props.onEditTask(editValue);
        setIsEditing(false);
    }

    return (
        <div >
            <div className="checkbox-edit-div">

                {ischecked ? (
                    <div>
                        <span>✔️</span>
                        <span onClick={handleCheck} className="checkbox">↩️</span>
                    </div>
                ) : (
                    <input className="checkbox"
                        type="checkbox"
                        onChange={handleCheck}
                    />)
                }

                {isEditing ? (
                    <>
                        <input className="edit-input "
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                        />
                        <button onClick={handleEdit} className="save-btn"> ✔️ Save</button>
                    </>
                ) : (
                    <p className="task-field">{props.seperateTask.task}</p>
                )
                }

            </div>

            <div className="edit-delete-btn">

                <button onClick={() => setIsEditing(true)} className="edit-btn">
                    <img src="./src/utils/edit.png" width="20x" height="15px" ></img> Edit
                </button>

                <button onClick={props.onDeleteTask} className="delete-btn">
                    <img src="./src/utils/delete.png" width="15x" height="15px" ></img> Delete
                </button>
            </div>
        </div>
    );
}

export default ToDoItems;
