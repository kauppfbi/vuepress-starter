var ghpages = require('gh-pages');

ghpages.publish(
  'docs',
  {
    message: 'Update docs',
    user: {
      name: 'kauppfbi',
    },
  },
  err => console.error(err.message)
);
