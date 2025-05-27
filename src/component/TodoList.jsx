import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { taskFindAll } from "../redux/api/services/taskService";
import ModalConfirmDelete from "./ModalConfirmDelete";

export default function TodoList({ handleEdit }) {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [tabActive, setTabActive] = useState("all");
  const [filterTask, setFilterTask] = useState([]);

  const [currentId, setCurrentId] = useState(null);
  const handleConfirmDelete = (id) => {
    setCurrentId(id);
  };
  const handleCancle = () => setCurrentId(null);

  useEffect(() => {
    if (tasks) {
      if (tabActive === "all") {
        setFilterTask(tasks);
      } else if (tabActive === "completed") {
        setFilterTask(tasks.filter((item) => item.complete));
      } else {
        setFilterTask(tasks.filter((item) => !item.complete));
      }
    }
    dispatch(taskFindAll());
  }, [tabActive, tasks]);
  return (
    <div>
      <ul className="nav nav-tabs mb-4 pb-2">
        <li
          className="nav-item"
          role="presentation"
          onClick={() => setTabActive("all")}
        >
          <a className={`nav-link ${tabActive === "all" && "active"}`}>
            Tất cả
          </a>
        </li>
        <li
          className="nav-item"
          role="presentation"
          onClick={() => setTabActive("completed")}
        >
          <a className={`nav-link ${tabActive === "completed" && "active"}`}>
            Đã hoàn thành
          </a>
        </li>
        <li
          className="nav-item"
          role="presentation"
          onClick={() => setTabActive("unfinished")}
        >
          <a className={`nav-link ${tabActive === "unfinished" && "active"}`}>
            Chưa hoàn thành
          </a>
        </li>
      </ul>
      {/* Tabs navs */}
      {/* Tabs content */}
      <div className="tab-content" id="ex1-content">
        <div className="tab-pane fade show active">
          <ul className="list-group mb-0">
            {filterTask &&
              filterTask.map((item) => (
                <TodoItem
                  item={item}
                  handleConfirmDelete={handleConfirmDelete}
                  handleEdit={handleEdit}
                />
              ))}
          </ul>
        </div>
      </div>
      {currentId && (
        <ModalConfirmDelete handleCancle={handleCancle} currentId={currentId} />
      )}
    </div>
  );
}
