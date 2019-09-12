import React from 'react';
import { DashboardHeader } from './DashboardHeader';
import RepairListFilters from './RepairListFilters';
import RepairList from './RepairList';



const DashboardPage = () => (
    <div>
        <DashboardHeader />
        <RepairListFilters />
        <RepairList />
    </div>
);

export default DashboardPage;