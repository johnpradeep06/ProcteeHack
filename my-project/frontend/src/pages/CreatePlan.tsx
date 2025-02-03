import React, { useState } from 'react';
import { Calendar, BookOpen, Clock } from 'lucide-react';

const CreatePlan = () => {
  const [formData, setFormData] = useState({
    subject: '',
    examDate: '',
    syllabus: '',
    studyHoursPerDay: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Create Your Study Plan</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <div className="relative">
              <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="e.g., Mathematics"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="examDate" className="block text-sm font-medium text-gray-700 mb-2">
              Exam Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="date"
                id="examDate"
                value={formData.examDate}
                onChange={(e) => setFormData({ ...formData, examDate: e.target.value })}
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="studyHours" className="block text-sm font-medium text-gray-700 mb-2">
              Study Hours per Day
            </label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="number"
                id="studyHours"
                value={formData.studyHoursPerDay}
                onChange={(e) => setFormData({ ...formData, studyHoursPerDay: e.target.value })}
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                placeholder="e.g., 4"
                min="1"
                max="12"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="syllabus" className="block text-sm font-medium text-gray-700 mb-2">
              Syllabus Topics
            </label>
            <textarea
              id="syllabus"
              value={formData.syllabus}
              onChange={(e) => setFormData({ ...formData, syllabus: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent h-32"
              placeholder="Enter your syllabus topics, one per line"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors font-semibold"
          >
            Generate Study Plan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePlan;