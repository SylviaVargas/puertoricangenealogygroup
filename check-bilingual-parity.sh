#!/bin/bash
# check-bilingual-parity.sh
# Compares heading structure between EN and ES research guide file pairs.
# Flags pairs where the EN file has significantly more headings than the ES file.
# Exits 0 if no gaps found, 1 if gaps detected.

GUIDES_DIR="_research-guides"
GAPS=0

echo "=== Bilingual Parity Check ==="
echo ""

while IFS= read -r en_file; do
  filename=$(basename "$en_file")
  dir=$(dirname "$en_file")

  # Derive ES counterpart by prepending es- to filename
  es_file="$dir/es-$filename"

  [ -f "$es_file" ] || continue

  # Count ## headings (lines starting with exactly "## ", not "### ")
  en_h2=$(grep -c '^## ' "$en_file" 2>/dev/null); en_h2=${en_h2:-0}
  es_h2=$(grep -c '^## ' "$es_file" 2>/dev/null); es_h2=${es_h2:-0}

  # Count ### headings
  en_h3=$(grep -c '^### ' "$en_file" 2>/dev/null); en_h3=${en_h3:-0}
  es_h3=$(grep -c '^### ' "$es_file" 2>/dev/null); es_h3=${es_h3:-0}

  h2_diff=$(( en_h2 - es_h2 ))
  h3_diff=$(( en_h3 - es_h3 ))

  # Flag if EN has more than 1 extra heading at either level
  if [ "$h2_diff" -gt 1 ] || [ "$h3_diff" -gt 1 ]; then
    GAPS=1
    echo "GAP DETECTED: $en_file vs $es_file"
    printf "  ## headings  — EN: %d  ES: %d\n" "$en_h2" "$es_h2"
    printf "  ### headings — EN: %d  ES: %d\n" "$en_h3" "$es_h3"
    echo ""
    echo "  EN headings:"
    grep '^## \|^### ' "$en_file" | sed 's/^/    /'
    echo ""
    echo "  ES headings:"
    grep '^## \|^### ' "$es_file" | sed 's/^/    /'
    echo ""
  fi
done < <(find "$GUIDES_DIR" -name "*.md" ! -name "es-*" | sort)

if [ "$GAPS" -eq 0 ]; then
  echo "No parity gaps detected across all EN/ES guide pairs."
fi

exit $GAPS
