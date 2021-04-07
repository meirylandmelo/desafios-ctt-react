# Clone Empório da Cerveja

## Clone de e-commerce para se cadastrar e adicionar produtos ao carrinho de compras.

### 🎲 Rodando o projeto

```bash
# Clone este repositório
$ git clone <https://github.com/meirylandmelo/desafios-ctt-react/tree/main/desafio5-emporio-bebidas>

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio5-emporio-bebidas

# Vá para a pasta backend
$ cd backend

# Instale as dependências
$ yarn install ou npm install

# Execute a aplicação
 json-server db.json -m ./node_modules/json-server-auth -r routes.json --port 4000

# Vá para a pasta frontend
$ cd frontend

# Instale as dependencias
$ yarn install ou npm install

# Execute a aplicação
$ yarn start ou npm run start
```

### Features

- [x] Login (cadastrar usuário)
- [x] Home (header com categorias e link para o carrinho)
- [x] Cart (listagem dos produtos selecionados na home, adicina e exclui produtos e botão de finalização)
