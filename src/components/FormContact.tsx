'use client'

import {
  FormContactRequest,
  FormContactValidator,
} from '@/lib/FormContactValidator'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2Icon } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { Form, FormField, FormItem, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const FormContact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const form = useForm<FormContactRequest>({
    resolver: zodResolver(FormContactValidator),
    defaultValues: {
      author: '',
      description: '',
      email: '',
    },
  })

  const onSubmit: SubmitHandler<FormContactRequest> = async () => {
    setIsLoading(true)
    const res = await fetch(process.env.NEXT_PUBLIC_DISCORD_WEBHOOK as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: '@everyone',
        embeds: [
          {
            description: form.getValues('description'),
            color: 5814783,
            author: {
              name: form.getValues('author'),
            },
            footer: {
              text: form.getValues('email').toLocaleLowerCase(),
            },
          },
        ],
      }),
      cache: 'no-cache',
    })

    if (!res.ok) {
      setIsLoading(false)
      throw new Error('Algo deu errado. Tente novamente mais tarde.')
    }

    form.reset()
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto w-full max-w-xl space-y-4'
      >
        <FormField
          control={form.control}
          name='author'
          render={({ field }) => (
            <FormItem>
              <Input type='text' placeholder='Luan Patrik' {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <Textarea placeholder='Me conte um pouco sobre...' {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <Input
                type='email'
                placeholder='luanpatrik@example.com'
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          variant='outline'
          className='w-full'
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2Icon
              className='h-[1.2rem] w-[1.2rem] animate-spin'
              aria-hidden='true'
              focusable='false'
            />
          ) : (
            'Enviar'
          )}
        </Button>
      </form>
    </Form>
  )
}

export default FormContact
