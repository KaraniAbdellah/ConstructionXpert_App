import React from 'react';
import Header from '../Home_Com/Header';

const Pricing = () => {
  return (
    <>
        <Header></Header>
        <div className="bg-gray-100 pt-40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Pricing Plans for ConstructionXpert Services
            </h2>
            <p className="mt-4 text-xl text-gray-600">
                Choose the perfect plan for your construction project management needs
            </p>
            </div>

            <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 text-center">Basic</h3>
                <div className="mt-4 flex justify-center">
                    <span className="text-5xl font-extrabold text-gray-900">$49</span>
                    <span className="text-xl font-medium text-gray-500 self-end ml-1">/month</span>
                </div>
                <p className="mt-4 text-gray-500 text-center">
                    For small construction teams
                </p>
                </div>
                <div className="border-t border-gray-200">
                <div className="px-6 py-6 space-y-4">
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Up to 5 active projects</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Basic task management</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Resource tracking</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Email support</p>
                    </div>
                </div>
                </div>
                <div className="px-6 py-8">
                <button
                    type="button"
                    className="w-full bg-gray-800 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Get Started
                </button>
                </div>
            </div>

            {/* Professional Plan - Highlighted */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-4 border-blue-500 ring-4 ring-blue-100">
                <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 text-center">Professional</h3>
                <div className="mt-4 flex justify-center">
                    <span className="text-5xl font-extrabold text-gray-900">$99</span>
                    <span className="text-xl font-medium text-gray-500 self-end ml-1">/month</span>
                </div>
                <p className="mt-4 text-gray-500 text-center">
                    For growing construction businesses
                </p>
                </div>
                <div className="border-t border-gray-200">
                <div className="px-6 py-6 space-y-4">
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Up to 20 active projects</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Advanced task management</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Complete resource management</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Supplier management</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Priority phone & email support</p>
                    </div>
                </div>
                </div>
                <div className="px-6 py-8">
                <button
                    type="button"
                    className="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    Get Started
                </button>
                </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 text-center">Enterprise</h3>
                <div className="mt-4 flex justify-center">
                    <span className="text-5xl font-extrabold text-gray-900">$249</span>
                    <span className="text-xl font-medium text-gray-500 self-end ml-1">/month</span>
                </div>
                <p className="mt-4 text-gray-500 text-center">
                    For large construction companies
                </p>
                </div>
                <div className="border-t border-gray-200">
                <div className="px-6 py-6 space-y-4">
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Unlimited projects</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Advanced task & budget management</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Enterprise resource planning</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Advanced supplier management</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">Dedicated account manager</p>
                    </div>
                    <div className="flex items-start">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-gray-700">24/7 premium support</p>
                    </div>
                </div>
                </div>
                <div className="px-6 py-8">
                <button
                    type="button"
                    className="w-full bg-gray-800 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                    Contact Sales
                </button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </>
  );
};

export default Pricing;