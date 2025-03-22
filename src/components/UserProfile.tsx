import React from 'react';
import './UserProfile.css'

interface UserPreferences{
    preferences: string[];
    travelStyle: string;
    budget: string;
};

interface UserData{
    name: string;
    email: string;
    preferences: UserPreferences;
};

const UserProfile: React.FC = ()=>{
    return(
        <div className="user-profile">
        </div>
    )
};

export default UserProfile;
