# project-os

> A reusable fullstack development system for building modern applications without repeating yourself.

## Overview

`project-os` is an opinionated development foundation designed to standardize how projects are built, structured, and scaled.

The goal is simple:

- eliminate repetitive setup
- enforce consistent architecture
- accelerate development
- improve maintainability
- create reusable workflows across projects

This repository reflects a personal methodology for building production-ready applications using modern fullstack technologies.

---

## Philosophy

Every project starts with the same recurring problems:

- folder structure decisions
- authentication setup
- database configuration
- API patterns
- state management
- validation
- environment management
- deployment workflows
- code quality tooling

`project-os` exists to solve these problems once and reuse the solution everywhere.

---

## Core Principles

### Reusability
Build systems and patterns once, then reuse them across projects.

### Scalability
Architecture should support growth from MVP to production-scale applications.

### Consistency
Use predictable conventions across the entire stack.

### Developer Experience
Reduce friction and cognitive overhead during development.

### Maintainability
Keep codebases modular, clean, and easy to evolve.

---

## Tech Stack

Current stack includes:

- Next.js
- TypeScript
- Node.js
- Tailwind CSS
- Prisma
- PostgreSQL
- Authentication system
- API layer
- Reusable UI architecture
- Environment configuration
- Developer tooling

---

## Features

- Opinionated project structure
- Modular architecture
- Reusable application patterns
- Authentication foundation
- Database integration
- API organization
- Shared utilities
- Environment management
- Linting and formatting
- Scalable folder conventions
- Deployment-ready configuration

---

## Project Structure

## Project Structure

```bash
src/
├── app/          # Next.js App Router
├── components/   # Reusable UI and layout components
├── contexts/     # React contexts and providers
├── features/     # Feature-based modules
├── hooks/        # Custom React hooks
├── lib/          # Third-party integrations and shared libraries
├── helpers/      # Utility functions
├── styles/       # Global styles, themes, SCSS architecture
├── types/        # Shared TypeScript types
├── constants/    # Application constants
└── messages/     # Internationalization resources
```

### Folder Responsibilities

- **app** → Routes, layouts, pages, server components.
- **components** → Reusable UI and layout building blocks.
- **contexts** → Theme, language, auth and other providers.
- **features** → Business features grouped by domain.
- **hooks** → Reusable custom hooks.
- **lib** → API clients, external integrations, shared libraries.
- **helpers** → Pure utility functions.
- **styles** → Design system, themes, global styles.
- **types** → Shared TypeScript interfaces and types.
- **constants** → Static configuration values.
- **messages** → Translation dictionaries.

## Documentation

- Responsive System → `docs/responsive-system.md`