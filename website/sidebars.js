// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  journeys: [
    {
      type: 'category',
      label: 'Command Line Interface',
      link: {
        type: 'doc',
        id: 'cli/index',
      },
      items: [
        'cli/terminal',
        'cli/git'
      ],
    }
  ],
};

module.exports = sidebars;
