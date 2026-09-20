# Source research

Verified 19 September 2026 against official publisher pages and metadata.

| City | Product behavior | Reason |
|---|---|---|
| Austin | Live address or permit-number search | Official Socrata dataset `3syk-w9eu` exposes permit identifiers, address, raw status, dates, description, valuation, and source links. |
| Dallas | Historical search plus current-portal link | Dataset `e7gq-4sah` says it is historical and no longer updated; current tracking moved to Dallas Accela. |
| San Antonio | Live address or permit-number search | Official CKAN resources provide issued permits for 2020–2024 and a current issued-permit feed. Applications remain excluded. |
| Houston | Searchable current weekly snapshot | The City Permit Activity Report supplies current new-construction, remodeling, and change-of-use records. This is narrower than the separate rolling three-year Sold Permits Search. |

No result is a legal, safety, inspection, or code-compliance conclusion. Postal city does not establish the issuing authority, especially outside city limits. Values are publisher-declared project valuations. Austin's `completed_date` is displayed as a date and is not described as a passed final inspection.

The $0 architecture avoids a database, server, paid geocoder, maps, and accounts. Browser queries are capped at 50 records. The included script refreshes the Houston weekly report snapshot.
