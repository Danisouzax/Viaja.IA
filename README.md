# 🌴 Viaja.AI

**Viaja.AI** é um assistente de viagens inteligente que usa **IA da Cohere** para recomendar destinos personalizados com base no clima, interesses e data de viagem informados pelo usuário.

🔗 [Acesse a versão online do projeto](https://viaja-ia.vercel.app)

---

## 🚀 Funcionalidades

- Escolha entre diferentes climas preferidos (quente, frio, tropical).
- Informe seus interesses (ex: cultura, praia, aventura...).
- Selecione uma data da viagem.
- Receba sugestões de destinos com inteligência artificial.

---

## 🧠 Tecnologias utilizadas

- **HTML**, **CSS** e **JavaScript Vanilla**
- **API Cohere** (para gerar recomendações inteligentes)
- **Vercel Functions** (função serverless com Node.js)
- **Hospedagem via Vercel**

---

## 🗂️ Estrutura do Projeto

ViajaAI/

│
├── api/
│ └── recommend.js # Função serverless para chamada da API da Cohere
│
├── public/
│ ├── index.html # Página principal do projeto
│ ├── style.css # Estilo da aplicação
│ └── script.js # Script JS para envio do formulário e exibição da resposta
│
├── vercel.json # Roteamento da função API na Vercel
