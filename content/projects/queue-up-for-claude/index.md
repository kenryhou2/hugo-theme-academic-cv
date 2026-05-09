---
title: Queue up for Claude
date: 2026-05-06
summary: A local, usage-aware job queue for Claude Code that stages coding tasks, injects per-project agent context, and runs queued work near the end of a Claude.ai usage window.
links:
  - type: site
    url: https://github.com/kenryhou2/queue-up-for-claude
tags:
  - Claude Code
  - agent automation
  - usage-aware scheduling
  - developer tooling
  - CLI
  - FastAPI
  - Alpine.js
  - workflow automation
  - task queue
---

Queue up for Claude is a local automation tool for staging Claude Code tasks and spending otherwise-idle Claude.ai plan capacity. A runner watches usage, stays in a default "chilling" state, and switches to "burning" near reset time when enough plan budget remains. It then runs one queued task at a time through `claude -p`, records the outcome, and advances the queue.

Each queued task gets a fresh `CLAUDE.md` compiled from the target project's `.agent/` files: agent identity, project context, behavior rules, capability boundaries, rolling procedural/semantic/episodic memory, output conventions, and the task prompt. Tasks can be prioritized, tagged, dependency-gated, retried, removed, or run in dry-run mode.

The CLI exposes the main workflow:

```bash
queue-worker init <project_dir>
queue-worker add <project_dir> "Add input validation" --level craftsman -p 2
queue-worker ls --status pending
queue-worker next --json-out
queue-worker context <task_id>
queue-worker run --once
queue-worker retry <task_id>
queue-worker logs --task <task_id>
```

It also includes manual lifecycle commands (`begin`, `done`, `fail`, `stall`), a `compile` command for generating daytime interactive context, and task controls for `--depends-on`, `--dry-run`, `--tag`, `--max-minutes`, and automation levels from `observer` through `deployer`.

The repo also ships a local FastAPI + Alpine.js dashboard via `queue-worker-web` with task CRUD, live terminal output, usage charts, log viewing, runner status, and a file browser. The queue records task YAML under lifecycle folders such as `pending/`, `running/`, `done/`, `unfinished/`, and `failed/`, while the runner handles lock files, dead-PID recovery, `CLAUDE.md` backup restoration, and reset-anchor state in `state/runner_state.json`.

Security-wise, the project is intentionally explicit: usage checks rely on a Claude.ai `sessionKey` cookie and unofficial Claude.ai web endpoints, and task execution uses `claude -p --dangerously-skip-permissions`. The dashboard file browser is not path-scoped, so the repo recommends loopback/Tailscale access and password protection before any remote use.

No suitable demo GIF or reusable image asset is present in the local project or source repository checkout, so the page currently omits a demo embed instead of linking to a placeholder.

**Technical stack:** Python 3.11+, Click, PyYAML, FastAPI, Alpine.js, Claude Code CLI, editable `setuptools` package, pytest.

**Keywords:** Claude Code queue, usage-aware runner, autonomous coding agents, local task queue, `queue-worker`, `queue-worker-web`, `.agent` context injection, `CLAUDE.md` compiler, capability profiles, observer, craftsman, committer, deployer, dependency-aware scheduling, priority queue, dry-run tasks, task retry, manual lifecycle commands, live logs, FastAPI dashboard, Alpine.js SPA, usage history, reset-anchored scheduling, lock-file recovery, episodic memory, semantic memory, procedural memory.
