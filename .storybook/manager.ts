// .storybook/manager.js
import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
// import create from '../.storybook/theme';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'DED WDS Storybook',
    brandUrl:
      'https://uedteam.github.io/DED-WDS_REACT/?path=/docs/changelog--docs',
    brandImage:
      'https://hkese.net/cdn-cgi/image/width=1200,format=auto/sites/default/files/article_images/342-3.jpg',
    brandTarget: '_self',
    colorPrimary: '#00467c',
    colorSecondary: '#00467c',
  }),
});
