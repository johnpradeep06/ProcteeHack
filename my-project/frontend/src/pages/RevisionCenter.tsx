import React from 'react';
import { BookOpen, Brain, Star } from 'lucide-react';

const RevisionCenter = () => {
  const topics = [
    {
      id: 1,
      subject: 'Mathematics',
      topic: 'Calculus Fundamentals',
      summary: 'Key concepts of limits, derivatives, and integrals...',
      importance: 'high',
    },
    {
      id: 2,
      subject: 'Physics',
      topic: 'Newton\'s Laws',
      summary: 'Three fundamental laws of motion and their applications...',
      importance: 'high',
    },
    {
      id: 3,
      subject: 'Chemistry',
      topic: 'Periodic Table',
      summary: 'Elements organization, properties, and trends...',
      importance: 'medium',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Revision Center</h1>
        <p className="text-gray-600">Review your key topics and summaries</p>
      </div>

      <div className="grid gap-6">
        {topics.map((topic) => (
          <div key={topic.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{topic.subject}</h3>
                  <p className="text-sm text-gray-600">{topic.topic}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Star className={`h-5 w-5 ${
                  topic.importance === 'high' ? 'text-yellow-500' : 'text-gray-300'
                }`} />
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-700">{topic.summary}</p>
            </div>

            <div className="mt-6 flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                <Brain className="h-4 w-4" />
                <span>Start Revision</span>
              </button>
              <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevisionCenter;