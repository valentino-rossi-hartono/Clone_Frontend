import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams, useNavigate, Link } from 'react-router-dom';

const API_BASE_BASE = 'http://localhost:8000/api'; 

// --- DATA DUMMY (Hapus setelah API terhubung) ---
const mockEventData = {
    1: { id: 1, event_name: "Webinar: Pengenalan Laravel 11", location: "Online (Zoom)", quota: 150 },
    2: { id: 2, event_name: "Workshop React Hooks Lanjut", location: "Gedung FTIK, Ruang 201", quota: 35 },
    3: { id: 3, event_name: "Seminar Karir Programmer", location: "Aula Utama", quota: 200 },
};
const EventEdit = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        event_name: '', 
        location: '', 
        quota: '', 
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // --- Langkah 1: Fetch Data Event (Simulasi GET) ---
    useEffect(() => {
        const fetchEventData = async () => {
            // TODO: MULAI MODIFIKASI DI SINI (1/2: Ganti logika fetch)
            
            // Hapus penundaan simulasi:
            await new Promise(resolve => setTimeout(resolve, 1000));

            try {
                // GANTI DENGAN AXIOS.GET ASLI:
                /*
                const eventId = parseInt(id);
                const data = mockEventData[eventId];

                if (data) {
                    setFormData(data);
                    setError(null);
                } else {
                    setError("Data event dengan ID tersebut tidak ditemukan.");
                }
                */
                // GANTI DENGAN: const response = await axios.get(`${API_BASE_BASE}/event/${id}`);
                // GANTI DENGAN: setFormData(response.data);
                
                // KODE MOCK:
                const eventId = parseInt(id);
                const data = mockEventData[eventId];

                if (data) {
                    setFormData(data);
                    setError(null);
                } else {
                    setError("Data event dengan ID tersebut tidak ditemukan.");
                }
                
                // SELESAI TO-DO DI SINI (1/2: Logika fetch diganti)
                
                setLoading(false);

            } catch (err) {
                setError("Terjadi kesalahan saat memuat data.");
                setLoading(false);
            }
        };
        fetchEventData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true); 

        // TODO: MULAI MODIFIKASI DI SINI (2/2: Ganti logika submit)

        await new Promise(resolve => setTimeout(resolve, 1000));
        
        try {
            // GANTI DENGAN AXIOS.POST/PUT ASLI:
            /*
            await axios.post(`${API_BASE_BASE}/event/update/${id}`, formData); 
            */
            
            // KODE MOCK:
            console.log(`Data Event ID ${id} diperbarui dengan`, formData);
            alert(`Event ID ${id} berhasil diperbarui! (TO-DO: Hubungkan ke API POST/PUT)`);
            
            // TODO:SELESAI TO-DO DI SINI (2/2: Logika submit diganti)

            setLoading(false); 
            navigate('/event'); 

        } catch (err) {
            const mockError = "Tidak dapat memproses pembaruan.";
            setError(mockError);
            setLoading(false);
        }
    };

    if (loading) return <div className="p-4 text-center">MEMUAT DATA EVENT(TO-DO:  Ganti dengan panggilan API GET)</div>;
    if (error) return <div className="p-4 alert alert-danger">{error}</div>;

    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0">Edit Event: {formData.event_name}</h1> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card card-warning">
                            <div className="card-header"><h3 className="card-title">Form Edit</h3></div>
                            
                            <form onSubmit={handleSubmit}>
                                <div className="card-body">
                                    {/* Field Nama Event */}
                                    <div className="form-group">
                                        <label htmlFor="event_name">Nama Event</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="event_name"
                                            name="event_name" 
                                            value={formData.event_name || ''}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Field Lokasi */}
                                    <div className="form-group">
                                        <label htmlFor="location">Lokasi Event</label>
                                        <input
                                            type="text" 
                                            className="form-control"
                                            id="location"
                                            name="location" 
                                            value={formData.location || ''}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    
                                    {/* Field Kuota */}
                                    <div className="form-group">
                                        <label htmlFor="quota">Kuota Tiket</label>
                                        <input
                                            type="number" 
                                            className="form-control"
                                            id="quota"
                                            name="quota" 
                                            value={formData.quota || ''}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    
                                </div>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-warning" disabled={loading}>
                                        {loading ? 'Memproses...' : 'Perbarui Event'}
                                    </button>
                                    <Link to="/event" className="btn btn-secondary ml-2">Batal</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventEdit;
