#!/usr/bin/env python3
"""Static compatibility gate for Yelp-facing Hidden Laws links and bookings."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
BOOKING = "https://cal.com/ascend-5vlj4z/"
EXPECTED = {
    "consultation", "private-session", "ancestral-roots",
    "qigong-session", "energy-massage-ida-kaleidoscope",
}
class Tags(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.hrefs = []
        self.meta = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"): self.ids.add(a["id"])
        if tag == "a" and a.get("href"): self.hrefs.append(a["href"])
        if tag == "meta": self.meta.append(a)

def parse(name):
    p = Tags()
    p.feed((ROOT / name).read_text(encoding="utf-8"))
    return p

home = parse("index.html")
massage = parse("massage.html")
errors = []
def check(statement, message):
    if not statement: errors.append(message)

for anchor in ["work", "practice", "ancestral", "ascend", "teachings", "about", "booking", "contact"]:
    check(anchor in home.ids, f"Missing Yelp-compatible page anchor: #{anchor}")
check((ROOT / "massage.html").is_file(), "Missing massage.html")
for slug in EXPECTED:
    check(any(h == BOOKING + slug for h in home.hrefs + massage.hrefs),
          f"Missing existing Cal.com booking link: {slug}")
check("/massage.html" in home.hrefs, "Missing internal Energy Massage detail link")
check(any(h == BOOKING+"energy-massage-ida-kaleidoscope" for h in home.hrefs),
      "Missing direct homepage Energy Massage booking link")
check(any(a.get("name") == "description" for a in home.meta),
      "Homepage meta description missing")
check(any(a.get("name") == "description" for a in massage.meta),
      "Massage meta description missing")

if errors:
    for error in errors: print("FAIL:", error)
    raise SystemExit(1)
print("PASS: booking paths, anchors, page files, and descriptions are present.")
print("NOTE: This static gate cannot verify live /massage routing, calendar availability, or Yelp redirects.")
