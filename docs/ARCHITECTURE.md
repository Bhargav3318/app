# Architecture

PermitPulse is a dependency-free static ES-module application. `src/data.js` contains city capability metadata, creates bounded Socrata queries, and maps different publisher schemas to one presentation shape. `src/app.js` owns form state, safe HTML rendering, loading and failure states, and official-source links.

The browser talks directly to official endpoints that advertise cross-origin access. There are no secrets. User text is limited to 100 characters, single quotes are escaped for SoQL, only whitelisted columns are selected, and rendered source values are HTML-escaped. Static deployment removes a server attack surface and ongoing infrastructure cost.

A future backend is justified only when scheduled snapshots, cross-city indexing, alerts, or audited source-version history become requirements.
