import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'

export function ConfirmStep() {
  function handleConfirmScheduling() {}
  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>
      <label htmlFor="">
        <Text size="sm">Nome Completo</Text>
        <TextInput placeholder="seu nome" />
      </label>
      <label htmlFor="">
        <Text size="sm">Endereço de email</Text>
        <TextInput type="email" placeholder="seu email" />
      </label>
      <label htmlFor="">
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>
      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button>Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
