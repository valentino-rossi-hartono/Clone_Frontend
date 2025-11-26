import React from 'react';
import EventForm from '../components/EventForm'; 
import { useNavigate } from 'react-router-dom';

const EventCreate = () => {
    const navigate = useNavigate();

    const handleCreationSuccess = () => {
        navigate('/event'); 
    };

    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">Tambah Event Baru</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">                     
                        <EventForm onEventCreated={handleCreationSuccess} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCreate;