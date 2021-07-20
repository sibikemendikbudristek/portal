import React from 'react';

const Dashboard = () => {
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    return (
        <main className="bg-light" style={{minHeight: '100vh', paddingTop: '120px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-3">
                        <aside className="card border-0" style={{borderRadius: '25px'}}>
                            <div className="card-body my-3">
                                <h1 style={{fontSize: '17px'}}>Halo {userInfo.data.result.fullname}</h1>
                                <p><strong>{userInfo.data.result.role_name}</strong></p>
                            </div>
                        </aside>
                    </div>
                    <div className="col-lg-8">
                        <div className="card border-0" style={{borderRadius: '25px'}}>
                            <div className="card-body my-3">
                                <h2 style={{fontSize: '25px'}}><strong>Dashboard</strong></h2>
                                <p>Selamat datang {userInfo.data.result.fullname}. Selamat beraktivitas, semoga sehat selalu.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
