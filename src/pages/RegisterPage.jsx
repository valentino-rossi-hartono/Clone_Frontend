import React, { useState } from 'react';
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom';

const API_REGISTER_URL = 'http://localhost:8000/api/register'; 

const RegisterPage = () => {
    const [formData, setFormData] = useState({ 
        name: '',
        email: '', 
        password: '',
        password_confirmation: '' 
    });
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        if (formData.password !== formData.password_confirmation) {
            setError("Password dan Konfirmasi Password tidak cocok.");
            setIsSubmitting(false);
            return;
        }

        // =========================================================
        // === TO-DO: yang harus dibuat mulai dari sini ===
        // =========================================================

        // Silakan harus menghapus baris ini kalau sudah terhubung ke API
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        try {
            // Silakan menghapus blok try/catch ini dan menggantinya dengan panggilan axios.post
            
            console.log("Registrasi Data:", formData);
            
            alert("Registrasi Berhasil! (TO-DO: Hubungkan ke API)");
            
            navigate('/login'); 

        } catch (err) {
            setError("Simulasi Gagal: Terjadi kesalahan saat registrasi. (Ini hanya pesan mock error)");
        } finally {
            setIsSubmitting(false);
        }
        
        // =========================================================
        // === Batas TO-DO ===
        // =========================================================
    };

    return (
        <div className="hold-transition register-page">
            <div className="register-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="#" className="h1"><b>Event</b>Gacor</a>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Register new account</p>
                        
                        <form onSubmit={handleSubmit}>
                            {error && <div className="alert alert-danger">{error}</div>}

                            {/* Input Nama */}
                            <div className="input-group mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Full name" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="input-group-append"><div className="input-group-text"><span className="fas fa-user"></span></div></div>
                            </div>

                            {/* Input Email */}
                            <div className="input-group mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="input-group-append"><div className="input-group-text"><span className="fas fa-envelope"></span></div></div>
                            </div>
                            
                            {/* Input Password */}
                            <div className="input-group mb-3">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="input-group-append"><div className="input-group-text"><span className="fas fa-lock"></span></div></div>
                            </div>
                            
                            {/* Input Konfirmasi Password */}
                            <div className="input-group mb-3">
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Retype password"
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="input-group-append"><div className="input-group-text"><span className="fas fa-lock"></span></div></div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary btn-block"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Simulasi Loading...' : 'Register'}
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Link untuk kembali ke halaman Login */}
                        <p className="mb-0 mt-3">
                            <Link to="/login" className="text-center">
                                Login?
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;