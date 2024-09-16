import React, { useState } from 'react';
import { UserAddModal, EditUserModal, ConfirmUserModal } from '../assets/hooks/Modals.jsx';

const Users = () => {
    const [showAddUserModal, setShowAddUserModal] = useState(false);
    const [showEditUserModal, setShowEditUserModal] = useState(false);
    const [showConfirmUserModal, setShowConfirmUserModal] = useState(false);
  
    // Functions to open/close modals
    const openAddUserModal = () => setShowAddUserModal(true);
    const closeAddUserModal = () => setShowAddUserModal(false);
  
    const openEditUserModal = () => setShowEditUserModal(true);
    const closeEditUserModal = () => setShowEditUserModal(false);
  
    const openConfirmUserModal = () => setShowConfirmUserModal(true);
    const closeConfirmUserModal = () => setShowConfirmUserModal(false);

    return(
        <section className="home" id="contentSection">
            <div className="row align-items-center mb-3 mt-3">
                <div className="col">
                    <input type="text" id="searchInput" className="form-control search-field" placeholder="search users..."/>
                </div>
                <div className="col-auto">
                    <button type="button" className="user-btn-add" onClick={openAddUserModal}>Add User</button>
                </div>
            </div>
            <div className="row" id="userContainer" style={{maxHeight: "640px",overflowY: "auto"}}>
                <div className="user-card">
                    <div className="user-card-body">
                        <div className="user-avatar">
                            <i className="bx bxs-user-circle user-circle"></i>
                        </div>
                        <div className="user-info">
                            <h5>Username</h5>
                            <p>GUEST</p>
                        </div>
                        <div className="user-action">
                            <button type="button" className="user-btn-edit" onClick={openEditUserModal}><i className="bx-bx-edit"></i>Edit</button>
                            <a href="#" className="user-btn-remove"  onClick={openConfirmUserModal}><i className="bx bx-trash"></i>Remove</a>
                        </div>
                    </div>
                </div>
            </div>
            {showAddUserModal && <UserAddModal onClose={closeAddUserModal} />}
            {showEditUserModal && <EditUserModal onClose={closeEditUserModal} />}
            {showConfirmUserModal && <ConfirmUserModal onClose={closeConfirmUserModal} />}
        </section>
    );
}

export default Users