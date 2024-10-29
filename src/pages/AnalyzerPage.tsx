import React, { useState, useEffect } from 'react';
import { OpenAI } from 'openai';
import Editor from '@monaco-editor/react';
import Analysis from '../components/Analysis';
import { Wand2, Key, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const API_KEY_STORAGE_KEY = 'openai-api-key';

export default function AnalyzerPage() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [analysis, setAnalysis] = useState<{ score: number; suggestions: any[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');

  // Load API key from localStorage on component mount
  useEffect(() => {
    const savedApiKey = localStorage.getItem(API_KEY_STORAGE_KEY);
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  // Save API key to localStorage whenever it changes
  const handleApiKeyChange = (newKey: string) => {
    setApiKey(newKey);
    if (newKey) {
      localStorage.setItem(API_KEY_STORAGE_KEY, newKey);
    }
  };

  // Clear API key from state and localStorage
  const clearApiKey = () => {
    setApiKey('');
    localStorage.removeItem(API_KEY_STORAGE_KEY);
  };

  const analyzeCode = async () => {
    if (!code.trim()) return;
    if (!apiKey.trim()) {
      setError('Please enter your OpenAI API key');
      return;
    }
    
    setError('');
    setLoading(true);
    try {
      const openai = new OpenAI({
        apiKey: apiKey,
        dangerouslyAllowBrowser: true
      });

      const completion = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: `You are a code review expert. Analyze the provided ${language} code and return a JSON response with:
              - score (number 0-10)
              - suggestions (array of objects with):
                - type: "error" | "warning" | "success"
                - message: short title of the suggestion
                - explanation: detailed explanation
                - code: (optional) example code showing the improvement
              Focus on code quality, best practices, potential issues, and performance improvements.`
          },
          {
            role: 'user',
            content: code
          }
        ],
        model: 'gpt-3.5-turbo',
        response_format: { type: 'json_object' }
      });

      const result = JSON.parse(completion.choices[0].message.content || '');
      console.log('Analysis result:', result);
      setAnalysis(result);
    } catch (error) {
      console.error('Error analyzing code:', error);
      setError('Failed to analyze code. Please check your API key and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="space-y-4">
        <h1>Enter your open ai api key</h1>
          <div className="relative flex items-center">
            <div className="absolute left-3 text-gray-400">
              <Key className="h-4 w-4" />
            </div>

            <Input
              type="password"
              placeholder="Enter your OpenAI API key"
              value={apiKey}
              onChange={(e) => handleApiKeyChange(e.target.value)}
              className="pl-10 pr-12 w-full"
            />
            {apiKey && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 h-7 w-7 p-0"
                onClick={clearApiKey}
                title="Clear API key"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>

        <div className="flex justify-between items-center">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-white border border-gray-300 rounded-md px-3 py-1"
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="csharp">C#</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
          </select>
        </div>
        
        <div className="h-[600px] border rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            language={language}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              wordWrap: 'on'
            }}
          />
        </div>

        <button
          onClick={analyzeCode}
          disabled={loading}
          className="w-full flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white py-3 px-6 rounded-lg transition-colors duration-200"
        >
          <Wand2 className="h-5 w-5" />
          <span>{loading ? 'Analyzing...' : 'Analyze Code'}</span>
        </button>
      </div>
      
      {analysis && (
        <div className="lg:h-[calc(100vh-12rem)] overflow-y-auto pr-4">
          <Analysis 
            score={analysis.score}
            suggestions={analysis.suggestions}
          />
        </div>
      )}
    </div>
  );
}