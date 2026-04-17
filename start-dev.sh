#!/bin/bash
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"
cd /Users/haashir/IdeassionGroup/ideassion-group
exec npm run dev -- --port ${PORT:-5173}
