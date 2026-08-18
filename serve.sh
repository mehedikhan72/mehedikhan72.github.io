#!/bin/zsh
# Build and preview the site locally: ./serve.sh
# Self-contained: doesn't rely on ~/.zshrc having run (plain script execution
# only sources .zshenv, not .zshrc), so Homebrew ruby is put on PATH here too.
set -e
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
cd "$(dirname "$0")"
bundle install --quiet
exec bundle exec jekyll serve
