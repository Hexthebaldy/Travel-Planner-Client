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
          },
          {
            id: 3,
            title: 'Bali Getaway',
            date: '2026-02-10',
            description: 'Relax on beautiful beaches'
          },
          {
            id: 4,
            title: 'New York City',
            date: '2026-04-05',
            description: 'Experience the Big Apple'
          },
          {
            id: 5,
            title: 'Rome Adventure',
            date: '2026-06-15',
            description: 'Explore ancient history and cuisine'
          },
          {
            id: 6,
            title: 'Sydney Exploration',
            date: '2026-08-22',
            description: 'Visit the Opera House and beyond'
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