#!/bin/zsh
# Build and preview the site locally: ./serve.sh
set -e
cd "$(dirname "$0")"
bundle install --quiet
exec bundle exec jekyll serve
