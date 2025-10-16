# AGENTS.md

## Overview

This repository uses multiple agent-like components and design patterns to orchestrate AI, queue, and worker services. The main agents are:

### 1. LLM Agents

- **Location:** `common/llm/`
- **Purpose:** Abstraction for interacting with large language models (OpenAI, Gemini, etc.)
- **Pattern:** Adapter Protocols (`ModelAdapter`), Factory (`create_chatbot`)
- **Usage:** Backend and worker use these agents to generate, structure, and validate meeting minutes and other outputs.

### 2. Worker Agents

- **Location:** `worker/`
- **Purpose:** Asynchronous processing of queued tasks (transcription, LLM calls, edits)
- **Pattern:** Service class (`WorkerService`), Ray distributed queue, signal handling
- **Usage:** Reads from queue, dispatches to LLM or transcription, updates DB

### 3. Template Agents

- **Location:** `common/templates/`
- **Purpose:** Encapsulate logic for generating meeting minutes in different formats
- **Pattern:** Protocols (`Template`, `SimpleTemplate`, `SectionTemplate`), Factory
- **Usage:** Backend discovers and uses templates for different meeting types

### 4. Frontend Instrumentation

- **Location:** `frontend/instrumentation.ts`, `frontend/components/audio/tab-recorder/instructions.tsx`
- **Purpose:** Guides user interaction, records events, and provides instructions

## Conventions

- **Async/await:** Used for all agent operations (LLM, worker, queue)
- **Pydantic models:** Used for structured data exchange between agents
- **Protocol/Factory:** Used for extensibility and testability
- **Environment variables:** Used for agent configuration

## Extending Agents

- Implement new templates in `common/templates/` using the provided protocols
- Add new LLM adapters in `common/llm/adapters/`
- Extend worker logic in `worker/worker_service.py`

## References

- See `README.md` for project structure and template extension
- See `tests/` for TDD examples and agent test coverage

## Markdown Syntax Compliance

All Markdown files in this repository, including `AGENTS.md`, must follow syntax rules:

- Blank lines before and after headings
- Blank lines before and after lists
- Fenced code blocks must specify a language (e.g. ```python)
- No bare URLs; use descriptive Markdown links
- Avoid trailing whitespace
- Pass markdownlint (MD022, MD032, MD040, MD034, etc.) without warnings
