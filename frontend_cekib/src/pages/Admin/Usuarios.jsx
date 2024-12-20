import React, { useState } from 'react';
import Sidebar from '../../components/Admin/Sidebar';
import CrudProfesionales from '../../components/Admin/HomeAdmin/CrudProfesionales'; 
export default function Usuarios() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <main>
            <div className="flex h-screen">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            </div>
            <div className="hidden lg:fixed lg:inset-y-0 lg:inset-x-0 lg:flex border border-teal-400 rounded-lg my-2 mr-6 ml-40">
                <div className="flex-1">
                    <CrudProfesionales /> {/* Usando el componente correcto */}
                </div>
            </div>
        </main >
    );
}
