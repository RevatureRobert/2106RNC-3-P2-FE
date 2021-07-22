#!/bin/bash
npm install --force
npm update

# # installs depcheck which goes through and will list and unused packages or missing packages
# npm install -g depcheck
# # npm install -g depcheck typescript
# npx depcheck

# # npm-check checks for outdated, incorrect, and unused dependencies
# npm install -g npm-check
# npx npm-check

# # uncomment to remove all unused deps
# # bash ./.devcontainer/removeUnusedDeps.sh

# # uncomment out if you want the list of all global packages
# npm list -g