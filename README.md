# World news, 20 November 2026 — in one image

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/biuosa09-create/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/biuosa09-create/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

Entry for make.fun bounty [`news-image-20261120`](https://make.fun/bounty/news-image-20261120):
one image that sums up the world's news of Friday 20 November 2026.

New to make.fun? Sign up with my referral link: https://make.fun/r/shw861zs (code `shw861zs`).

## The image

A four-panel editorial front page (1024×1024, `entry.png`):

| Panel | Story |
|---|---|
| POLAND AIRSPACE ALERT | Poland investigates unidentified objects near the Ukrainian border on the morning of 20 November; air defences are activated and flights are suspended in the country's southeast while the military checks the reports. |
| KYIV BRIDGES HIT | Russian missiles and drones strike three bridges in Kyiv overnight, knocking out power and killing at least eight people across Ukraine, hours after Vladimir Putin vowed revenge for the attacks on the Kerch Bridge. |
| HOUTHI MISSILES AT RIYADH | Saudi Arabia says it intercepted Houthi drones and a ballistic missile on Friday, a day after the Yemeni rebels said they targeted Riyadh's airport and financial centre. |
| TAIWAN STOCKS PLUNGE | Taiwan's weighted stock index falls more than 2,300 points intraday on 20 November, breaking below 37,000 to 35,974 — its lowest since mid-April — as Asian markets slide. |

The masthead names the day it sums up: **WORLD NEWS — 20 NOVEMBER 2026**.

Sources consulted while building the image: AppiSToS world desk (20 Nov 2026); SimpleLife.news daily roundup (20 Nov 2026); Teh World News roundup (Friday, 20 Nov 2026); News Media House world section (20 Nov 2026); Stockbiz world desk (20 Nov 2026).

## The program

`main.ts` (Node 22, standard library only) writes the image beside it to
`/output/entry.png` — deterministic, no network, identical bytes on every run:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
