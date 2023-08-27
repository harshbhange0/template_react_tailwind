import React from 'react'

function Header() {
    return (
        <><main className="h-screen flex relative justify-center items-center bg-slate-500 ">
            <div className="absolute top-0 bg-gray-400 px-2 shadow-sm rounded-sm text-white">
                Template Tailwind and React with Code auto Format
            </div>
            <div className=" h-[200px] flex justify-center items-center flex-col bg-slate-300 p-4 gap-4 shadow-2xl rounded-md">
                <p className="text-[40px] text-center">
                    Hello World !
                </p>
                <a href="https://tailwindcss.com/docs/installation" className="font-normal text-blue-900 hover:text-blue-700">Tailwind Doc</a>
                <a href="https://github.com/harshbhange0" className="font-normal text-blue-900 hover:text-blue-700">More templates</a>
            </div>
        </main></>
    )
}

export default Header