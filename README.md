# Projeto Full-Stack: Node + React + MySQL



### **1. Planejamento**

**Definir Requisitos Funcionais:** Determinar o que a aplicação precisa fazer (ex.: cadastro, login, edição e exclusão de usuários).

**Autenticação de Usuário**

- O Sistema deve permitir que o usuário insira um e-mail e senha.
- O sistema deve validar as credenciais do usuário contra uma base de dados
- O sistema deve exibir mensagem de erro adequadas se o login falhar

**Recuperação de Senha**

- O sistema deve permitir que o usuário clique em “Esqueci minha senha” para redefinir a senha
- O sistema deve enviar um e-mail de recuperação de senha com um link ou código de verificação.

**Registro de Usuário**

- O sistema deve oferecer um link para criar uma nova conta
- O formulário de registro deve validar os campos obrigatórios como nome, e-mail e senha

### **Manter Sessão Ativa (Lembrar-me)**

- O sistema deve permitir que o usuário escolha a opção "Lembrar-me" para manter a sessão ativa mesmo após o fechamento do navegador.
- O sistema deve manter a sessão segura, utilizando tokens ou cookies criptografados.

### **Proteção contra Brute Force (Login Limitado)**

- O sistema deve bloquear o usuário temporariamente após várias tentativas de login falhas.
- O sistema deve exibir uma mensagem de aviso ao bloquear temporariamente o login.

### **Redirecionamento após Login Bem-Sucedido**

- O sistema deve redirecionar o usuário para uma página protegida (dashboard, perfil, etc.) após o login com sucesso.

### **Deslogar com Segurança**

- O sistema deve oferecer uma opção para o usuário sair da conta de forma segura, encerrando a sessão.

**Estrutura do Banco de Dados:** Desenhar um modelo ER (Entidade-Relacionamento) simples para a tabela de usuários. Campos sugeridos:

- ID (chave primária)
- Nome
- Email
- Senha (hash)
- Data de cadastro

![img](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfpRnKOW1mt-VAHyIeN4rQ8hc6ZpovTOvaTGLZXNrRiDJ_bWo-Sil6CfYEL-7DHeA--yADE-bcFe3g6-Mz6ck3lzu8WMWsUoA7aelab_nxVdwnWeeAJtt0e-ZfblL-Kt8RrhmTvBvLVLrGR0LTqbTu0RBM5?key=MERUJHbVrWLfH3sByIKu8g)

**Definir Rotas da Aplicação:** Quais endpoints serão necessários (ex.: /register, /login, /profile).

**CRUD na tabela User**

- **GET** => /api/users = recupera lista com todos os usuários
- **GET** => /api/user/{id} = recupera informações sobre um usuário
- **POST** => /api/users => cria um registro no banco para um usuário
- **PUT** => /api/user/{id} => atualiza informações de um usuário
- **DELETE** => /api/user/{id} => deleta informações sobre uma conta

Endpoints para as páginas

/login => vai para a view de Login

/register => vai para a view de Registro

/profile => vai para a view de Perfil

Projeto Figma [Link](https://www.figma.com/design/s60GnAWRJ4TnmPbRb3AMkt/Untitled?node-id=0-1&node-type=canvas&t=NybDUQjE6uvadRUS-0)



 ~Por André Souza~ 