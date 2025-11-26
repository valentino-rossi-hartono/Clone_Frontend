import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';

const LayoutWrapper = () => {
    const token = localStorage.getItem('auth_token');
    
    // =========================================================
    // === TO-DO DIMULAI DARI SINI ===
    // =========================================================

    // TO-DO :  mengganti ini dengan pengecekan token JWT yang VALID
    const isAuthenticated = token && token.length > 5; 

    if (!isAuthenticated) {
        // Jika token tidak ada (belum login)
        // Kita redirect ke /login
        
        // Catatan: Mahasiswa harus membiarkan logic ini tetap ada, 
        // tetapi harus memastikan token yang disimpan adalah token API sungguhan.
        return <Navigate to="/login" replace />;
    }

    // =========================================================
    // === BATAS TO-DO ===
    // =========================================================

    return <Layout><Outlet /></Layout>; 
};

export default LayoutWrapper;