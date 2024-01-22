import z from 'zod'

export const FormContactValidator = z.object({
  author: z
    .string()
    .min(2, { message: 'Mínimo de 2 caracteres.' })
    .max(50, { message: 'Máximo de 50 caracteres.' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Email inválido.' })
    .min(2, { message: 'Mínimo de 2 caracteres.' })
    .max(50, { message: 'Máximo de 50 caracteres.' })
    .trim()
    .toLowerCase(),
  description: z
    .string()
    .min(10, { message: 'Mínimo de 10 caracteres.' })
    .max(4096, { message: 'Máximo de 4096 caracteres.' })
    .trim(),
})

export type FormContactRequest = z.infer<typeof FormContactValidator>
