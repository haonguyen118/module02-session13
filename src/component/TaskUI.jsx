// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";

import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import { useState } from "react";
import { useSelector } from "react-redux";

function TaskUI() {
  const [edit, setEdit] = useState(null);
  const { tasks } = useSelector((state) => state.tasks);
  const handleEdit = (id) => {
    setEdit(tasks.find((e) => e.id === id));
  };

  return (
    <>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <FormTodo edit={edit} setEdit={setEdit} />
                  <TodoList handleEdit={handleEdit} />

                  {/* Tabs navs */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TaskUI;
