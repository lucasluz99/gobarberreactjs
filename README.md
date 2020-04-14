# Sobre o projeto
Este projeto faz parte do meu potifólio pessoal. Criei ele no curso GoStack da rocketseat.

**Como forma de me desafiar desenvolvi por conta própria a funcionalidade de 
recuperação de senha através do envio de um email de recuperação. O envio deste email é feita em segundo plano (Background Jobs) através de uma fila.Também escrevi toda esta a documentação.** Para saber mais sobre a funcionalidade de recuperação de senha: [GoBarber Server](https://github.com/lucasluz99/gobarber)

# O que aprendi com este projeto 

No desenvolimento deste projeto consegui entender o por quê de utilizar frameworks JavaScript no front-end e quais são os problemas que eles,em geral,resolvem. Os problemas são :

- **Performance**,o React ,por exemplo, utiliza o Virtual Dom que gera em memória um objeto
JavaScript com a representação do seu HTML e ao haver alguma alteração no estado da
aplicação ele gera um novo objeto em memória e através de um algoritmo de “diff” ele
compara os dois objetos e altera no DOM apenas o necessário.
- **Reaproveitamento de código** através dos componentes.
- **Reatividade**, no desenvolvimento com JS puro, toda vez que uma variável é alterada você
tem que manualmente renderizar a interface. Já os frameworks usam do princípio da
reatividade, quando o estado da aplicação é alterado ele automaticamente refletirá essa
mudança em todos os lugares que utilizem essas variáveis. Assim sendo, garantindo a
sincronização do estado da aplicação com a interface.

Também aprendi mais a fundo o funcionamento de algumas bibliotecas do ecossistema do React, como o React Router Dom para criação de rotas (públicas e privadas), Redux e Redux Saga para gerenciamento do estado global.

# Screenshots

## Home
![home](https://user-images.githubusercontent.com/53489804/73971337-75e3a380-48fd-11ea-8f19-48cc39d65ee3.png)

## Cadastro

![register](https://user-images.githubusercontent.com/53489804/73971326-70865900-48fd-11ea-9c81-c99832d3c2ed.png)

## Esqueci minha senha

![forgotpassword](https://user-images.githubusercontent.com/53489804/73971308-682e1e00-48fd-11ea-80f1-e84f2969540f.png)

## Trocar senha

![resetpassoword](https://user-images.githubusercontent.com/53489804/73971266-58aed500-48fd-11ea-8724-46fefa489609.png)

## Lidando com erros de network

![handleNetworkError](https://user-images.githubusercontent.com/53489804/73971289-606e7980-48fd-11ea-968a-151470a9e40c.png)

## Dashboard

![dashboard](https://user-images.githubusercontent.com/53489804/73971252-50569a00-48fd-11ea-9ab2-7cb7d21f662e.png)

## Atualizar perfil

![updateProfile](https://user-images.githubusercontent.com/53489804/73971212-3c129d00-48fd-11ea-9020-2672225dd5ad.png)

# Sobre o projeto

A versão web do GoBarber é exclusiva para prestadores de serviços.Ou seja,clientes normais que desejam agendar algum atendimento não farão isto através da versão web,farão isto através da versão Mobile.

# Funcionalidades

- Ver a agenda de acordo com a data selecionada.
- Atualizar dados do perfil.
- Adicionar Avatar a conta.
- Recuperação de senha através de token enviado ao e-mail.

  
# Inicializando

Clone o repositório

````git clone https://github.com/lucasluz99/gobarberreactjs.git````

Entre na pasta

`cd gobarberreactjs`

Instale as dependências

 `yarn`
 
Inicie a aplicação

`yarn start`

Desta forma você terá acesso apenas ao frontend da aplicação,para ter acesso as funcionalidades acesse o repositório do nosso servidor [GoBarber Server](https://github.com/lucasluz99/gobarber).

# Contruído com

- [React](https://pt-br.reactjs.org/)
- [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [axios](https://github.com/axios/axios)
- [immer](https://github.com/immerjs/immer)
- [polished](https://polished.js.org/docs/#hidevisually)
- [react-icons](https://react-icons.netlify.com/#/)
- [react-toastify](https://github.com/fkhadra/react-toastify)
- [reactotron](https://github.com/infinitered/reactotron)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [styled-components](https://styled-components.com/)
- [yup](https://github.com/jquense/yup)
- [date-fns](https://date-fns.org/)
- [json-server](https://www.npmjs.com/package/json-server)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io)



