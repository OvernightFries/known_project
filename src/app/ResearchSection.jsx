import React from 'react';


export const ResearchSection = () => {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Research Section</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Sample Article 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://reactjs.org/logo-og.png" alt="Article Image" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">Fourth Amendment</h2>
                        <p className="text-gray-700"> The Fourth Amendment and Privacy Risks in the Digital Age.</p>
                        <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Read More</a>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://reactjs.org/logo-og.png" alt="Article Image" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">Fourth Amendment</h2>
                        <p className="text-gray-700">The Fourth Amendment and Privacy Risks in the Digital Age.</p>
                        <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Read More</a>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="https://reactjs.org/logo-og.png" alt="Article Image" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-2">Fourth Amendment</h2>
                        <p className="text-gray-700">The Fourth Amendment and Privacy Risks in the Digital Age.</p>
                        <a href="#" className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchSection;
