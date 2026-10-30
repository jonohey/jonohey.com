#!/usr/bin/env bash
# Prints a markdown table of the Lighthouse scores in .lighthouseci for the
# job summary. Usage: lighthouse-summary.sh "<heading>"
set -euo pipefail

reports=(.lighthouseci/lhr-*.json)
[ -e "${reports[0]}" ] || exit 0

echo "### $1"
echo
echo "| Page | Performance | Accessibility | Best practices | SEO |"
echo "| --- | --- | --- | --- | --- |"
jq -r '"| \(.finalUrl | sub("^http://localhost:3000"; "") | if . == "" then "/" else . end) | \(.categories.performance.score * 100 | round) | \(.categories.accessibility.score * 100 | round) | \(.categories["best-practices"].score * 100 | round) | \(.categories.seo.score * 100 | round) |"' "${reports[@]}" | sort
