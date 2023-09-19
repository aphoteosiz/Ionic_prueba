import { Component, OnInit } from '@angular/core';
interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  Componentes: Componente[] = [
    {
      icon: 'american-football',
      name: 'action-sheet',
      redirectTo: '/action-sheet'

    },
    {
      icon: 'alert-circle-outline',
      name: 'alert',
      redirectTo: '/alert'

    },
    {
      icon: 'beaker-outline',
      name: 'avatar',
      redirectTo: '/avatar'

    },
    {
      icon: 'radio-button-off-outline',
      name: 'Button',
      redirectTo: '/button'

    },
    {
      icon: 'card-outline',
      name: 'card',
      redirectTo: '/card'

    },
    {
      icon: 'checkmark-circle-outline',
      name: 'check',
      redirectTo: '/check'

    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time'

    },
     {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'

    },
    {
      icon: 'grid-outline',
      name: 'grid',
      redirectTo: '/grid'

    },
    {
      icon: 'infinite-outline',
      name: 'Infinite-Scroll',
      redirectTo: '/infinit'

    },
    {
      icon: 'hammer-outline',
      name: 'Input',
      redirectTo: '/input'

    },
    {
      icon: 'list-outline',
      name: 'list-sliding',
      redirectTo: '/list'

    },
    {
      icon: 'reorder-three-outline',
      name: 'list-reorder',
      redirectTo: '/list-reorder'

    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
