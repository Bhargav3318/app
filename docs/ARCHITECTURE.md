# Architecture

PermitPulse is a dependency-free static ES-module application. `src/data.js` creates bounded Socrata and CKAN queries, searches the Houston snapshot, and maps each publisher schema to one presentation shape. `src/app.js` owns form state, safe HTML rendering, loading and failure states, and official-source links.

The browser talks directly to official endpoints that advertise cross-origin access. Houston is the exception: `scripts/sync-houston.mjs` converts the city's published weekly HTML report into static JSON. There are no secrets. User text is limited to 100 characters, SQL literals are escaped, only whitelisted columns are selected, and rendered source values are HTML-escaped.

A future backend is justified only when scheduled snapshots, cross-city indexing, alerts, or audited source-version history become requirements.
