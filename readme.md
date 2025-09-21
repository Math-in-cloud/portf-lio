# Backlog Técnico Inicial (FastAPI + Python + PostgreSQL)

Este backlog cobre **as 3 primeiras fases** (MVP) do seu SaaS de agendamentos, baseado em **FastAPI + PostgreSQL + Stripe**. As tarefas estão divididas em **Epics** e **Issues** com subtarefas práticas.

---

## Epic 1 — Setup do Projeto (Ambiente & Estrutura)

### Issue 1.1 — Configurar repositório

* [ ] Criar repositório no GitHub.
* [ ] Definir `.gitignore` (Python, venv, migrations, etc.).
* [ ] Adicionar README inicial com visão do projeto.

### Issue 1.2 — Ambiente Python & dependências

* [ ] Criar ambiente virtual (`python -m venv venv`).
* [ ] Instalar dependências básicas:

  ```bash
  pip install fastapi uvicorn[standard] python-dotenv psycopg2-binary sqlalchemy alembic pydantic
  ```
* [ ] Adicionar linter e formatter (black, isort, flake8).

### Issue 1.3 — Estrutura inicial do projeto

* [ ] Criar diretório `app/` com subpastas: `routers`, `models`, `schemas`, `core`, `db`.
* [ ] Criar arquivo `main.py` com rota healthcheck (`/ping`).
* [ ] Configurar Uvicorn para rodar local (`uvicorn app.main:app --reload`).

---

## Epic 2 — Banco de Dados & ORM

### Issue 2.1 — Setup PostgreSQL local

* [ ] Subir PostgreSQL via Docker Compose.
* [ ] Criar banco `saas_agendamentos_dev`.

### Issue 2.2 — Configurar SQLAlchemy + Alembic

* [ ] Criar engine em `db/session.py`.
* [ ] Configurar base `declarative_base`.
* [ ] Gerar primeira migration (`alembic init`).

### Issue 2.3 — Modelagem inicial

* [ ] Criar modelos:

  * Tenant (id, name, created\_at)
  * User (id, tenant\_id, email, password\_hash, role)
  * Client (id, tenant\_id, name, contact\_info)
  * Service (id, tenant\_id, name, duration, price)
  * Appointment (id, tenant\_id, client\_id, service\_id, start, end, status)
* [ ] Rodar migrations (`alembic upgrade head`).

### Issue 2.4 — Multitenancy com Row-Level Security (RLS)

* [ ] Habilitar RLS em tabelas (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY`).
* [ ] Criar policies básicas de isolamento por `tenant_id`.
* [ ] Testar queries para validar isolamento.

---

## Epic 3 — API Core (CRUDs + Auth)

### Issue 3.1 — Configurar autenticação JWT

* [ ] Instalar libs: `pip install passlib[bcrypt] python-jose`.
* [ ] Criar rota `/auth/signup` (criação de usuário + tenant).
* [ ] Criar rota `/auth/login` (gera access + refresh token).
* [ ] Criar middleware de autenticação para proteger rotas.

### Issue 3.2 — CRUD Tenants

* [ ] Rota para listar tenants (somente admin global).
* [ ] Rota para detalhar tenant.

### Issue 3.3 — CRUD Users

* [ ] Rotas para criar/editar/excluir usuários (restrito ao admin do tenant).
* [ ] Rota para alterar senha.

### Issue 3.4 — CRUD Clients

* [ ] Rotas CRUD para clientes.

### Issue 3.5 — CRUD Services

* [ ] Rotas CRUD para serviços.

### Issue 3.6 — CRUD Appointments

* [ ] Rotas CRUD para agendamentos.
* [ ] Integração com FullCalendar (endpoint que retorna lista de eventos por data).

---

## Epic 4 — Integração Stripe (Billing MVP)

### Issue 4.1 — Configuração inicial

* [ ] Criar conta Stripe (modo teste).
* [ ] Instalar SDK: `pip install stripe`.
* [ ] Configurar variáveis de ambiente (`STRIPE_API_KEY`).

### Issue 4.2 — Criar produtos e planos no Stripe

* [ ] Criar 1 produto (ex.: Plano SaaS Básico) com cobrança mensal.
* [ ] Salvar IDs no banco (tabela `plans`).

### Issue 4.3 — Checkout + Webhooks

* [ ] Criar rota `/billing/checkout` que gera sessão de pagamento.
* [ ] Configurar endpoint `/billing/webhook` para capturar eventos (`checkout.session.completed`, `invoice.paid`).
* [ ] Atualizar status do tenant após pagamento.

---

## Epic 5 — Frontend MVP (Next.js + Tailwind + FullCalendar)

*(mesmo que você foque primeiro no backend, já deixo o backlog preparado para o painel)*

### Issue 5.1 — Setup do projeto Next.js

* [ ] Criar app Next.js com `npx create-next-app@latest`.
* [ ] Instalar TailwindCSS.
* [ ] Configurar layout base (navbar, sidebar).

### Issue 5.2 — Autenticação

* [ ] Tela de login que consome API `/auth/login`.
* [ ] Armazenar token em cookie seguro.

### Issue 5.3 — Painel de agendamentos

* [ ] Integrar FullCalendar.
* [ ] Listar eventos a partir do endpoint de Appointments.
* [ ] Formulário para criar novo agendamento.

---

# Entregável do MVP

👉 Usuário consegue:

1. Criar conta (signup com tenant).
2. Fazer login.
3. Criar clientes, serviços e agendamentos.
4. Ver agendamentos em um calendário (frontend).
5. Assinar plano via Stripe (modo teste) e ter tenant ativado após pagamento.

---

Se quiser, posso converter isso em **issues formatadas para GitHub (YAML/CSV)**, que você importa direto e já vira board de Kanban. Quer que eu monte nesse formato para você?
