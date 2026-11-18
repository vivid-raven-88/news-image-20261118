# news-image-20261118

[![make.fun — news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/vivid-raven-88/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/vivid-raven-88/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

Entry for the make.fun bounty [Sum up 18 November's world news in one image](https://make.fun/bounty/news-image-20261118) — $250 shared by the 50 best entries, judged pairwise by an AI picture editor.

The entry is a single 1024×1024 image drawn as a newspaper front page for Wednesday 18 November 2026. It leads with the four stories a picture editor would put on the front page that day:

1. **Iran strikes Kuwait and Bahrain** — Tehran hits Gulf bases after the US struck a missile site on Qeshm Island.
2. **Xi hosts Putin in Shenzhen** — the two leaders meet a day before their trilateral talks with Trump.
3. **Peltola wins Alaska** — the Democrat takes the last undecided Senate race; Democrats reach 56 seats.
4. **Nvidia revenue doubles** — a $115.8 billion quarter, with a $130 billion outlook.

`main.ts` copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

No network access at run time; running it twice writes identical bytes.
