import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const API_BASE_URL = 'http://localhost:8000/api'; 

// TODO: HAPUS SEMUA MOCK DATA INI setelah API terhubung
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

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // --- FUNGSI 1: MENGAMBIL DATA EVENT (GET) ---
    const fetchEvents = async () => {
        // TODO: MULAI modifikasi DI SINI (1/2: Ganti logika fetch)
        
        // Hapus penundaan simulasi:
        await new Promise(resolve => setTimeout(resolve, 1000));

        try {
            // GANTI DENGAN AXIOS.GET ASLI:
            /*
            const response = await axios.get(`${API_BASE_URL}/event`);
            setEvents(response.data);
            */

            setEvents(mockEvents); 
            setError(null);
        
        } catch (err) {
            // Tangani error API sesungguhnya
            setError("Gagal memuat data Event dari API Laravel.");
        } finally {
            setLoading(false);
        }
        
        // TODO:  1/2: Logika fetch diganti
    };

    useEffect(() => {
        fetchEvents();
    }, []); 

    // --- FUNGSI 2: MENGHAPUS DATA EVENT (DELETE) ---
    const handleDelete = async (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus Event ini? (Simulasi Mode)")) {
            
            // TODO:  MULAI MODIFIKASI DI SINI (2/2: Ganti logika delete)
            
            // Hapus penundaan simulasi:
            await new Promise(resolve => setTimeout(resolve, 500));
            
            try {
                // GANTI DENGAN AXIOS.DELETE ASLI:
                /*
                await axios.delete(`${API_BASE_URL}/event/delete/${id}`); 
                alert("Event berhasil dihapus!");
                fetchEvents(); // Panggil ulang fetch untuk refresh data
                */

                // KODE MOCK:
                const updatedEvents = events.filter(event => event.id !== id);
                setEvents(updatedEvents);
                alert(`SIMULASI BERHASIL: Event ID ${id} dihapus secara lokal!`);
            
            } catch (err) {
                // Tangani error API sesungguhnya
                console.error("Gagal menghapus Event:", err);
                alert("Gagal menghapus Event. Cek console untuk detail.");
            }
            
            // TODO: MAHASISWA SELESAI KERJA DI SINI (2/2: Logika delete diganti)
        }
    };


    if (loading) return <div className="p-4 text-center">**SIMULASI MEMUAT DATA...** (Tugas: Ganti dengan panggilan API GET)</div>;
    if (error) return <div className="p-4 alert alert-danger">{error}</div>;

    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">Daftar Event (SIMULASI DATA)</h1>
                    </div>
                    <div className="col-sm-6 text-right">
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
                                                    <Link to={`/event/edit/${event.id}`} className="btn btn-sm btn-warning mr-2">
                                                        <i className="fas fa-edit"></i> Edit
                                                    </Link>
                                                    <button onClick={() => handleDelete(event.id)} className="btn btn-sm btn-danger">
                                                        <i className="fas fa-trash"></i> Hapus
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        {events.length === 0 && (
                                            <tr><td colSpan="5" className="text-center">Tidak ada data Event (Simulasi Kosong).</td></tr>
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
