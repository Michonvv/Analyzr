import React from 'react';

const TOS: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 py-24">
            <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
            <p className="mb-4">
                Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="mb-4">
                Welcome to Analyzr! These Terms of Service outline the rules and regulations for the use of our service.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
            <p className="mb-4">
                By accessing and using our service, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our service.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Changes to Terms</h2>
            <p className="mb-4">
                We reserve the right to modify these Terms of Service at any time. Any changes will be effective immediately upon posting the revised terms on our website. Your continued use of the service after any changes constitutes acceptance of those changes.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Use of Service</h2>
            <p className="mb-4">
                You agree to use our service only for lawful purposes and in accordance with these Terms. You are prohibited from using the service in any way that violates any applicable federal, state, local, or international law or regulation.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. User Accounts</h2>
            <p className="mb-4">
                To access certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other breach of security.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Limitation of Liability</h2>
            <p className="mb-4">
                In no event shall Analyzr or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the service, whether based on warranty, contract, tort (including negligence), or any other legal theory.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Governing Law</h2>
            <p className="mb-4">
                These Terms of Service shall be governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law principles.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
            <p className="mb-4">
                If you have any questions or concerns about these Terms of Service, please contact us at: <a href="mailto:michonvanvilsteren@gmail.com" className="link link-hover">michonvanvilsteren@gmail.com</a>.
            </p>
        </div>
    );
};

export default TOS;
