import React from 'react';

// ADD EVENT MODAL CALENDAR
export const CalendarAddModal = ({ selectedDate, onClose }) => {
  return (
    <section>
      <div className="modal fade show" style={{ display: 'block' }} role="dialog" aria-labelledby="addtaskModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addtaskModalLabel">Caravan or BSP</h5>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="taskForm">
                <input type="hidden" defaultValue="add" name="trans" className="form-control"/>
                <div className="form-group">
                  <label htmlFor="date">Selected Date</label>
                  <input type="text" id="date" name="date" className="form-control" value={selectedDate} readOnly />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <select name="title" id="title" className="form-control">
                    <option value="CARAVAN">CARAVAN</option>
                    <option value="BSP">BSP</option>
                    <option value="REMINDER">REMINDER</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea name="description" id="description" className="form-control" placeholder="Write Description here..." ></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-add" name="add">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// EDIT EVENT MODAL CALENDAR
export const CalendarEditModal = () => {
  return (
    <section>
      <div className="modal fade" id="editTaskModal" tabIndex="-1" role="dialog" aria-labelledby="editTaskModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editTaskModalLabel">Edit Event</h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="editTaskForm">
                <input type="hidden" id="editEventId" name="reminder_id"/>
                <div className="form-group">
                  <label htmlFor="editDate">Select Date</label>
                  <input type="text" id="editDate" name="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="editTitle">Title</label>
                  <select name="title" id="editTitle">
                    <option value="CARAVAN">CARAVAN</option>
                    <option value="BSP">BSP</option>
                    <option value="REMINDER">REMINDER</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="editDescription">Description</label>
                  <textarea name="description" id="editDescription" className="form-control" placeholder="Write Description here..." ></textarea>
                </div>
                <button type="button" className="btn btn-primary btn-add" name="edit">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}