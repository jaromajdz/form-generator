export const menuConfig = [
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
      url: './login'
    },
    {
      label: "signup",
      description: '',
      url: './registration'
    }
]