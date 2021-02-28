
const allDocHomesPaths = [
  '/docs',
  '/docs/next'
];

module.exports = {
  title: 'NosWings Wiki',
  tagline: 'NosWings Wiki',
  url: 'https://wiki.noswings.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'noswings',
  projectName: 'wiki',
  themeConfig: {
    navbar: {
      title: 'NosWings Wiki',
      logo: {
        alt: 'NosWings Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Game Content',
          position: 'left',
        },
        {
          href: 'https://github.com/noswings/wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Website',
              href: 'https://noswings.com',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/RUk4r4T',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/noswings',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NosWings.`,
    },
  },  
  plugins: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/noswings/wiki/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
