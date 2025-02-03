import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Target, Award, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Student!</h1>
        <p className="text-gray-600">Your next exam is in 15 days. Stay focused!</p>
      </div>

      {/* Progress Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Current Progress</h3>
            <Target className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
          <p className="text-sm text-gray-600 mt-2">70% of current plan completed</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Study Streak</h3>
            <Award className="h-6 w-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-indigo-600">7 Days</p>
          <p className="text-sm text-gray-600">Keep it up!</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">XP Points</h3>
            <Award className="h-6 w-6 text-indigo-600" />
          </div>
          <p className="text-3xl font-bold text-indigo-600">2,450</p>
          <p className="text-sm text-gray-600">Level 5 Scholar</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-6">
        <Link
          to="/create-plan"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold">Create New Study Plan</h3>
              <p className="text-gray-600">Plan your study schedule for upcoming exams</p>
            </div>
          </div>
        </Link>

        <button className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <AlertCircle className="h-8 w-8 text-red-600" />
            <div>
              <h3 className="text-lg font-semibold">Panic Mode</h3>
              <p className="text-gray-600">Need to reschedule? We've got you covered</p>
            </div>
          </div>
        </button>
      </div>

      {/* Today's Tasks */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Today's Study Tasks</h2>
        <div className="space-y-4">
          {['Mathematics Chapter 5', 'Physics Lab Review', 'History Essay Research'].map((task, index) => (
            <div key={index} className="flex items-center space-x-3">
              <input type="checkbox" className="h-5 w-5 text-indigo-600 rounded" />
              <span className="text-gray-700">{task}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;