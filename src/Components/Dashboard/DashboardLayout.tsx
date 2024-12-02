// src/components/DashboardLayout.tsx
import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-8 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
