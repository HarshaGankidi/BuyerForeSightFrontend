import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setFilteredUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );

    if (sortBy) {
      filtered.sort((a, b) => {
        const aVal = sortBy === 'name' ? a.name.toLowerCase() : a.company.name.toLowerCase();
        const bVal = sortBy === 'name' ? b.name.toLowerCase() : b.company.name.toLowerCase();
        if (sortOrder === 'asc') {
          return aVal.localeCompare(bVal);
        } else {
          return bVal.localeCompare(aVal);
        }
      });
    }

    setFilteredUsers(filtered);
  }, [search, sortBy, sortOrder, users]);

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full border-4 border-purple-300 border-t-purple-600 animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg font-semibold">Loading users...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">User Directory</h1>
          <p className="text-gray-300 text-lg">Explore and manage professional contacts</p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="🔍 Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={() => handleSort('name')}
              className="flex-1 md:flex-none px-5 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              📝 Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
            <button
              onClick={() => handleSort('company')}
              className="flex-1 md:flex-none px-5 py-3 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white rounded-lg font-semibold transition transform hover:scale-105 shadow-lg"
            >
              🏢 Company {sortBy === 'company' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
          </div>
        </div>

        {/* Users Grid */}
        {filteredUsers.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-300 text-xl">No users found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => navigate(`/user/${user.id}`)}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl p-6 hover:shadow-2xl transition cursor-pointer transform hover:-translate-y-1 border border-white border-opacity-10 hover:border-opacity-20"
              >
                {/* Avatar */}
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-purple-500/50 transition">
                    {user.name.split(' ')[0][0]}{user.name.split(' ')[1]?.[0] || ''}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-white mb-3 text-center">{user.name}</h2>
                <div className="space-y-2">
                  <p className="text-gray-300 flex items-center gap-2">
                    <span className="text-purple-400">📧</span>
                    <span className="text-sm">{user.email}</span>
                  </p>
                  <p className="text-gray-300 flex items-center gap-2">
                    <span className="text-pink-400">📱</span>
                    <span className="text-sm">{user.phone}</span>
                  </p>
                  <p className="text-gray-300 flex items-center gap-2">
                    <span className="text-blue-400">🏢</span>
                    <span className="text-sm font-semibold">{user.company.name}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;