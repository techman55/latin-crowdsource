# latin-crowdsource
Crowdsourcing program for latin sentence translating practice

This project has two parts:
- the practice app, the front end for the data set collected (not currently open source)
- the data entry app, this repo

## Data Sources
Currently, the practice app contains latin text from...
- The Gallic Wars, By Julius Caesar

## Data entry site hosted at... <span style="font-size: small">(*this site*)</span>
### [tcmn.cc/crowd](https://tcmn.cc/crowd)

## Practice app hosted at...
- certified dataset: [latin.jesuitnotes.com](https://latin.jesuitnotes.com) (*hosted by [@darrinhaase](https://github.com/darrinhaase)*)
- live, uncertified dataset, directly connected to crowdsource, with beta features: [tcmn.cc/latin](https://tcmn.cc/latin)

## Extra Tools

- [Convert any chapter(s) in this dataset to a quizlet-ready text file](https://tcmn.cc/vCy4)
  - must use the "+ Import" button on quizlet, and set the "between cards" value to `**`

## Roadmap
- [ ] Add more latin texts
- [ ] Add an unverified section on site for data that hasn't been reviewed

## Tech-stack

#### Frontend
vite + react + pico.css + tailwind

#### Backend
js + cloudflare workers + cloudflare r2 <br/>
**Note**: Requires cloudflare r2 to be enabled, which requires a credit card.
