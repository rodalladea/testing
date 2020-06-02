import Mail from '../lib/Mail';

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue Test <test@email.com.br>',
      to: `${user.name} <${user.email}>`,
      sub: 'Cadastro de usuario',
      html: `Ola, ${user.name}, bem vindo ao sistema de filas da Ddea :D`
    })
  }
};