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

// ADD TASK FOR EMPLOYEES
export const TaskAddModal = ({ onClose }) => {
  return (
    <section>
      <div className="modal fade show" style={{ display: 'block' }} role="dialog" aria-labelledby="addtaskModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addtaskModalLabel">Add New Task</h5>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="taskForm">
                <input type="hidden" defaultValue="add" name="trans" className="form-control"/>
                <div className="form-group">
                  <label htmlFor="task">Task</label>
                  <textarea name="task" id="task" row="4" cols="50" placeholder="Write Task Here..." ></textarea>
                </div>
                {/* IF USER IS ADMIN ACCESS THIS */}
                <div className="form-group col">
                  <label htmlFor="user_id">Assign To</label>
                  <select name="user_id" id="user_id" className="form-control"></select>
                </div>
                {/* LIMIT HERE */}
                <div className="form-group col">
                  <label htmlFor="date">Date</label>
                  <input type="text" className="form-control" id="date" name="date" placeholder="YYYY-MM-DD" required/>
                </div>
                <button type="button" className="btn-add" name="add">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ADD ANNOUNCEMENT MODAL
export const AnnouncementAddModal = ({ onClose }) => {
  return (
    <section>
      <div className="modal fade show" id="announcementModal" style={{ display: 'block' }} role="dialog" aria-labelledby="announcementModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addtaskModalLabel">Add New Notice</h5>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="noticeForm">
                <input type="hidden" id="trans" name="trans" className="form-control" />
                <input type="hidden" id="update" name="announcement_id" className="form-control" />
                <div className="form-group col">
                  <label htmlFor="Title">Title</label>
                  <select name="title" id="title" className="form-control">
                    <option value="CARAVAN">CARAVAN</option>
                    <option value="BSP">BSP</option>
                    <option value="SEMINAR">SEMINAR</option>
                    <option value="MEETING">MEETING</option>
                    <option value="OTHERS">OTHERS</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea name="description" id="description" className="form-control" placeholder="Write Description here..." ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Due Date</label>
                  <input type="text" id="date" name="date" className="form-control" readOnly />
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

// ADD USER MODAL
export const UserAddModal = ({ onClose }) => {
  return (
    <section>
      <div className="modal fade show" id="userModal" style={{ display: 'block' }} role="dialog" aria-labelledby="userModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="adduserLabel">Add New User</h5>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="userForm">
                <input type="hidden" name="trans" defaultValue="add" className="form-control" />
                <div className="form-group col">
                  <label htmlFor="username">Name</label>
                  <input type="text" name="username" className="form-control" placeholder="Write username here..." />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="text" name="password" className="form-control" placeholder="Write password here..." />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select name="role" id="role" className="form-control">
                    <option value="Guest">Guest</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <button type="button" className="user-btn-add" name="add">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// EDIT USER MODAL
export const EditUserModal = ({ onClose }) => {
  return (
    <section>
      <div className="modal fade show" id="editUserModal" style={{ display: 'block' }} role="dialog" aria-labelledby="editUserModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editUserModalLabel">Edit User</h5>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="userForm">
                <input type="hidden" name="trans" defaultValue="update" className="form-control" />
                <input type="hidden" name="userId" id="userId" className="form-control" />
                <div className="form-group col">
                  <label htmlFor="edit_username">Name</label>
                  <input type="text" name="edit_username" id="edit_username" className="form-control" placeholder="Write username here..." />
                </div>
                <div className="form-group">
                  <label htmlFor="edit_role">Role</label>
                  <select name="edit_role" id="edit_role" className="form-control">
                    <option value="Guest">Guest</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <button type="button" className="user-btn-add" name="update">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// USER CONFIRM MODAL
export const ConfirmUserModal = ({ onClose }) => {
  return (
    <section>
      <div className="modal fade show" id="confirmDeleteModal" style={{ display: 'block' }} role="dialog" aria-labelledby="confirmDeleteModal" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmDeleteModalLabel">Delete User</h5>
              <button type="button" className="close" onClick={onClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <h5>Are you sure you want to delete this user?</h5>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>No</button>
              <button className="btn btn-danger" onClick={onClose}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
