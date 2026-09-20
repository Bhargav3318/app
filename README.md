# PermitPulse

A free, static permit-research website focused on Austin, San Antonio, Dallas, and Houston. It searches official Austin data and Dallas's explicitly historical dataset directly from the browser. San Antonio and Houston route users to their official tools because their current public interfaces require city-side filtering.

## Run locally

Any static server works:

```powershell
python -m http.server 8080
```

Open `http://localhost:8080`. Tests use Node 20+:

```powershell
npm test
npm run check
```

## Data and privacy

- Austin: [Issued Construction Permits](https://data.austintexas.gov/Building-and-Development/Issued-Construction-Permits/3syk-w9eu), searched live through its public Socrata API.
- Dallas: [Building Permits](https://www.dallasopendata.com/Services/Building-Permits/e7gq-4sah), a historical dataset that the publisher says is no longer updated. Current lookup uses [Dallas Accela](https://aca-prod.accela.com/DALLASTX/Login.aspx).
- San Antonio: [Development Services Reports](https://www.sa.gov/Directory/Departments/DSD/About/Reports).
- Houston: [Sold Permits Search](https://www.houstonpermittingcenter.org/sold-permits-search), described by the city as a rolling three-year search.

Queries go from the visitor's browser to the selected city's open-data endpoint. PermitPulse has no server, account system, analytics, database, or paid service. A missing result is never presented as evidence of compliance, safety, or absence of work.

## Structure

```text
index.html        Page content and accessible search UI
styles.css        Responsive visual system
src/app.js        UI state, rendering, errors, and result cards
src/data.js       Source registry, bounded queries, normalization
tests/            Query safety tests
docs/             Research and operating notes
```

## Hosting for $0

This site needs only static hosting. GitHub Pages works free when this repository is public. Cloudflare Pages is another free option and supports private source repositories; its documented free limits include 500 builds per month and 20,000 files per site. A custom domain costs money, so use the included host subdomain to keep the total at $0.

## License

MIT. City records retain their publishers' terms and provenance.
