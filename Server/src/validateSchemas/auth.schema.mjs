import z from 'zod'

export const registerSchema = z.object({
    name: z.string({
        required_error: "Por favor completa este campo"
    }),
    email: z.string({
        required_error: "Por favor completa este campo"
    }).email({ message: "Formato de email no válido, Por favor ingresa un email real"

    }),
    password: z.string({
        required_error: "Por favor completa este campo"
    }).min(6,{
        message: "La contraseña debe tener al menos 6 caracteres"
    })
});

export const loginSchema = z.object ({
    email: z.string({
        required_error: "Por favor completa este campo"
    }).email({ message: "Formato de email no válido, Por favor ingresa un email real"

    }),
    password: z.string({
        required_error: "Por favor completa este campo"
    }).min(6,{
        message: "La contraseña debe tener al menos 6 caracteres"
    })
})