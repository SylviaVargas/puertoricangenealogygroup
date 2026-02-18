#!/usr/bin/env bash
# serve.sh — Local development server for Ruby 4.0+
# Applies a compatibility patch before Jekyll loads, then starts the server.
#
# Usage:
#   ./serve.sh              # serve with live reload
#   ./serve.sh --no-watch   # build only, no watch

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
export RUBYOPT="-r ${SCRIPT_DIR}/_ruby4_patch.rb"

exec bundle exec jekyll serve --livereload "$@"
