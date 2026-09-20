# Source research

Verified 19 September 2026 against official publisher pages and metadata.

| City | Product behavior | Reason |
|---|---|---|
| Austin | Live address or permit-number search | Official Socrata dataset `3syk-w9eu` exposes permit identifiers, address, raw status, dates, description, valuation, and source links. |
| Dallas | Historical search plus current-portal link | Dataset `e7gq-4sah` says it is historical and no longer updated; current tracking moved to Dallas Accela. |
| San Antonio | Official report link | The DSD reports page offers applications and issued-permit reporting through Open Data SA. Applications and issued permits should not be conflated. |
| Houston | Official lookup link | The Sold Permits Search advertises a rolling three-year window, which is partial history. |

No result is a legal, safety, inspection, or code-compliance conclusion. Postal city does not establish the issuing authority, especially outside city limits. Values are publisher-declared project valuations. Austin's `completed_date` is displayed as a date and is not described as a passed final inspection.

The $0 architecture deliberately avoids a database, server, paid geocoder, maps, accounts, bulk downloads, and background imports. Browser queries are capped at 50 records and select only the fields displayed by the product.
