#!/usr/bin/env bash
# Invite a GitHub user as CMS editor (Write access).
# Usage: ./scripts/invite-cms-editor.sh GITHUB_USERNAME

set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "Usage: $0 GITHUB_USERNAME" >&2
  exit 1
fi

USER="$1"
REPO="tamascsoke/beans-and-barrels"

gh api "repos/${REPO}/collaborators/${USER}" \
  -X PUT \
  -f permission=push

echo "Invitation sent to ${USER}. They must accept the GitHub email invite before logging in at /admin."
