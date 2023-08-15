import About from '@/views/About.vue';
// Innkeeper
import InnkeeperUi from '@/views/InnkeeperUi.vue';
import InnkeeperApiKeys from '@/views/innkeeper/InnkeeperApiKeys.vue';
import InnkeeperReservations from '@/views/innkeeper/InnkeeperReservations.vue';
import InnkeeperReservationsHistory from '@/views/innkeeper/InnkeeperReservationsHistory.vue';
import InnkeeperTenants from '@/views/innkeeper/InnkeeperTenants.vue';

const innkeeperRoutes = [
  {
    path: '/innkeeper/',
    name: 'InnkeeperUi',
    component: InnkeeperUi,
    meta: { isInnkeeper: true },
    children: [
      // Blank route uses dashboard view
      { path: '', name: 'InnkeeperTenants', component: InnkeeperTenants },

      // Reservations
      {
        path: 'reservations',
        name: 'InnkeeperReservations',
        component: InnkeeperReservations,
      },
      {
        path: 'reservations/history',
        name: 'InnkeeperReservationsHistory',
        component: InnkeeperReservationsHistory,
      },

      // Authentications
      {
        path: 'authentications/keys',
        name: 'InnkeeperApiKeys',
        component: InnkeeperApiKeys,
      },

      // About
      {
        path: 'about',
        name: 'InnkeeperAbout',
        component: About,
        meta: { isInnkeeper: true },
      },
    ],
  },
];

export default innkeeperRoutes;
