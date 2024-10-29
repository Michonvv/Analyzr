import React from 'react';
import { CheckCircle, XCircle, AlertCircle, Code2, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Suggestion {
    type: 'error' | 'warning' | 'success';
    message: string;
    explanation: string;
    code?: string;
}

interface Metric {
    name: string;
    score: number;
    description: string;
}

interface AnalysisProps {
    score: number;
    suggestions: Suggestion[];
}

export default function Analysis({ score, suggestions }: AnalysisProps) {
    const getScoreColor = (score: number) => {
        if (score >= 8) return 'text-green-500';
        if (score >= 6) return 'text-yellow-500';
        return 'text-red-500';
    };

    const getBgColor = (score: number) => {
        if (score >= 8) return 'bg-green-50';
        if (score >= 6) return 'bg-yellow-50';
        return 'bg-red-50';
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'error':
                return <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />;
            case 'warning':
                return <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0" />;
            case 'success':
                return <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />;
            default:
                return null;
        }
    };

    const metrics: Metric[] = [
        {
            name: 'Code Quality',
            score: Math.min(10, score + 1),
            description: 'Overall code structure and organization'
        },
        {
            name: 'Performance',
            score: Math.min(10, score + 0.5),
            description: 'Code efficiency and resource usage'
        },
        {
            name: 'Maintainability',
            score: Math.min(10, score - 0.5),
            description: 'Ease of maintenance and updates'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Overall Score Card */}
            <div className={`p-6 rounded-lg shadow-md ${getBgColor(score)}`}>
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">Overall Code Quality Score</h3>
                        <p className="text-gray-600">Based on industry best practices</p>
                    </div>
                    <div className={`text-5xl font-bold ${getScoreColor(score)}`}>
                        {score}/10
                    </div>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {metrics.map((metric) => (
                    <div key={metric.name} className="bg-white p-4 rounded-lg shadow-md">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{metric.name}</h4>
                            <span className={`font-bold ${getScoreColor(metric.score)}`}>
                                {metric.score.toFixed(1)}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600">{metric.description}</p>
                    </div>
                ))}
            </div>

            {/* Detailed Analysis */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                    <h3 className="text-lg font-semibold">Detailed Analysis</h3>
                </div>
                <div className="divide-y">
                    {suggestions.map((suggestion, index) => (
                        <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
                            <div className="flex space-x-4">
                                {getIcon(suggestion.type)}
                                <div className="flex-1">
                                    <h4 className="font-medium mb-1">{suggestion.message}</h4>
                                    <p className="text-gray-600 text-sm mb-2">{suggestion.explanation}</p>
                                    {suggestion.code && (
                                        <pre className="bg-gray-800 text-gray-200 p-3 rounded-md text-sm overflow-x-auto">
                                            <code>{suggestion.code}</code>
                                        </pre>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="font-semibold mb-3">Recommended Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Link to="/coming-soon">
                        <button className="flex items-center justify-center space-x-2 bg-indigo-100 text-indigo-700 p-2 rounded-md hover:bg-indigo-200 transition-colors w-full h-12">
                            <Code2 className="h-4 w-4" />
                            <span>Generate Documentation</span>
                        </button>
                    </Link>
                    <Link to="/coming-soon">
                        <button className="flex items-center justify-center space-x-2 bg-indigo-100 text-indigo-700 p-2 rounded-md hover:bg-indigo-200 transition-colors w-full h-12">
                            <Cpu className="h-4 w-4" />
                            <span>Optimize Code</span>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    );
}