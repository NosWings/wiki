module.exports = {
  title: 'NosWings Wiki',
  tagline: 'NosWings Wiki',
  url: 'http://wiki.noswings.com',
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
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Patch Notes',
          position: 'left'},
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
              label: 'Patch Notes',
              to: 'blog',
            },
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
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'index',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/noswings/wiki/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/noswings/wiki/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
