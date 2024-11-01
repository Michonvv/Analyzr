import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
    return (
        <div className="space-y-12">
            {/* Alpha Version Banner */}
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 text-center p-4 rounded-lg">
                <h2 className="font-semibold">🚀 Alpha Version 0.1</h2>
                <p>Welcome to Analyzr! Your feedback is crucial as we improve our features.</p>
            </div>

            {/* Hero Section */}
            <div className="text-center space-y-6">
                <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    Elevate Your Code Quality
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Get instant feedback on your code's quality, readability, and adherence to best practices
                </p>
                <div className="flex justify-center gap-4">
                    <Link to="/analyzer">
                        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                            Start Analysis
                            <Zap className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <a href='https://github.com/Michonvv/Analyzr' target='_blank' rel="noopener noreferrer">
                        <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                            View Documentation
                        </Button>
                    </a>
                </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    {
                        icon: <Zap className="h-12 w-12 text-indigo-600" />,
                        title: 'Instant Analysis',
                        description: 'Get immediate feedback on your code quality with our advanced analysis engine.'
                    },
                    {
                        icon: <Shield className="h-12 w-12 text-indigo-600" />,
                        title: 'Best Practices',
                        description: 'Learn and implement industry-standard coding conventions automatically.'
                    },
                    {
                        icon: <Eye className="h-12 w-12 text-indigo-600" />,
                        title: 'Clear Insights',
                        description: 'Receive detailed suggestions for improvement with actionable steps.'
                    }
                ].map((feature, index) => (
                    <Card key={index} className="border-2 border-gray-100 hover:border-indigo-100 transition-colors">
                        <CardContent className="pt-6 text-center space-y-4">
                            <div className="rounded-full bg-indigo-50 p-3 w-fit mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Getting Started Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-48">
                {[
                    {
                        label: 'How It Works',
                        description: 'Paste your code, select your language, and get personalized insights powered by AI.'
                    },
                    {
                        label: 'Supported Languages',
                        description: 'Analyze code in JavaScript, TypeScript, Python, Java, and more.'
                    },
                    {
                        label: 'Your Privacy',
                        description: 'Your API key and code stay secure in your browser.'
                    }
                ].map((feature, index) => (
                    <Card key={index} className="border-2 border-gray-100">
                        <CardContent className="pt-6">
                            <div className="space-y-2">
                                <h4 className="text-sm font-medium text-gray-500">{feature.label}</h4>
                                <p className="text-base text-gray-900">{feature.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </div>
    );
}
