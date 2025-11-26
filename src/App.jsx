// src/App.jsx

import React, { useEffect } from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; 
import axios from 'axios'; // 🔥 Import axios
import LayoutWrapper from './components/LayoutWrapper'; 

// Import Halaman
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage.jsx';
import EventList from './pages/EventList';
import EventCreate from './pages/EventCreate';
import EventEdit from './pages/EventEdit';


function App() {
    // 🔥 PERBAIKAN PERSISTENSI TOKEN & LAYOUT 🔥
    useEffect(() => {
        // 1. Perbaikan Layout AdminLTE
        document.body.className = 'hold-transition sidebar-mini'; 
        
        // 2. Ambil Token dari Local Storage
        const token = localStorage.getItem('auth_token');
        
        if (token) {
            // 3. Set Header Authorization di Axios secara global
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log("Token ditemukan dan Header Axios diatur ulang.");
        }
        // Jika tidak ada token, header Authorization akan kosong, ini yang kita inginkan.
        
    }, []); 
    // Array dependensi kosong: code ini hanya dijalankan sekali saat aplikasi dimuat ulang.
    // -------------------------------------------------------------------


    return (
        <BrowserRouter>
            <Routes> 
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route element={<LayoutWrapper />}>
                    <Route path="/dashboard" element={<DashboardPage />} /> 
                    <Route path="/event" element={<EventList />} />
                    <Route path="/event/create" element={<EventCreate />} />
                    <Route path="/event/edit/:id" element={<EventEdit />} />
                </Route>
                <Route path="*" element={<LayoutWrapper><h2>404 Not Found</h2></LayoutWrapper>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;