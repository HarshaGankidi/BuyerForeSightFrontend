import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => setUser(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!user) return <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center"><div className="text-xl">Loading...</div></div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
        >
          ← Back to Dashboard
        </button>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{user.name}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Personal Information</h2>
              <p className="mb-2"><strong>Username:</strong> {user.username}</p>
              <p className="mb-2"><strong>Email:</strong> {user.email}</p>
              <p className="mb-2"><strong>Phone:</strong> {user.phone}</p>
              <p className="mb-2"><strong>Website:</strong> <a href={`http://${user.website}`} className="text-blue-600 hover:underline">{user.website}</a></p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Address</h2>
              <p className="mb-2"><strong>Street:</strong> {user.address.street}</p>
              <p className="mb-2"><strong>Suite:</strong> {user.address.suite}</p>
              <p className="mb-2"><strong>City:</strong> {user.address.city}</p>
              <p className="mb-2"><strong>Zipcode:</strong> {user.address.zipcode}</p>
              <p className="mb-2"><strong>Geo:</strong> Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Company</h2>
            <p className="mb-2"><strong>Name:</strong> {user.company.name}</p>
            <p className="mb-2"><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
            <p className="mb-2"><strong>Business:</strong> {user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;