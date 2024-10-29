import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function ComingSoonPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-scree">
            <h1 className="text-5xl font-bold text-gray-800">
                Coming Soon!
            </h1>
            <p className="mt-4 text-xl text-gray-600">
                We are working hard to bring you this feature. Stay tuned!
            </p>
            <div className="mt-8">
                <Link to="/">
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
