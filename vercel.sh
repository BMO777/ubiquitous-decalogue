#!/bin/bash

# This script is used by Vercel to determine if a build should proceed.
# It checks if the current branch is 'gh-pages'.

if [[ "$VERCEL_GIT_COMMIT_REF" == "gh-pages" ]] ; then
  # Proceed with the build
  echo "✅ - Build can proceed"
  exit 1;
else
  # Don't build
  echo "🛑 - Build cancelled"
  exit 0;
fi