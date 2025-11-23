# 📚 Guia de Metodologias Ágeis

Este é um projeto **Front-end** simples que funciona como uma base de conhecimento interativa e responsiva para metodologias ágeis (Scrum, Kanban, XP) e conceitos relacionados.

---

### 📜 Descrição do Projeto

O objetivo principal é fornecer uma interface limpa e rápida para consulta de informações sobre metodologias de desenvolvimento. A aplicação carrega os dados de um arquivo **data.json** e os exibe em formato de "cards". O destaque é a funcionalidade de **busca dinâmica** que filtra os resultados em tempo real com base no que o usuário digita.

---

### ✨ Funcionalidades

* **Busca Dinâmica:** O campo de busca permite filtrar os resultados por **título**, **descrição** ou **caso de uso** (`uso`).
* **Listagem de Conteúdo:** Todos os itens da base de conhecimento são exibidos ao carregar a página.
* **Exibição em Cards:** Cada item é apresentado em um card individual, contendo: **Título**, **Descrição**, **Uso** e **Link para "Saiba mais"**.
* **Design Responsivo:** A estrutura se adapta a diferentes tamanhos de tela (desktop e mobile).

---

### 🛠️ Estrutura dos Arquivos

| Arquivo | Descrição |
| :--- | :--- |
| `index.html` | Estrutura principal da página (cabeçalho, formulário de busca e seção de resultados). |
| `style.css` | Define todo o layout e estilo da aplicação. |
| `app.js` | Contém toda a **lógica client-side**: Carregamento de dados (Fetch API), renderização dinâmica e função de filtragem em tempo real. |
| `data.json` | Banco de dados simples da aplicação, contendo o array de objetos com os campos `titulo`, `descricao`, `uso` e `link`. |

---
