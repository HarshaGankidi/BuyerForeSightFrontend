import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-4 border-purple-300 border-t-purple-600 animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-semibold">Loading user details...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <p className="text-white text-xl">User not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center gap-2 px-5 py-3 bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg transition border border-white border-opacity-10 hover:border-opacity-20 font-semibold"
        >
          <span>←</span> Back to Directory
        </button>

        {/* Main Card */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-white border-opacity-10 overflow-hidden">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-center">
            <div className="mb-4 inline-block">
              <div className="w-24 h-24 rounded-full bg-white bg-opacity-20 backdrop-blur-md flex items-center justify-center text-white text-4xl font-bold border-4 border-white border-opacity-30 shadow-xl">
                {user.name.split(' ')[0][0]}{user.name.split(' ')[1]?.[0] || ''}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{user.name}</h1>
            <p className="text-white text-opacity-90 text-lg">@{user.username}</p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Personal Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-white border-opacity-20 flex items-center gap-2">
                <span className="text-purple-400">👤</span> Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-5 rounded-lg p-5 border border-white border-opacity-10">
                  <p className="text-gray-400 text-sm mb-2">📧 Email</p>
                  <p className="text-white text-lg font-semibold break-all">{user.email}</p>
                </div>
                <div className="bg-white bg-opacity-5 rounded-lg p-5 border border-white border-opacity-10">
                  <p className="text-gray-400 text-sm mb-2">📱 Phone</p>
                  <p className="text-white text-lg font-semibold">{user.phone}</p>
                </div>
                <div className="bg-white bg-opacity-5 rounded-lg p-5 border border-white border-opacity-10">
                  <p className="text-gray-400 text-sm mb-2">🌐 Website</p>
                  <a
                    href={`http://${user.website}`}
                    className="text-purple-400 hover:text-purple-300 text-lg font-semibold transition break-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-white border-opacity-20 flex items-center gap-2">
                <span className="text-pink-400">📍</span> Address
              </h2>
              <div className="bg-white bg-opacity-5 rounded-lg p-6 border border-white border-opacity-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Street</p>
                    <p className="text-white font-semibold">{user.address.street}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Suite</p>
                    <p className="text-white font-semibold">{user.address.suite}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">City</p>
                    <p className="text-white font-semibold">{user.address.city}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Zipcode</p>
                    <p className="text-white font-semibold">{user.address.zipcode}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white border-opacity-10">
                  <p className="text-gray-400 text-sm mb-2">📌 Coordinates</p>
                  <p className="text-white font-semibold">Latitude: {user.address.geo.lat} | Longitude: {user.address.geo.lng}</p>
                </div>
              </div>
            </div>

            {/* Company Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 pb-3 border-b border-white border-opacity-20 flex items-center gap-2">
                <span className="text-blue-400">🏢</span> Company Information
              </h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg p-6">
                  <p className="text-white text-opacity-80 text-sm mb-1">Company Name</p>
                  <p className="text-white text-xl font-bold">{user.company.name}</p>
                </div>
                <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg p-6">
                  <p className="text-white text-opacity-80 text-sm mb-1">Catch Phrase</p>
                  <p className="text-white text-lg font-semibold">{user.company.catchPhrase}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6">
                  <p className="text-white text-opacity-80 text-sm mb-1">Business Focus</p>
                  <p className="text-white text-lg font-semibold">{user.company.bs}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

export default UserDetail;