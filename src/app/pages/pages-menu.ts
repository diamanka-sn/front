import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Tableau de Bord',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home:true,
  },
  /*{
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  }*/
  {
    title: 'Finance',
    icon: 'trending-up-outline',
    link: '/pages/finance',
  },
  {
    title: 'Alimentation',
    icon: 'pie-chart',
    link: '/pages/alimentation',
  },
  {
    title: 'Bovin',
    icon: 'layout-outline',
    link: '/pages/bovin',
  },
  {
    title: 'Production',
    icon: 'activity-outline',
    link: '/pages/production',
  },
  {
    title: 'Reproduction',
    icon: 'bar-chart-outline',
    link: '/pages/reproduction',
  },
  {
    title: 'Sante',
    icon: 'heart-outline',
    link: '/pages/sante',
  },
  {
    title: 'Rapport Mensuel',
    icon: 'file-outline',
    link: '/pages/rapport',
  }, 
  {
    title: 'factures',
    icon: 'file-outline',
    link: '/pages/factures',
  }, 
];
