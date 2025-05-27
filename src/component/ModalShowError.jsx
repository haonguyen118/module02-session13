import React from "react";

export default function ModalShowError({ handleCancel }) {
  return (
    <div>
      <div className="overlay">
        <div className="modal-custom">
          <div className="modal-header-custom">
            <h5>Cảnh báo</h5>
            <i className="fas fa-xmark" onClick={handleCancel} />
          </div>
          <div className="modal-body-custom">
            <p>Tên công việc không được phép để trống.</p>
          </div>
          <div className="modal-footer-footer">
            <button className="btn btn-light" onClick={handleCancel}>
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
