import React from 'react';
import { Wand2 } from 'lucide-react';

interface CodeInputProps {
  code: string;
  setCode: (code: string) => void;
  onAnalyze: () => void;
}

export default function CodeInput({ code, setCode, onAnalyze }: CodeInputProps) {
  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-64 p-4 bg-gray-800 text-gray-100 font-mono text-sm rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          placeholder="Paste your code here..."
        />
        <div className="absolute top-2 right-2 bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
          {code.split('\n').length} lines
        </div>
      </div>
      <button
        onClick={onAnalyze}
        className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg transition-colors duration-200"
      >
        <Wand2 className="h-5 w-5" />
        <span>Analyze Code</span>
      </button>
    </div>
  );
}