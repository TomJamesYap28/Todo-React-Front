import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { AnnouncementAddModal } from '../assets/hooks/Modals.jsx';

const columns = [
  {
    name: '#',
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: 'Title',
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: 'Date',
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: 'Description',
    selector: (row) => row.description,
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
    title: 'Caravan',
    date: '2024-09-20',
    description: 'Caravan Is Here',
    
  },
  {
    id: 2,
    title: 'Pasko Fiesta',
    date: '2024-09-21',
    description: 'Pasko Fiesta is Here',
    
  },
];

const Announcement = () => {
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
            {showModal && <AnnouncementAddModal onClose={handleCloseModal} />}
        </section>
    );
};

export default Announcement;
