import React from 'react';

const Dashboard = () => {
    return (
        <main className="bg-light" style={{minHeight: '100vh', paddingTop: '120px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <aside className="card">
                            <div className="card-body">
                                <h1>Test</h1>
                            </div>
                        </aside>
                    </div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <h1>Test</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Dashboard;
