
export const cards = [
    // dragggedCardInfo = cards[list_id].cards.splice(draggedIndex, 1)
    // cards[list_index].cards.splice(entered_index, 0, dragggedCardInfo)
    {
        list_id: 1,
        list_title: 'Front-end',
        cards: 
            [
                {
                    id: 11,
                    cover: 'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80',
                    title: 'Modify the logo',
                    labels: [
                        {
                            color: 'ff0000',
                            title: 'Urgent'
                        }
                    ]
                },
                {
                    id: 12,
                    cover: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80',
                    title: 'Transition',
                    labels: [
                        {
                            color: '0000ff',
                            title: 'Coming'
                        }
                    ]
                }
            ]
            
        
    },
    {
        list_id: 2,
        list_title: 'Back-end',
        cards: [
            {
                id: 13,
                cover: 'https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
                title: 'Build Search Feature',
                labels: [
                    {
                        color: 'ff0000',
                        title: 'Urgent'
                    }
                ]
            },
        ]
    },
]