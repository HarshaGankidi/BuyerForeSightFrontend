import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState(''); // 'name' or 'company'

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">User Directory Dashboard</h1>
        
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex gap-2">
            <button
              onClick={() => handleSort('name')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sort by Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
            <button
              onClick={() => handleSort('company.name')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sort by Company {sortBy === 'company.name' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map(user => (
            <div
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`)}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
              <p className="text-gray-600 mb-1"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-600 mb-1"><strong>Phone:</strong> {user.phone}</p>
              <p className="text-gray-600"><strong>Company:</strong> {user.company.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;