import React, { useState } from 'react'
//icons
import { RiHome3Line, RiPassValidLine, RiBikeFill, RiRunFill, RiContactsFill, RiMenu3Line, RiCloseFill } from "react-icons/ri";


const Sidebar = () => {
    const  [showMenu, setShowMenu]  = useState(false);
    return (
        <>
            <div className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full left-0 transition-all duration-300 ${showMenu ? "left-0" : "-left-full"} z-50`}>

                {/* profile */}

                <div className='flex flex-col items-center justify-center p-8 gap-2 h-[30vh]'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Escudo_del_Club_Alvarado_%28Mar_del_Plata%29_-_BSAS.svg/1200px-Escudo_del_Club_Alvarado_%28Mar_del_Plata%29_-_BSAS.svg.png" alt="Logo del gimnasio"
                        className='w-20 h-20 object-contain rounded-full ring-2 ring-gray-500 bg-white' />
                    <h1 className='text-xl text-white font-bold'>Hit Alvarado</h1>
                    <button className='bg-primary-100 text-white py-1 px-6 rounded-full font-lmedium'>
                        Editar perfil
                    </button>
                </div>

                {/* nav */}
                <div className='bg-primary-300 p-8 rounded-tr-[80px] h-[70vh] flex flex-col justify-between gap-8'>
                    <nav className='flex flex-col gap-8 '>
                        <a href="#" className='flex items-center gap-4 text-white font-medium py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'>
                            <RiHome3Line /> Home
                        </a>
                        <a href="#" className='flex items-center gap-4 text-white font-medium py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'>
                            <RiContactsFill /> Clientes
                        </a>
                        <a href="#" className='flex items-center gap-4 text-white font-medium py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'>
                            <RiPassValidLine /> Rutinas
                        </a>
                        <a href="#" className='flex items-center gap-4 text-white font-medium py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'>
                            <RiBikeFill /> Ejercicios
                        </a>
                        <a href="#" className='flex items-center gap-4 text-white font-medium py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors'>
                            <RiRunFill /> Clases
                        </a>
                    </nav>
                    <div className='bg-primary-900/50 text-white p-4 text-sm rounded-xl'>
                        <p className='mb-2 text-gray-400'>¿Problemas?</p>
                        <a href="#">Contactanos</a>
                    </div>
                </div>
            </div>
            {/* boton menu */}
            <button onClick={() => setShowMenu(!showMenu)} className='lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50'>
                {showMenu ? <RiCloseFill/> : <RiMenu3Line/>}
            </button>
        </>
    )
}

export default Sidebar
