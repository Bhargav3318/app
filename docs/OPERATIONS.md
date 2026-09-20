# Operations

Run `npm test` and `npm run check` before publishing. Smoke-test one known query in Austin and Dallas, each official-link route, mobile width, keyboard navigation, and the source-failure message.

Monthly, review the four official source pages and Socrata metadata for changed URLs, columns, coverage language, and access terms. If a source changes or fails, keep its official link and change its coverage label; never convert failure into an empty result.

Deployment is static. GitHub Pages can publish from the repository root. With Cloudflare Pages, connect the repository, leave the build command blank, and set the output directory to `/`.
