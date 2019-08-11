module.exports = {
  base: '/vuepress-starter/',
  title: 'VuePress in Github Pages',
  description: 'Static website built with VuePress and deployed on Github Pages',
  dest: './docs',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Repo', link: 'https://github.com/kauppfbi/vuepress-starter' },
    ],
    sidebar: {
      '/guide/': ['', 'prettier', 'renovate', 'circleci'],
    },
  },
};
