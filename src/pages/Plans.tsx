import React from 'react';
import PlansList from '../components/PlansList';

const Plans: React.FC = ()=>{
    return (
        <div className="plans-page">
            <h1>My Plans</h1>
            <PlansList/>
        </div>

    )
}

export default Plans;