
# ResourceFlow Repository Instructions

## Project Goal

ResourceFlow is a production-style B2B resource planning application built as a portfolio project for a Full-Stack TypeScript Developer role.

Prefer simple, correct, tested, and understandable solutions.

## Architecture

- Use a modular monolith.
- Do not introduce microservices without explicit justification.
- Frontend code belongs in `apps/web`.
- Backend code belongs in `apps/api`.
- Shared code belongs in `packages/shared` only when sharing is actually required.
- Controllers must not contain business logic.

## Frontend

- Use React, Next.js, TypeScript, Tailwind CSS, and TanStack Query.
- Use TanStack Query for server state.
- Keep components focused and reasonably small.
- Handle loading, empty, and error states.
- Preserve accessibility and semantic HTML.

## Backend and Data

- Use NestJS, PostgreSQL, and Prisma.
- All organization-owned data must be tenant-scoped.
- Important business rules must have tests.
- Do not expose database entities directly when an API contract is required.

## Security

- Never commit secrets or real customer data.
- Do not weaken authentication, authorization, RBAC, or tenant isolation.
- Treat authorization and tenant isolation changes as high-risk work.

## Agent Workflow

- Inspect the existing implementation before making changes.
- For large changes, propose a plan, risks, and required tests before implementation.
- Do not modify unrelated code.
- Do not add dependencies without a concrete reason.
- Run relevant lint, typecheck, tests, and build checks.
- Never treat generated code as complete until its behavior and trade-offs are understood.

## Language

- Code, comments, commits, Issues, ADRs, README, and PR descriptions must be written in English.
