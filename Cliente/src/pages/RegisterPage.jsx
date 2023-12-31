import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    
    const { register, handleSubmit, formState : {errors} } = useForm();
    
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();

    const navigate = useNavigate();
    
    useEffect(()=>{
        if(isAuthenticated) navigate('/dashboard')
    }, [isAuthenticated])

    const submit = handleSubmit(async (values) => {
            signup(values)
        });

    return (
        
        <div className="selection:bg-purple-500 selection:text-white">
            <div className='min-h-screen bg-purple-100 flex justify-center items-center'>
                <div className='p-8 flex-1'>
                    <div className='w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl'>
                        <div className='relative h-48 bg-purple-800 rounded-bl-4xl'>
                            <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                        <div className='px-10 pt-4 pb-8 bg-white rounded-tr-4xl'>
                            <h1 className='text-2xl font-semibold text-gray-700'>Fornulario de Registro</h1>
                            
                            {
                                
                             registerErrors.map((error, i) => (
                             <div className='bg-red-500 p-2 text-white mt-6 rounded-md text-xs text-center' key={i}>
                                 {error}
                             </div>
                             ))
                        
                                
                            }

                            <form onSubmit={submit} className='mt-12'>

                                <div className='relative'>
                                    <input type='text' {...register("name", { required: true })} id="name" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600" placeholder="Gimnasio Increible" />
                                    <label htmlFor="name" className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Nombre del Gimnasio</label>
                                </div>
                                {
                                    errors.name && (
                                        <p className='text-red-500'>El nombre es Requerido</p>
                                    )
                                }
                                <div className='mt-10 relative'>
                                    <input type='email' {...register("email", { required: true })} id="email" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600" placeholder="ejepmplo@ejemplo.com" />
                                    <label htmlFor="email" className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Email</label>
                                </div>
                                {
                                    errors.email && (
                                        <p className='text-red-500'>El email es Requerido</p>
                                    )
                                }
                                <div className='mt-10 relative'>
                                    <input type='password' {...register("password", { required: true })} id="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600" placeholder="ejepmplo@ejemplo.com" />
                                    <label htmlFor="password" className='absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>Contrtaseña</label>
                                </div>
                                {
                                    errors.password && (
                                        <p className='text-red-500'>La contraseña es Requerida</p>
                                    )
                                }
                                <button type='submit' className='mt-20 px-4 py-2 rounded bg-purple-800 hover:bg-purple-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer'>Registrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default RegisterPage;
