import { html, fixture, expect } from '@open-wc/testing';

import '../src/crud-app.js';

describe('<crud-app>', () => {
  it('has a default property heading', async () => {
    const el = await fixture('<crud-app></crud-app>');

    expect(el.heading).to.equal('Hello world!');
  });

  it('allows property heading to be overwritten', async () => {
    const el = await fixture(html`
      <crud-app heading="different heading"></crud-app>
    `);

    expect(el.heading).to.equal('different heading');
  });
});
