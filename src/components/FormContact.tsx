'use client'

import {
  FormContactRequest,
  FormContactValidator,
} from '@/lib/FormContactValidator'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCheckIcon, Loader2Icon, XCircleIcon } from 'lucide-react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Form, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export const FormContact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const form = useForm<FormContactRequest>({
    resolver: zodResolver(FormContactValidator),
    defaultValues: {
      author: '',
      email: '',
      description: '',
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
      toast.error('Falha ao enviar mensagem.', {
        duration: 5000,
        cancel: {
          label: 'Fechar',
        },
        icon: (
          <XCircleIcon
            aria-hidden='true'
            focusable='false'
            className='size-4 text-destructive'
          />
        ),
      })
      throw new Error('Algo deu errado. Tente novamente mais tarde.')
    }

    form.reset()
    toast.success('Mensagem enviada com sucesso.', {
      duration: 5000,
      cancel: {
        label: 'Fechar',
      },
      icon: (
        <CheckCheckIcon
          aria-hidden='true'
          focusable='false'
          className='size-4'
        />
      ),
    })
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='w-full space-y-4'
      >
        <FormField
          control={form.control}
          name='author'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <Input type='text' placeholder='Luan Patrik' {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Input
                type='text'
                placeholder='luanpatrik@example.com'
                {...field}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <Textarea placeholder='Me conte um pouco sobre...' {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          variant='outline'
          aria-label='Enviar'
          className='w-full'
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2Icon
              className='size-[1.2rem] animate-spin'
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
