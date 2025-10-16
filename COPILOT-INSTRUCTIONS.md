# COPILOT-INSTRUCTIONS.md

## Coding Conventions

- Use `async`/`await` for all I/O and agent operations
- Use Pydantic models for structured data
- Follow Protocol/Factory patterns for extensibility
- Use environment variables for secrets and configuration
- All code and documentation must be fully Markdown-compliant

## Test Driven Development (TDD)

- All new features and bugfixes must include tests in `tests/`
- Use `pytest` and `pytest.mark.asyncio` for async tests
- Use parameterized tests for coverage of multiple cases
- Run tests with `make test` or `pytest tests/`
- For paid API/LLM tests, set `ALLOW_TESTS_TO_ACCESS_PAID_APIS=1` in `.env`

## Documentation

- Document all major changes in `CHANGELOG.md`
- Document agent patterns and architecture in `AGENTS.md`
- Document local development in `LOCAL_DEV.md`
- Use code comments and docstrings for all public functions/classes

## File Structure

- `backend/`: FastAPI backend
- `worker/`: Ray-based worker for queue/LLM tasks
- `common/`: Shared logic, templates, adapters, types
- `frontend/`: Next.js frontend
- `tests/`: All test code

## Extending

- Add new templates in `common/templates/` using Protocols
- Add new LLM adapters in `common/llm/adapters/`
- Extend worker logic in `worker/worker_service.py`

## Markdown Syntax Compliance

All Markdown files in this repository, including `AGENTS.md`, must follow syntax rules:

- Blank lines before and after headings
- Blank lines before and after lists
- Fenced code blocks must specify a language (e.g. ```python)
- No bare URLs; use descriptive Markdown links
- Avoid trailing whitespace
- Pass markdownlint (MD022, MD032, MD040, MD034, etc.) without warnings

## Example Test

async def test_chatbot_returns_expected_response():
chatbot = create_chatbot(model_type="openai", model_name="gpt-4o-2024-08-06", temperature=0.0)
messages = [
{"role": "system", "content": "You are a helpful assistant."},
{"role": "user", "content": "Hello!"},
]
response = await chatbot.chat(messages)
assert "Hello" in response

```

```
