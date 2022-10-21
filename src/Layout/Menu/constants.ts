import ROUTE_URL from 'App/Routes/constants';

export const CLASS_BODY_MENU_OPEN = 'af-menu-open';

const MENU_ITEMS = [
  {
    label: 'Accueil',
    url: ROUTE_URL.HOME,
  },
  {
    label: 'Démos',
    url: ROUTE_URL.DEMOS,
    basePathChildren: ROUTE_URL.DEMOS,
    children: [
      {
        label: 'Membres',
        url: ROUTE_URL.MEMBERS,
      },
      {
        label: 'Rechercher',
        url: ROUTE_URL.SEARCHMEMBERS,
      },
      {
        label: 'Modal',
        url: ROUTE_URL.MODAL,
      },
      {
        label: 'Notification',
        url: ROUTE_URL.NOTIFICATION,
      },
      {
        label: 'Layout',
        url: ROUTE_URL.LAYOUT,
      },
    ],
  },
  {
    label: 'Toolkit components',
    url: ROUTE_URL.DEMOS,
    basePathChildren: ROUTE_URL.DEMOS,
    children: [
      {
        label: 'Button',
        url: ROUTE_URL.BUTTON,
      },
      {
        label: 'Alert',
        url: ROUTE_URL.ALERT,
      },
    ],
  },
  {
    label: 'Toolkit form components',
    url: ROUTE_URL.DEMOS,
    basePathChildren: ROUTE_URL.DEMOS,
    children: [
      {
        label: 'Text Input',
        url: ROUTE_URL.TEXT_INPUT,
      },
    ],
  },
  {
    label: 'Pages',
    children: [
      {
        label: 'Not found',
        url: ROUTE_URL.NOTFOUND,
      },
      {
        label: 'Forbidden',
        url: ROUTE_URL.UNAUTHORIZE,
      },
    ],
  },
];

export default MENU_ITEMS;
