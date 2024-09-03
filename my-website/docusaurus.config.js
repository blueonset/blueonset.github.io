// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BlueOnset',
  tagline: 'All about Kubernetes',
  favicon: 'img/favicon.ico',
  url: 'https://blueonset.github.io',
  baseUrl: '/',
  organizationName: 'blueonset', // Usually your GitHub org/user name.
  projectName: 'blueonset.github.io', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          sidebarPath: './sidebars.js',
          // editUrl: '',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'BlueOnset',
        logo: {
          alt: 'My Site Logo',
          src: 'img/kubernetes.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'kubernetes/kubernetes',
            position: 'left',
            label: 'Kubernetes',
          },
          {
              type: 'doc',
              docId: 'networking/networking',
              position: 'left',
              label: 'Networking',
          },
          {
              type: 'doc',
              docId: 'observability/observability',
              position: 'left',
              label: 'Observability',
          },
          {
            type: 'doc',
            docId: 'security/security',
            position: 'left',
            label: 'Security',
          },
          {
            type: 'doc',
            docId: 'storage/storage',
            position: 'left',
            label: 'Storage',
          },
          {
            type: 'doc',
            docId: 'service_mesh/service_mesh',
            position: 'left',
            label: 'Service Mesh',
          },
          {
            href: 'https://blueonset.github.io/blueonset.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
            {
            },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BlueOnset, Inc. Built with Docusaurus.`,
    },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
