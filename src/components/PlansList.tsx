import React, {useState} from 'react';
import './PlansList.css';

interface Plan {
    id: number;
    title: string;
    date: string;
    description: string;
}

const PlansList: React.FC = ()=>{
    const [plans,setPlans] = useState<Plan[]>([
        {
            id: 1,
            title: 'Tokyo Trip',
            date: '2025-10-15',
            description: 'Explore the city of lights'
          },
          {
            id: 2,
            title: 'Paris Week',
            date: '2025-12-20',
            description: 'Discover the Eiffel Tower'
          }
    ]);


    return (
        <div className='plan-list'>
            {
                plans.map(plan=>(
                    <div key={plan.id}
                        className="plan-card">
                        <h3>{plan.title}</h3>
                        <p className="plan-date">{plan.date}</p>
                        <div className="plan-actions">
                            <button className='detail-btn'>See Details</button>
                            <button className="delete-btn">Delete</button>
                        </div>
                    </div>
                ))
            }
            {plans.length === 0 && (
                <div className="empty-plans">
                    <p>No plans yet.</p>
                    <button>Create New Plan</button>
                </div>
            )
            }
        </div>
    )
};

export default PlansList;