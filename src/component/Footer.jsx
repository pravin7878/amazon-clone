// Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Get to Know Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">About Amazon</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Press Releases</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Amazon Science</a></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Make Money with Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Sell on Amazon</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Sell under Amazon Accelerator</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Protect and Build Your Brand</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Amazon Global Selling</a></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Let Us Help You</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-white">Your Account</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Returns Centre</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">100% Purchase Protection</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Amazon App Download</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Language and Country Selector */}
                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center text-gray-400 hover:text-white">
                            <img src="path_to_flag_icon" alt="India" className="h-4 w-4 mr-1" /> English
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-white">
                            <img src="path_to_flag_icon" alt="Country" className="h-4 w-4 mr-1" /> India
                        </button>
                    </div>
                    <p className="text-gray-400">© 2024, Amazon Clone</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
