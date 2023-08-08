import {useForm} from 'react-hook-form'

function RegisterPage() {

    const {register, handleSubmit} = useForm();

    return (
        <div class="selection:bg-rose-500 selection:text-white ">
            <div class="min-h-screen bg-rose-100 flex justify-center items-center">
                <div class="p-8 flex-1">
                    <div class="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
                        <div class="relative h-48 bg-purple-800 rounded-bl-4xl">
                            <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                            </svg>
                        </div>
                        <div class="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                            <h1 class="text-2xl font-semibold text-gray-700">Formulario de registro</h1>
                            <form class="mt-12" action="" method="POST">
                                <div class="mb-10 relative">
                                    <input id="name" name="name" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600" placeholder="Gimnasio Increible" />
                                    <label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Nombre del Gimnasio </label>
                                </div>
                                <div class="relative">
                                    <input id="email" name="email" type="text" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600" placeholder="ejemplo@ejemplo.com" />
                                    <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email </label>
                                </div>
                                <div class="mt-10 relative">
                                    <input id="password" type="password" name="password" class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-purple-600" placeholder="Constraseña" />
                                    <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Contraseña</label>
                                </div>

                                <input type="sumbit" value="Registrarse" class="mt-20 px-4 py-2 rounded bg-purple-800 hover:bg-purple-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-purple-500 focus:ring-opacity-80 cursor-pointer" />
                            </form>
                            <a href="#" class="mt-4 block text-sm text-center font-medium text-purple-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"> Olvidaste tu contraseña? </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage