#!/usr/bin/env bash
# Submit every URL in the live sitemap to IndexNow. Run after a deploy:
#   bash scripts/indexnow-submit.sh
# The key file is site/public/<KEY>.txt, served at https://cpp.anacay.org/<KEY>.txt.
# 200 or 202 is success.
set -euo pipefail

HOST="cpp.anacay.org"
KEY="${INDEXNOW_KEY:-921f6f2cf2490490cf43e1c4b329031c}"
KEY_LOCATION="https://$HOST/$KEY.txt"

live_key=$(curl -fsS "$KEY_LOCATION")
if [ "$live_key" != "$KEY" ]; then
  echo "key file at $KEY_LOCATION does not match the key; deploy it first" >&2
  exit 1
fi

urls=$(curl -fsS "https://$HOST/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed -e 's#<loc>##' -e 's#</loc>##')
count=$(printf '%s\n' "$urls" | grep -c .)
if [ "$count" -eq 0 ]; then
  echo "no <loc> entries in the sitemap" >&2
  exit 1
fi

url_list=$(printf '%s\n' "$urls" | sed -e 's/"/\\"/g' -e 's/.*/"&"/' | paste -sd, -)
body="{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"$KEY_LOCATION\",\"urlList\":[$url_list]}"

status=$(curl -s -o /dev/null -w "%{http_code}" -X POST https://api.indexnow.org/indexnow \
  -H "Content-Type: application/json; charset=utf-8" -d "$body")

echo "IndexNow: HTTP $status, $count URLs sent"
case "$status" in
  200|202) ;;
  *) exit 1 ;;
esac
