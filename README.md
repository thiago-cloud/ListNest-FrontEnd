
# 🛒 ListNest - Frontend

Este é o **frontend** da aplicação **ListNest**, um sistema de controle de listas de compras desenvolvido em Angular. A aplicação permite criar, visualizar e gerenciar listas de mercado de forma simples e intuitiva.

## 📁 Estrutura do Projeto

```
src/app/components/detalhe-lista -> Componente para visualização dos detalhes da lista
src/app/components/lista -> Componente para listagem geral das listas
src/app/model -> Modelos TypeScript (ItemLista, Lista, Produto)
src/app/services -> Serviços para consumo da API (listas, produtos, itens)

```

## 🧩 Funcionalidades

- 📋 Visualizar listas de compras
- 🛍️ Adicionar e remover itens
- ✅ Marcar itens como concluídos
- 💲 Visualizar valor total da lista
- 📅 Ver data da compra formatada
- 🔄 Integração com API RESTful (backend)

## 🚀 Tecnologias Utilizadas

- **Angular**
- **TypeScript**
- **HTML/CSS**
- **Bootstrap**
- **Font Awesome**
- **RxJS** (serviços)
- **Pipes personalizados** para formatação de datas e moedas

## 🛠️ Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/listnest-frontend.git
   cd listnest-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   ng serve
   ```

4. Acesse no navegador:

   ```
   http://localhost:4200
   ```

## 🔗 Integração com o Backend

Certifique-se de que o backend (ListNest-API) esteja rodando corretamente e que os serviços estejam apontando para a URL correta da API.

## 👨‍💻 Desenvolvedor

Feito por [Thiago Alves]  
