import React from 'react';

const DashboardPage = () => {
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-12">
                        <h1 className="m-0">Dashboard</h1>
                    </div>
                </div>
            </div>
            
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="alert alert-success">
                                Selamat datang di Sistem Manajemen Event Gacor! Silakan pilih menu di Sidebar.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashboardPage;