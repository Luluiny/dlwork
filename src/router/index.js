import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Base from '@/views/base/Base';
import Game from '@/views/game/Game';
import Loadpage from '@/views/loadpage/Loadpage';
import Center from '@/views/center/Center';
import First from '@/views/center/First';
import Second from '@/views/center/Second';
import Third from '@/views/center/Third';
import Fourth from '@/views/center/Fourth';
import Fifth from '@/views/center/Fifth';
import Sixth from '@/views/center/Sixth';
import Temp from '@/views/center/Temp';

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
        path: '/base',
        name: 'Base',
        component: Base
      },
      {
        path: '/game',
        name: 'Game',
        component: Game
      },
      {
        path: '/loadpage',
        name: 'Loadpage',
        component: Loadpage
      },
      {
        path: '/center',
        name: 'Center',
        component: Center,
        children: [{
            path: '/first',
            name: 'First',
            component: First
          },
          {
            path: '/second',
            name: 'Second',
            component: Second
          },
          {
            path: '/third',
            name: 'Third',
            component: Third
          },
          {
            path: '/fourth',
            name: 'Fourth',
            component: Fourth
          },
          {
            path: '/fifth',
            name: 'Fifth',
            component: Fifth
          },
          {
            path: '/sixth',
            name: 'Sixth',
            component: Sixth
          },  {
            path: '/temp',
            name: 'Temp',
            component: Temp
          },
        ]
      },
    ]
  }]
})
