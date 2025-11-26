// src/components/EventForm.jsx

import React, { useState } from 'react';
import axios from 'axios'; // Import ini tetap ada sebagai petunjuk bagi mahasiswa

const API_BASE_URL = 'http://localhost:8000/api'; 

const EventForm = ({ onEventCreated }) => {
    const [formData, setFormData] = useState({
        event_name: '', 
        location: '', 
        quota: '', 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // =========================================================
        // === TO-DO : SILAKAN DIMODIFIKASI MULAI DARI SINI ===
        // =========================================================

        await new Promise(resolve => setTimeout(resolve, 1500)); 

        try {
            console.log("Mencoba menyimpan Event dengan data:", formData);
            const mockResponse = { data: { id: 99, ...formData } }; 

            alert(`BERHASIL: Event telah dibuat!`);
            
            setFormData({ event_name: '', location: '', quota: '' });
            
            if (onEventCreated) {
                onEventCreated(mockResponse.data);
            }

        } catch (err) {
            // Ini tidak akan terpicu, hanya sebagai template error
            const mockError = "Server Mock menolak permintaan.";
            setError(`Gagal menyimpan event: ${mockError}`);
        } finally {
            setIsSubmitting(false);
        }
        
        // =========================================================
        // === BATAS TO-DO ===
        // =========================================================
    };

    return (
        <div className="card card-primary">
            <div className="card-header"><h3 className="card-title">Buat Event Baru (SIMULASI MODE)</h3></div>
            <form onSubmit={handleSubmit}>
                <div className="card-body">
                    
                    {error && <div className="alert alert-danger">{error}</div>}

                    {/* Input Nama Event */}
                    <div className="form-group">
                        <label htmlFor="event_name">Nama Event</label>
                        <input
                            type="text"
                            className="form-control"
                            id="event_name"
                            name="event_name"
                            value={formData.event_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Input Lokasi Event */}
                    <div className="form-group">
                        <label htmlFor="location">Lokasi Event</label>
                        <input
                            type="text"
                            className="form-control"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Input Kuota */}
                    <div className="form-group">
                        <label htmlFor="quota">Kuota Tiket</label>
                        <input
                            type="number"
                            className="form-control"
                            id="quota"
                            name="quota"
                            value={formData.quota}
                            onChange={handleChange}
                            required
                        />
                    </div>

                </div>
                <div className="card-footer">
                    <button 
                        type="submit" 
                        className="btn btn-primary" 
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Simulasi Menyimpan...' : 'Simulasi Simpan Event'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EventForm;