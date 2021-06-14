const arvish = require('arvish');

(async () => {
  const data = await arvish.fetch('https://repo.packagist.org/search.json', {
    query: {
      q: arvish.input
    }
  });

  const items = data.results.map(pkg => {
    return {
      title: pkg.name,
      subtitle: pkg.description,
      arg: pkg.repository || pkg.url,
      mods: {
        alt: {
          arg: pkg.url,
          subtitle: 'Open the Packagist page instead of the GitHub repo'
        },
        ctrl: {
          arg: pkg.name,
          subtitle: 'Copy package name'
        }
      },
      quicklookurl: pkg.repository && `${pkg.repository}#readme`
    };
  });

  arvish.output(items);
})();
