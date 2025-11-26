import React, { useState, useEffect } from 'react';
// Untuk menghubungkan ke API, silakan mengaktifkan import axios berikut
// import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom';

// --- DATA DUMMY ---
const mockEvents = [
  {
    id: 1,
    event_name: "Webinar: Pengenalan Laravel 11",
    location: "Online (Zoom)",
    quota: 150,
  },
  {
    id: 2,
    event_name: "Workshop React Hooks Lanjut",
    location: "Gedung FTIK, Ruang 201",
    quota: 35,
  },
  {
    id: 3,
    event_name: "Seminar Karir Programmer",
    location: "Aula Utama",
    quota: 200,
  },
];

const API_BASE_URL = 'http://localhost:8000/api'; 

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  const fetchEvents = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      setEvents(mockEvents); 
      setLoading(false);
      setError(null); 

    } catch (err) {
      // Karena kita menggunakan data dummy, error ini seharusnya tidak pernah terpicu
      setError("Tidak bisa memuat data Event.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []); 

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus Event ini? ")) {
      
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedEvents = events.filter(event => event.id !== id);
      setEvents(updatedEvents);

      alert(`SIMULASI: Event ID ${id} berhasil dihapus secara lokal! (TO-DO: Hubungkan ke API DELETE)`);
      
    }
  };


  if (loading) return <div className="p-4 text-center">**MEMUAT DATA DUMMY...** (TO-DO: Ganti dengan panggilan API GET)</div>;
  if (error) return <div className="p-4 alert alert-danger">{error}</div>;

  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Daftar Event (Data Dummy)</h1>
          </div>
          <div className="col-sm-6 text-right">
            {/* Tombol yang mengarahkan ke halaman Create */}
            <Link to="/event/create" className="btn btn-primary">
              <i className="fas fa-plus mr-1"></i> Tambah Event
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th style={{width: '10px'}}>No</th>
                      <th>Nama Event</th>
                      <th>Lokasi</th>
                      <th>Kuota</th>
                      <th style={{width: '150px'}}>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event, index) => (
                      <tr key={event.id}>
                        <td>{index + 1}</td>
                        <td>{event.event_name}</td>
                        <td>{event.location}</td>
                        <td>{event.quota}</td>
                        <td>
                          {/* Tombol Edit */}
                          <Link to={`/event/edit/${event.id}`} className="btn btn-sm btn-warning mr-2">
                            <i className="fas fa-edit"></i> Edit
                          </Link>
                          {/* Tombol Delete */}
                          <button onClick={() => handleDelete(event.id)} className="btn btn-sm btn-danger">
                            <i className="fas fa-trash"></i> Hapus
                          </button>
                        </td>
                      </tr>
                    ))}
                    {events.length === 0 && (
                        <tr><td colSpan="5" className="text-center">Tidak ada data Event.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;