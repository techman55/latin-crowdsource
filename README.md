# latin-crowdsource
Crowdsourcing program for latin sentence translating practice

## Demo hosted at... 
## [tcmn.cc/crowd](https://tcmn.cc/crowd)

***********

## How to view data...

#### Using one of the practice apps
- with certified dataset: [latin.jesuitnotes.com](https://latin.jesuitnotes.com) (*hosted by [@darrinhaase](https://github.com/darrinhaase)*)
- live, uncertified dataset, directly connected to crowdsource, with beta features: [tcmn.cc/latin](https://tcmn.cc/latin)

> Note: Practice apps aren't currently open-source, but coming soon

#### Using the api (raw JSON-formatted)
- shared dataset: `https://api.techman.dev/credofile/get`
- self-hosted: `https://<YOUR_DOMAIN>/get`


## How to add data...

#### Using the web interface
[tcmn.cc/crowd](https://tcmn.cc/crowd)

#### Using the api
- shared dataset: `https://api.techman.dev/credofile/set?latin=<YOUR_LATIN>&english=<YOUR_ENGLISH>&notes=<YOUR_NOTES>&chapterId=<YOUR_CHAPTERID>`
- self-hosted: `https://<YOUR_DOMAIN>/set?latin=<YOUR_LATIN>&english=<YOUR_ENGLISH>&notes=<YOUR_NOTES>&chapterId=<YOUR_CHAPTERID>`


************


## Extra Tools

- [Convert any chapter(s) in this dataset to a quizlet-ready text file](https://tcmn.cc/vCy4)
  - must use the "+ Import" button on quizlet, and set the "between cards" value to `**`
  - you can change the url of the initial `/get` request to a custom url, if you wish to use your own, self-hosted data

## Roadmap
- [ ] Add more latin texts
- [ ] Add an unverified section on practice sites for data that hasn't been reviewed

## Tech-stack

**frontend:** vite + react + pico.css + tailwind <br/>
**backend:** js + cloudflare workers + cloudflare r2 
