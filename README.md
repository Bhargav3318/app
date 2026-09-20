# PermitTap

A free, static permit-research website focused on Austin, San Antonio, Dallas, and Houston. Austin, San Antonio, and historical Dallas records are queried from official public APIs. Houston searches a locally hosted snapshot of the city's current weekly Permit Activity Report. Address autocomplete stays inside PermitTap.

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

- Austin: [Issued Construction Permits](https://data.austintexas.gov/Building-and-Development/Issued-Construction-Permits/3syk-w9eu), provided by Austin Development Services and searched live through its public Socrata API under the City's [Open Data Terms of Use](https://data.austintexas.gov/stories/s/ranj-cccq).
- Dallas: [Building Permits](https://www.dallasopendata.com/Services/Building-Permits/e7gq-4sah), a historical dataset that the publisher says is no longer updated. Current lookup uses [Dallas Accela](https://aca-prod.accela.com/DALLASTX/Login.aspx).
- San Antonio: [Building Permits](https://data.sanantonio.gov/dataset/building-permits), searched live through its public CKAN API across current and 2020–2024 issued-permit resources.
- Houston: [Permit Activity Report](https://houstontx.gov/planning/Publications/listsrv/WebeReport.html), stored as a searchable weekly snapshot. The broader [Sold Permits Search](https://www.houstonpermittingcenter.org/sold-permits-search) remains the official route for its rolling three-year scope.

Austin, San Antonio, and Dallas queries go from the visitor's browser to the selected city's open-data endpoint. Houston queries the static weekly snapshot in this repository. PermitTap has no server, account system, analytics, database, or paid service. A missing result is never presented as evidence of compliance, safety, or absence of work.

PermitTap requests only permit details needed for search and results. It does not request owner, applicant, contractor, email, or telephone fields. Street addresses are public permit-record locations and may identify residences.

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
