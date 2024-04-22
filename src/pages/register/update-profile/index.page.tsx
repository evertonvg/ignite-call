import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Head from 'next/head'
import { Container, Header } from '../styles'
import { FormAnnotation, ProfileBox } from './styles'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useSession } from 'next-auth/react'
import { buildNextAuthOptions } from '../../api/auth/[...nextauth].api'
import { getServerSession } from 'next-auth'
import { api } from '@/src/lib/axios'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()
  const router = useRouter()

  async function handleUpdateProfile(data: UpdateProfileData) {
    await api.put('/users/profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${session.data?.user?.username}`)
  }

  return (
    <>
      <NextSeo title="Atualize seu perfil | Ignite Call" noindex />
      <Head>
        <title>Ignite Call - Register</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header>
          <Heading as="strong">Bem vindo ao ignite Call</Heading>
          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>
          <MultiStep size={4} currentStep={4} />
        </Header>
        <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
          <label htmlFor="">
            <Text size="sm">Foto de perfil</Text>
            <Avatar
              src={session.data?.user?.avatar_url}
              alt={session.data?.user?.name}
              referrerPolicy="no-referrer"
            />
          </label>
          <label htmlFor="">
            <Text size="sm">Sobre você</Text>
            <TextArea placeholder="seu nome" {...register('bio')} />
            <FormAnnotation size="sm">Fale um pouco sobre você.</FormAnnotation>
          </label>
          <Button type="submit">
            Finalizar
            <ArrowRight />
          </Button>
        </ProfileBox>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )
  return {
    props: {
      session,
    },
  }
}
