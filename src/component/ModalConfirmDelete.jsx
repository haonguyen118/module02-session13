import React from "react";
import { taskDelete, taskFindAll } from "../redux/api/services/taskService";
import { useDispatch } from "react-redux";

export default function ModalConfirmDelete({ handleCancle, currentId }) {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await taskDelete(currentId).then(() => {
      dispatch(taskFindAll);
      handleCancle();
    });
  };
  return (
    <div>
      <div className="overlay">
        <div className="modal-custom">
          <div className="modal-header-custom">
            <h5>Xác nhận</h5>
            <i className="fas fa-xmark" onClick={handleCancle} />
          </div>
          <div className="modal-body-custom">
            <p>Bạn chắc chắn muốn xóa công việc quét nhà?</p>
          </div>
          <div className="modal-footer-footer">
            <button className="btn btn-light" onClick={handleCancle}>
              Hủy
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(currentId)}
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
