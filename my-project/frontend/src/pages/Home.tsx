import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Brain, Trophy, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-16">
        <h1 className="text-5xl font-bold text-gray-900">
          Master Your Studies with <span className="text-indigo-600">StudyPro</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your personal AI-powered study planner that adapts to your learning style and schedule.
          Stay organized, focused, and achieve your academic goals.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/create-plan"
            className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 text-lg font-semibold"
          >
            Get Started
          </Link>
          <Link
            to="/dashboard"
            className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-md hover:bg-indigo-50 text-lg font-semibold"
          >
            View Demo
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Brain className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Planning</h3>
          <p className="text-gray-600">
            AI-powered study schedules that adapt to your learning pace and preferences.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Trophy className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-600">
            Earn XP, unlock achievements, and stay motivated throughout your study journey.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Clock className="h-12 w-12 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Panic Mode</h3>
          <p className="text-gray-600">
            Missed a study session? Our AI will help you catch up with smart rescheduling.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white rounded-2xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Study Habits?</h2>
        <p className="text-xl mb-8">Join thousands of students achieving their academic goals with StudyPro.</p>
        <Link
          to="/create-plan"
          className="bg-white text-indigo-600 px-8 py-3 rounded-md hover:bg-gray-100 text-lg font-semibold"
        >
          Start Your Journey
        </Link>
      </section>
    </div>
  );
};

export default Home;