import React, { useEffect, useState } from "react";

const Dashboard = () => {

    const [walletName, setWalletName] = useState("");
    const [showAssets, setShowAssets] = useState(true);

    useEffect(() => {
        // Retrieve wallet name from localStorage
        const storedWalletName = localStorage.getItem("walletName");
        if (storedWalletName) {
            setWalletName(storedWalletName);
        }
    }, []);




    return (
        <div className="w-[350px] h-[600px] mx-auto text-white">
            {/* Header Section */}
            <div className="bg-gradient-to-b from-[#ffff] to-[#FFDF84] w-[350px] h-[224px] text-white rounded-b-[40px] items-center justify-between p-6">
                <div className="flex items-center space-x-4">
                    {/* <img src="/path-to-avatar.png" alt="User Avatar" className="w-12 h-12 rounded-full" /> */}
                    <div>
                        <h1 className="text-xl text-black font-semibold">Hi, {walletName}</h1>
                        <p className="text-sm text-black">Mainnet</p>
                    </div>
                </div>
                <div className="items-center px-12">
                    <p className="px-16 text-black text-sm">Total POX</p>
                </div>

                <div className="flex">
                    <p className="px-16 text-2xl text-black font-extrabold">800000.32</p>
                    <p className="text-xs py-2 text-black">$10548.45</p>
                </div>

                {/* Energy and Bandwidth Section */}

                <div className="bg-transparent py-4 grid grid-cols-2 gap-6 w-full rounded-xl">
                    <div className=" mb-2">
                        <div className="flex justify-between items-center">
                            <span className="text-black font-semibold">Energy</span>
                            <span className="text-black/60 text-xs">188/188k</span>
                        </div>
                        <div className="h-2 bg-gray-300 rounded-full mb-4">
                            <div className="h-full bg-green-500 rounded-lg" style={{ width: '80%' }}></div>
                        </div>
                    </div>


                    <div className=" mb-2">
                        <div className="flex justify-between items-center">
                            <span className="text-black font-semibold">Bandwidth</span>
                            <span className="text-black/60 text-xs">188/188k</span>
                        </div>
                        <div className="h-2 bg-gray-300 rounded-full mb-4">
                            <div className="h-full bg-blue-500 rounded-lg" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-row justify-between items-center -mt-8 py-4 px-6">
                    <button className="bg-white h-12 w-12 rounded-full text-white hover:brightness-110 flex flex-col items-center">
                        <img src="../images/send.svg" alt="Send Avatar" className="w-6 h-6 mt-[13px]" />
                        <span className="block text-[13px] text-white font-semibold mt-[14px]">Send</span>
                    </button>

                    <button className="bg-white h-12 w-12 rounded-full text-white hover:brightness-110 flex flex-col items-center">
                        <img src="../images/receive.svg" alt="Receive Avatar" className="w-6 h-6 mt-4" />
                        <span className="block text-[13px] text-white font-semibold mt-[15px]">Receive</span>
                    </button>

                    <button className="bg-white h-12 w-12 rounded-full text-white hover:brightness-110 flex flex-col items-center">
                        <img src="../images/stake.svg" alt="Stake Avatar" className="w-6 h-6 mt-3" />
                        <span className="block text-[13px] text-white font-semibold mt-4">Stake</span>
                    </button>

                    <button className="bg-white h-12 w-12 rounded-full text-white hover:brightness-110 flex flex-col items-center">
                        <img src="../images/vote.svg" alt="Vote Avatar" className="w-6 h-6 mt-4" />
                        <span className="block text-[13px] text-white font-semibold mt-3">Vote</span>
                    </button>
                </div>

            </div>





            {/* Action Buttons Section */}
            {/* <div className="p-6 mt-4 space-y-2"></div>
            <div className="flex justify-center gap-4">
                    <button className="bg-[#FFE086] h-8 w-24 rounded-2xl text-white hover:brightness-110 flex flex-col items-center">
                        
                        <span className="block text-[13px] text-black font-semibold p-2">Assets</span>
                    </button>

                    <button className="bg-white h-8 w-24 rounded-2xl text-white hover:brightness-110 flex flex-col items-center">
                        
                        <span className="block text-[13px] text-black font-semibold p-2">Collectibles</span>
                    </button>
            </div> */}

            <div className="p-6 mt-4 space-y-2"></div>
            <div className="flex justify-center gap-4">
                <button
                    className={`${showAssets ? 'bg-[#FFE086]' : 'bg-white'} h-8 w-24 rounded-2xl text-white hover:brightness-90 flex flex-col items-center`}
                    onClick={() => setShowAssets(true)}
                >
                    <span className="block text-[13px] text-black font-semibold p-2">Assets</span>
                </button>

                <button
                    className={`${!showAssets ? 'bg-[#FFE086]' : 'bg-white'} h-8 w-24 rounded-2xl text-white hover:brightness-90 flex flex-col items-center`}
                    onClick={() => setShowAssets(false)}
                >
                    <span className="block text-[13px] text-black font-semibold p-2">Collectibles</span>
                </button>
            </div>




            {/* Assets Section */}




            {showAssets && (

                <div className="p-4 space-y-2">

                    {/* POX */}

                    <div className="text-black bg-white rounded-xl px-4">

                        <div className="flex justify-between items-center">
                            <div className="flex items-center mt-2 space-x-2">
                                <div>
                                    <img src="../images/poxtoken.svg" alt="Send Avatar" className="w-10 h-10 mt-[1px]" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[14px] font-semibold">POX</p>
                                    <p className="text-[12px] text-gray-400">$2.1834</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[14px] font-semibold">49.054541</p>
                                <p className="text-[12px] text-gray-400">$ 1.00</p>
                            </div>
                        </div>

                        <div className="flex justify-between mt-2 items-center">
                            <p className="flex justify-between text-[12px] items-center]">Available: <p className="text-gray-400">1100000.02210</p></p>
                            <p className="text-[12px]">Stake: 25</p>
                        </div>
                    </div>

                    {/* USDX */}
                    <div className="text-black bg-white rounded-xl px-4">

                        <div className="flex justify-between items-center">
                            <div className="flex items-center mt-2 space-x-2">
                                <div>
                                    <img src="../images/usdxtoken.svg" alt="Send Avatar" className="w-10 h-10 mt-[1px]" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[14px] font-semibold">USDX</p>
                                    <p className="text-[12px] text-gray-400">$2.1830</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[14px] font-semibold">49.054541</p>
                                <p className="text-[12px] text-gray-400">$ 1.00</p>
                            </div>
                        </div>

                        <div className="flex justify-between mt-2 items-center">
                            <p className="flex justify-between text-[12px] items-center">Available: <p className="text-gray-400">1100000.02210</p></p>
                            <p className="text-[12px]">Stake: 25</p>
                        </div>
                    </div>

                </div>

            )}

        </div>
    );
};

export default Dashboard;
