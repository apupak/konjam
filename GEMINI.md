# KONJAM (Private Context & Architecture)

**Welcome to the Extended Environment.** 🔐

This repository, **konjam-private**, is the superset of the public **konjam** project. It serves as the internal staging area and "brain" for the project.

## 🎯 Repository Role
While the public repo is for the static site, this private repo is for:
*   **Complete content mirroring**: All documentation from the public site.
*   **Extended Tooling**: Python scripts for data processing, flashcard generation, or scraping.
*   **Knowledge Bases**: Raw research, sensitive data, or "work in progress" content not yet ready for public consumption.
*   **Drafting**: New chapters or architectural changes are tested here first.

## 🏗️ Architecture (Extended)

### Directory Structure
*   `docs/`: Mirrored from public (Source of Truth for the site).
*   `mkdocs.yml`: Mirrored configuration.
*   `scripts/`: [Planned] Python scripts for language processing. DO NOT MIRROR THIS TO THE PUBLIC REPOSITORY.
*   `research/`: [Planned] Knowledge bases and raw data. DO NOT MIRROR THIS TO THE PUBLIC REPOSITORY.

### Configuration & State
*   **Git Identity**: Apoorva (apoorvapakhle@gmail.com)
*   **Authentication**: SSH (id_ed25519) configured on this device.
*   **Remotes**:
    *   `origin`: `git@github.com:apupak/konjam-private.git` (Private)
    *   `public`: `https://github.com/apupak/konjam.git` (Public)

## 🛠️ Operational Workflow
1.  **Syncing**: Changes are typically developed here and then pushed to the public repo once finalized.
2.  **Scripts**: Any Python automation should reside in this repo.
3.  **Local Development**:
    *   `mkdocs serve` can be run using `/Users/apupak/Library/Python/3.9/bin/mkdocs serve`.
    *   Dependencies are installed locally via `pip3 install mkdocs-material`.
4.  **Deployments**: The public repository handles the live site.
