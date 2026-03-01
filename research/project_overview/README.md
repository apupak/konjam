# KONJAM — Extended Environment Guidelines

**Welcome to the KONJAM project repository.**

This document acts as the root node for understanding the KONJAM ecosystem. If you are a new developer or an AI coding agent onboarding onto this project, **read this directory first**.

## Project Mission
KONJAM is an interactive, gamified learning platform designed to teach practical "survival" Tamil to expats, tech workers, and newcomers living in Bengaluru (Bangalore). 

Unlike traditional language learning apps that focus on formal grammar and rigid scripts, KONJAM focuses on **street-level utility**: phonetics, localized slang, and navigating high-stress scenarios (auto drivers, landlords, plumbers).

## The Dual-Repository Architecture
This project is built on an **Extended Environment** model:

1. **`konjam-private` (You are here)**: The Supersystem. This is the local staging area and "brain" of the project. It contains raw research, python script automation, podcast generation logic, raw transcriptions, and the `mkdocs` build environment.
2. **`konjam` (Public)**: The Subsystem. This is the static, front-facing website hosted on Cloudflare/GitHub Pages. It contains *only* the compiled assets and documentation. 

**Rule of Thumb:** All development, drafting, python scripting, and MkDocs serving happens in `konjam-private`. When a feature is ready, it is synced to `konjam` using the `scripts/sync_to_public.sh` script.

## Directory Map

* **`docs/`**: The core MkDocs content directory. This is mirrored directly to the public repository. It contains markdown lessons, CSS/JS assets, interactive games, and flashcards.
* **`research/`**: The knowledge base. This directory (which you are currently inside) is explicitly `.gitignore`'d from the public repo. It holds retrospective documents, transcript analysis, and architectural blueprints for future agents.
* **`scripts/`**: Automation tooling. Contains the `sync_to_public.sh` script, and is the planned home for Python-based language processing and podcast generation tooling.
* **`mkdocs.yml`**: The configuration file for the Material for MkDocs theme, which powers the site's layout, navigation, and plugin structure.

## Quick Start for Agents & Devs

1. **Local Server**: The site is built with MkDocs. To preview changes locally, run `python3 -m mkdocs serve -a 127.0.0.1:8000` from the repository root.
2. **State Management**: Wait! Do not reach for React or a database! The entire application state (streaks, badges, game progress, flashcards) operates *exclusively* on client-side `localStorage`. 
3. **Vanilla Web Tech**: Games are built in structural Vanilla JS and CSS under `docs/games/`. Native browser APIs (like Web Share) are preferred over heavy external dependencies.
4. **Agent Instructions**: See `agent_onboarding.md` for specific rules regarding how AI agents should interact with this codebase.

## Navigation
* Read [architecture.md](./architecture.md) for a deep dive into how MkDocs, the JS Engine, and LocalStorage interact.
* Read [features_and_state.md](./features_and_state.md) to understand the Gamification, WOTD, and sharing features.
* Read [agent_onboarding.md](./agent_onboarding.md) for directives on how to safely construct code in this repo.
