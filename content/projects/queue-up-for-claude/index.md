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

I wrote Queue up for Claude because I kept seeing useful coding tasks that were not urgent enough to spend interactive attention on. The tool stages those tasks locally and runs them near the end of a Claude.ai usage window when there is enough remaining plan capacity. A runner watches usage, stays in a default "chilling" state, and switches to "burning" near reset time. It then runs one queued task at a time through `claude -p`, records the outcome, and advances the queue.

The main design choice is context compilation. Each queued task gets a fresh `CLAUDE.md` built from the target project's `.agent/` files: agent identity, project context, behavior rules, capability boundaries, rolling procedural/semantic/episodic memory, output conventions, and the task prompt. That makes each autonomous run explicit about what it is allowed to do and what it should report back. Tasks can be prioritized, tagged, dependency-gated, retried, removed, or run in dry-run mode.

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

Security-wise, I keep the tradeoffs explicit. Usage checks rely on a Claude.ai `sessionKey` cookie and unofficial Claude.ai web endpoints, and task execution uses `claude -p --dangerously-skip-permissions`. The dashboard file browser is not path-scoped, so the repo recommends loopback or Tailscale access and password protection before any remote use.

The lesson from building it is that autonomous coding is mostly a systems problem: durable task state, recoverable logs, bounded permissions, clear context, and boring lifecycle transitions matter as much as the model prompt.

**Sources I leaned on:** classic job-queue and worker-runner patterns from systems engineering; ReAct-style agent papers for action/observation loops; and software-agent evaluation ideas such as SWE-bench for thinking about task state and reproducible outcomes.

**Technical stack:** Python 3.11+, Click, PyYAML, FastAPI, Alpine.js, Claude Code CLI, editable `setuptools` package, pytest.

**Keywords:** Claude Code queue, usage-aware runner, autonomous coding agents, local task queue, `queue-worker`, `queue-worker-web`, `.agent` context injection, `CLAUDE.md` compiler, capability profiles, observer, craftsman, committer, deployer, dependency-aware scheduling, priority queue, dry-run tasks, task retry, manual lifecycle commands, live logs, FastAPI dashboard, Alpine.js SPA, usage history, reset-anchored scheduling, lock-file recovery, episodic memory, semantic memory, procedural memory.
