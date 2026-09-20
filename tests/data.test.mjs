import test from'node:test';import assert from'node:assert/strict';import{CITY_BY_ID,buildQuery}from'../src/data.js';
test('Austin query is bounded and selects public fields',()=>{const u=buildQuery(CITY_BY_ID.austin,'301 W 2nd St','address');assert.equal(u.searchParams.get('$limit'),'50');assert.match(u.searchParams.get('$where'),/301 W 2nd St/);assert.doesNotMatch(u.searchParams.get('$select'),/phone|applicant/i)});
test('quotes are escaped in SoQL',()=>{const u=buildQuery(CITY_BY_ID.dallas,"O'Connor",'address');assert.match(u.searchParams.get('$where'),/O''Connor/)});
