import React from "react";
import { taskCheck, taskFindAll } from "../redux/api/services/taskService";
import { useDispatch } from "react-redux";

export default function TodoItem({ item, handleConfirmDelete, handleEdit }) {
  const dispatch = useDispatch();
  const handleTaskCheck = async (id, oldStatus) => {
    await taskCheck(id, oldStatus).then(() => dispatch(taskFindAll()));
  };
  return (
    <>
      <li
        key={item.id}
        className="list-group-item d-flex align-items-center justify-content-between border-0 mb-2 rounded"
        style={{ backgroundColor: "#f4f6f7" }}
      >
        <div>
          <input
            className="form-check-input me-2"
            type="checkbox"
            checked={item.complete}
            onClick={() => handleTaskCheck(item.id, item.complete)}
          />
          <span>{item.complete ? <s>{item.taskName}</s> : item.taskName}</span>
        </div>
        <div className="d-flex gap-3">
          <i
            className="fas fa-pen-to-square text-warning"
            onClick={() => handleEdit(item.id)}
          />
          <i
            className="far fa-trash-can text-danger"
            onClick={() => handleConfirmDelete(item.id)}
          />
        </div>
      </li>
    </>
  );
}
