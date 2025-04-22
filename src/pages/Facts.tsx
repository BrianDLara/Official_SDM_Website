import React from 'react'
import ComparisonTable from "../components/ComparisonTable"
import ReceptionistSalaryChart from '../components/ReceptionistSalaryChart'
import DesktopMockup from "../components/DesktopMockup"

const Facts = () => {
    return (
    <div className='pt-12'>
        < ComparisonTable />
        <ReceptionistSalaryChart />
        <DesktopMockup />
    </div>
)}

export default Facts
