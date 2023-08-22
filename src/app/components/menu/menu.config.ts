export const menuConfig = [
    {
        label: 'Home',
        description: '',
        url: "#"
    },
    {
        label: 'About Me',
        description: '',
        url: "#"
    },
    {
        label: 'Other',
        description: '',
        url: "#",
        menu: [
               {
                label: 'New item',
                description: 'some description',
                url: '#',
                menu: [
                      {
                        label: 'New item',
                        description: 'some description',
                        url: '#',
                      },  
                      {
                        label: 'Old item',
                        description: 'some description',
                        url: '#',
                      },
                    ]
            },           
               {
                label: 'New item',
                description: 'some description',
                url: '#'
            },
        ]
    },
]