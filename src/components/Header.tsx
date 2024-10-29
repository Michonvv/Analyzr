import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Code2 className="h-8 w-8" />
            <span className="text-2xl font-bold">CodeLens</span>
          </Link>
          <div className="flex items-center space-x-1">
            <Sparkles className="h-5 w-5" />
            <span className="text-sm">AI-Powered Analysis</span>
          </div>
        </div>
      </div>
    </header>
  );
}