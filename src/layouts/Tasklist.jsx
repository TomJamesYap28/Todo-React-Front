import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { TaskAddModal } from '../assets/hooks/Modals.jsx';

const columns = [
  {
    name: '#',
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: 'Tasks',
    selector: (row) => row.task,
    sortable: true,
  },
  {
    name: 'Assigned To',
    selector: (row) => row.assignedTo,
    sortable: true,
  },
  {
    name: 'Status',
    cell: (row) => (
      <span className={`status-badge ${row.status.toLowerCase()}`}>
        {row.status}
      </span>
    ),
    sortable: true,
  },
  {
    name: 'Due To',
    selector: (row) => row.dueTo,
    sortable: true,
  },
  {
    name: 'Actions',
    cell: (row) => (
      <div>
        <button>Edit</button> | <button>Delete</button>
      </div>
    ),
  },
];

const data = [
  {
    id: 1,
    task: 'Fix Printer',
    assignedTo: 'John Doe',
    status: 'Overdue',
    dueTo: '2024-09-20',
  },
];

const Tasklist = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setShowModal(false);
  };
  return (
    <section className="home" id="contentSection">
      <div className="container mt-5">
        <div className="col-12 text-end mb-3 mt-3">
          <button type="button" className="btn-add mr-2" onClick={handleOpenModal}>Add Task</button>
        </div>
        <div className="table-responsive">
          <DataTable
            columns={columns}
            data={data}
            pagination
            highlightOnHover
          />
        </div>
      </div>
      {showModal && <TaskAddModal onClose={handleCloseModal} />}
    </section>
  );
};

export default Tasklist;
