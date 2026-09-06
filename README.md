# 🏥 HospTech - Triagem Inteligente

<div align="center">

![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=for-the-badge&logo=Bootstrap&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-3BABC3.svg?style=for-the-badge&logo=Flask&logoColor=white)
![OpenRouter](https://img.shields.io/badge/OpenRouter-94A3B8.svg?style=for-the-badge&logo=OpenRouter&logoColor=white)
![Render](https://img.shields.io/badge/Render-000000.svg?style=for-the-badge&logo=Render&logoColor=white)

🌐 **Acesse a aplicação online:** [sistema-triagem-hospitalar-1.onrender.com](https://sistema-triagem-hospitalar-1.onrender.com/)

</div>

---

## 🎨 Sobre o Projeto

Sistema web de triagem hospitalar inteligente baseado no Protocolo Manchester, impulsionado por Inteligência Artificial (OpenRouter) e integrado com uma API em Flask. A interface foi desenvolvida seguindo padrões modernos de *Clean Dashboard* com tons de verde esmeralda, oferecendo uma experiência limpa e focada na usabilidade clínica.

---

## ✨ Funcionalidades

* **Entrada de Prontuário:** Área dedicada ao registro detalhado do relato de sintomas do paciente.
* **Triagem por IA:** Análise automatizada via OpenRouter para predição rápida do nível de risco.
* **Classificação de Risco (Protocolo Manchester):**
  * 🔴 **EMERGÊNCIA:** Risco imediato à vida.
  * 🟡 **URGÊNCIA:** Necessidade de atendimento rápido.
  * 🟢 **POUCO URGENTE:** Sintomas leves ou estáveis.
* **Recomendação de Especialidade:** Identificação da área médica ideal para o encaminhamento.
* **Parecer Clínico:** Justificativa detalhada gerada pela inteligência artificial.

---

## 🛠️ Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3 (Variáveis customizadas), JavaScript (Vanilla Async/Await) e Bootstrap 5.
* **Back-end:** Python / Flask.
* **Inteligência Artificial:** OpenRouter API.
* **Deploy:** Render.

---

## 📂 Estrutura de Arquivos

```text
/
├── app.py           # Configuração da API Flask e rotas
├── static/          
│   ├── style.css    # Estilização e design responsivo
│   └── script.js    # Lógica de consumo da API e manipulação do DOM
└── templates/
    └── index.html   # Interface principal da aplicação

```

---

## 🚀 Como Executar Localmente

1. Clone o repositório na sua máquina:
```bash
git clone [https://github.com/seu-usuario/hosptech-triagem.git](https://github.com/seu-usuario/hosptech-triagem.git)

```


2. Certifique-se de configurar a variável de ambiente da API Key do OpenRouter:
```bash
export OPENROUTER_API_KEY="sua_chave_aqui"

```


3. Instale as dependências e execute o projeto com o Python:
```bash
pip install flask requests
python app.py

```


4. Acesse pelo navegador em `http://127.0.0.1:5000`.

