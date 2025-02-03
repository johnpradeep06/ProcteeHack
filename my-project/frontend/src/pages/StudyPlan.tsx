import React from 'react';
import { CheckCircle, Calendar } from 'lucide-react';

const StudyPlan = () => {
  const tasks = [
    { id: 1, subject: 'Mathematics', topic: 'Calculus - Derivatives', completed: true },
    { id: 2, subject: 'Mathematics', topic: 'Calculus - Integrals', completed: false },
    { id: 3, subject: 'Physics', topic: 'Mechanics - Forces', completed: false },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your Study Plan</h1>
        <p className="text-gray-600">Mathematics Final Exam - 15 days remaining</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Today's Tasks</h2>
            <Calendar className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <CheckCircle
                    className={`h-5 w-5 ${
                      task.completed ? 'text-green-500' : 'text-gray-300'
                    }`}
                  />
                  <div>
                    <p className="font-medium text-gray-900">{task.subject}</p>
                    <p className="text-sm text-gray-600">{task.topic}</p>
                  </div>
                </div>
                <button
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    task.completed
                      ? 'bg-green-100 text-green-700'
                      : 'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  {task.completed ? 'Completed' : 'Mark Complete'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Progress Overview</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Mathematics</span>
                <span className="text-sm font-medium text-gray-700">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">Physics</span>
                <span className="text-sm font-medium text-gray-700">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;