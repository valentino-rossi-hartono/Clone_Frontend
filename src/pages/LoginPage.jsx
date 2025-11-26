import React, { useState } from 'react';
import axios from 'axios'; // Import digunakan di fungsi handleSubmit
import { useNavigate, Link } from 'react-router-dom'; 

const API_LOGIN_URL = 'http://localhost:8000/api/login'; 

const LoginPage = () => {
    const [formData, setFormData] = useState({ 
        email: '', 
        password: '' 
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

        // =========================================================
        // === TO-DO: yang harus dibuat mulai dari sini ===
        // =========================================================

        await new Promise(resolve => setTimeout(resolve, 1000)); 

        // Silakan menghapus command ini dan menggantinya dengan panggilan axios.post ke API_LOGIN_URL
        if (formData.email === 'user@example.com' && formData.password === 'password') {
            
            alert("Login Berhasil! (Email: user@example.com, Pass: password)");
            navigate('/dashboard'); 
            
        } else {
            setError("Email atau Password salah.");
        }
        
        // =========================================================
        // === Batas TO-DO ===
        // =========================================================
        
        setIsSubmitting(false);
    };

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="#" className="h1"><b>Event</b>Gacor</a>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        
                        <form onSubmit={handleSubmit}>
                            {error && <div className="alert alert-danger">{error}</div>}

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
                            
                            <div className="row">
                                <div className="col-12">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary btn-block"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Simulasi Loading...' : 'Sign In'}
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Link ke Register Page */}
                        <p className="mb-0 mt-3">
                            <Link to="/register" className="text-center">
                                Register a new membership
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;