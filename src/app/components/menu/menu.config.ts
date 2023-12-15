import { IMenuConfig } from "src/app/types/app.types";

export const menuConfig: IMenuConfig[] = [
    {
        label: 'home',
        description: '',
        url: "#"
    },
    {
        label: 'aboutme',
        description: '',
        url: "#"
    },
    {
        label: 'other',
        description: '',
        url: "#",
        menu: [
               {
                label: 'newitem',
                description: 'some description',
                url: '#',
                menu: [
                      {
                        label: 'newitem',
                        description: 'some description',
                        url: '#',
                      },  
                      {
                        label: 'olditem',
                        description: 'some description',
                        url: '#',
                      },
                    ]
            },           
               {
                label: 'newitem',
                description: 'some description',
                url: '#'
            },
        ]
    },
    {
      label: "login",
      description: '',
      url: './login',
      showLoggedUser: 'none'
    },
    {
      label: "logout",
      description: '',
      url: './login',
      showLoggedUser: 'yes'
    },
    {
      label: "signup",
      description: '',
      url: './registration',
      showLoggedUser: "none"
    }
]