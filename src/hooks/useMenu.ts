import { useRouter } from "next/router";
import { MenuItem } from "primereact/menuitem";
import { PanelMenu } from "primereact/panelmenu";
import { useRef } from 'react'

const useMenu = () => {
  const ref = useRef<PanelMenu>(null);
  const router = useRouter();

  const items: MenuItem[] = [
    {
      label: 'Usuários',
      command: () => router.push('/usuarios'),
      icon: 'pi pi-users'
    },
    {
      label: 'Perfis',
      icon: 'pi pi-id-card',
      items: [
        {
          label: 'Adicionar perfil',
          icon: 'pi pi-plus'
        },
        {
          label: 'Editar perfil',
          icon: 'pi pi-file-edit'
        },
      ]
    },
    {
      label: 'Departamentos',
      icon: 'pi pi-building',
      items: [
        {
          label: 'Sistemas',
          icon: 'pi pi-desktop'
        },
        {
          label: 'Engenharia',
          icon: 'pi pi-cog'
        },
        {
          label: 'RH',
          icon: 'pi pi-fw pi-users',
        },
        {
          label: 'Contabilidade',
          icon: 'pi pi-calculator',
        },
      ]
    }
  ];

  return { items, ref }
}

export default useMenu;
