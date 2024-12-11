import React from "react";

const Dashboard = () => {
    return (
        <div className="w-[350px] h-[600px] text-white">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-yellow-400 to-red-200 w-[350px] h-[8vh] text-white rounded-b-3xl flex items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                    <img src="/path-to-avatar.png" alt="User Avatar" className="w-12 h-12 rounded-full" />
                    <div>
                        <h1 className="text-2xl text-black font-semibold">Hi, Hritik</h1>
                        <p className="text-sm text-black">Mainnet</p>
                    </div>
                </div>
                
                
            </div>
            <div className="flex items-center px-16 space-x-4">
                    <p className="">Total POX</p>
            </div>

            <div className="flex">
            <p className="px-16 text-xl">80.308032</p>
            <p className="text-xs py-2">$10.45</p>
            </div>
                    
            

            {/* Energy and Bandwidth Section */}
            <div className="bg-black py-4 px-6 rounded-xl mx-6">
                <div className="flex justify-between items-center mb-2">
                    <span>Energy</span>
                    <span>188/188k</span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full mb-4">
                    <div className="h-full bg-green-500" style={{ width: '100%' }}></div>
                </div>
                <div className="flex justify-between items-center mb-2">
                    <span>Bandwidth</span>
                    <span>223/678</span>
                </div>
                <div className="h-2 bg-gray-300 rounded-full">
                    <div className="h-full bg-blue-500" style={{ width: '33%' }}></div>
                </div>
            </div>

            {/* Action Buttons Section */}
            <div className="grid grid-cols-4 gap-3 p-4">
                <button className="bg-gradient-to-r from-yellow-400 to-red-200 p-4 rounded-xl text-black hover:brightness-110">
                    <span className="block text-xs text-center">Send</span>
                </button>
                <button className="bg-gradient-to-r from-yellow-400 to-red-200 p-4 rounded-xl text-black hover:brightness-110">
                    <span className="block text-xs text-center">Receive</span>
                </button>
                <button className="bg-gradient-to-r from-yellow-400 to-red-200 p-4 rounded-xl text-black hover:brightness-110">
                    <span className="block  text-xs text-center">Stake</span>
                </button>
                <button className="bg-gradient-to-r from-yellow-400 to-red-200 p-4 rounded-xl text-black hover:brightness-110">
                    <span className="block text-xs text-center">Vote</span>
                </button>
            </div>

            {/* Assets Section */}
            <div className="p-6 space-y-4">
                <div className="flex justify-between items-center text-black bg-white rounded-xl px-6 py-2">
                    <div>
                        <h2 className="text-lg">POX</h2>
                        <p className="text-sm">Available: 1100000.02210</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">49.054541</p>
                        <p className="text-sm">$0.18000</p>
                    </div>
                </div>

                <div className="flex justify-between items-center text-black bg-white rounded-xl px-6 py-2">
                    <div>
                        <h2 className="text-lg">USDX</h2>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">49.054541</p>
                        <p className="text-sm">$1.00</p>
                    </div>
                </div>

                <div className="flex justify-between items-center text-black bg-white rounded-xl px-6 py-2">
                    <div>
                        <h2 className="text-lg">UVI</h2>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold">4940.454</p>
                        <p className="text-sm">Price: TBD</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
