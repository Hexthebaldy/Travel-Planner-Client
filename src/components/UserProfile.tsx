import React, {useState} from 'react';
import './UserProfile.css'

interface UserPreferences{
    preferredDestination: string[];
    travelStyle: string;
    budget: string;
};

interface UserData{
    name: string;
    email: string;
    preferences: UserPreferences;
};

const UserProfile: React.FC = ()=>{
    const [user,setUser] = useState<UserData>(
        {
            name:'Yang',
            email:'giveMeOffer@gmail.com',
            preferences:{
                preferredDestination:['Paris','New York','Tokyo'],
                travelStyle:'Adventure',
                budget:'medium'
            }
        }
    );

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [formData,setFormData] = useState<UserData>(user);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void =>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void =>{
        e.preventDefault();
        setUser(formData);
        setIsEditing(false);
    }

    return(
        <div className="user-profile">
            {!isEditing ? (
                <div className="profile-view">
                    <div className="profile-header">
                        <h2>{user.name}</h2>
                        <button onClick={()=>setIsEditing(true)}>Edit Profile</button>
                    </div>
                    <div className="profile-details">
                        <p><strong>Email: </strong> {user.email}</p>
                        <p><strong>Preference: </strong>{user.preferences.preferredDestination.join('   ')}</p>
                        <p><strong>Travel Style: </strong>{user.preferences.travelStyle}</p>
                        <p><strong>Budget: </strong>{user.preferences.budget}</p>
                    </div>
                </div>
            ):( // is editing
                <form action="" className="profile-form"
                onSubmit = {handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save</button>
                        <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </form>
            )
        }
        </div>
    )
};

export default UserProfile;
