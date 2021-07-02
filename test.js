const test = require('ava');
const arvishTest = require('arvish-test');

test('main', async t => {
  const arvish = arvishTest();

  const result = await arvish('node index.js vinkla/hashids');

  t.deepEqual(result[0], {
    title: 'vinkla/hashids',
    subtitle: 'A Hashids bridge for Laravel',
    arg: 'https://github.com/vinkla/laravel-hashids',
    mods:
    {
      alt:
      {
        arg: 'https://packagist.org/packages/vinkla/hashids',
        subtitle: 'Open the Packagist page instead of the GitHub repo'
      },
      ctrl: {
        arg: 'vinkla/hashids',
        subtitle: 'Copy package name'
      }
    },
    quicklookurl: 'https://github.com/vinkla/laravel-hashids#readme'
  });
});