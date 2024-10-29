import React from 'react';
import { Zap, Shield, Eye } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="text-center space-y-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900">
        Elevate Your Code Quality
      </h1>
      <p className="text-xl text-gray-600">
        Get instant feedback on your code's quality, readability, and adherence to best practices
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {[
          {
            icon: <Zap className="h-8 w-8 text-indigo-600" />,
            title: 'Instant Analysis',
            description: 'Get immediate feedback on your code quality'
          },
          {
            icon: <Shield className="h-8 w-8 text-indigo-600" />,
            title: 'Best Practices',
            description: 'Learn industry-standard coding conventions'
          },
          {
            icon: <Eye className="h-8 w-8 text-indigo-600" />,
            title: 'Clear Insights',
            description: 'Detailed suggestions for improvement'
          }
        ].map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}