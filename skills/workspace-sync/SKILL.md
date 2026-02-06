---
name: workspace-sync
description: Synchronize files between workspace directories and agent directories with automatic detection of new agents
metadata:
  {
    "openclaw":
      {
        "emoji": "🔄",
        "requires": { "bins": ["bash"] }
      }
  }
---

# Workspace Sync Skill

Automatically synchronizes configuration files between individual workspace directories and their corresponding agent directories. The skill dynamically detects new agents and creates appropriate workspace directories for them.

## Features

- **Dynamic agent detection**: Automatically discovers new agents in the `.openclaw/agents/` directory
- **Automatic workspace creation**: Creates corresponding workspace directories for new agents
- **Selective file sync**: Syncs specific configuration files (AGENTS.md, SOUL.md, TOOLS.md, etc.)
- **Memory directory sync**: Synchronizes memory directories between workspaces and agents
- **Safe operation**: Only copies files from workspace to agent, preserving workspace integrity

## Configuration Files Synced

- AGENTS.md
- BOOTSTRAP.md
- SOUL.md
- TOOLS.md
- IDENTITY.md
- USER.md
- HEARTBEAT.md
- MEMORY.md
- memory.md
- memory/ directory

## Workspace-Agent Mapping

- main agent ↔ /Users/lyyy/.openclaw/workspace
- other agents ↔ /Users/lyyy/.openclaw/workspace-[agent-name]

## Usage

The synchronization happens automatically via a cron job that runs every 2 hours, but can be triggered manually if needed.

## Operation

1. Detects all agents in the `.openclaw/agents/` directory
2. For each agent, determines the corresponding workspace directory
3. Copies files from workspace to agent directory
4. Preserves all content in workspace directories without modification