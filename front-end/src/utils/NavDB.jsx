import { UilEstate, UilUser, UilFileAlt, UilBriefcaseAlt, UilMessage, } from '@iconscout/react-unicons'
export const menuItems = [
    {   
        "id": 1,
        "path": "/",
        "name": "Home",
        "icon": <UilEstate className='nav__icon' />
    },
    {
        "id": 2,
        "path": "#about",
        "name": "About",
        "icon": <UilUser className='nav__icon' />
    },
    {
        "id": 3,
        "path": "#skills",
        "name": "Skills",
        "icon": <UilFileAlt className='nav__icon' /> 
    },
    {
        "id": 4,
        "path": "#qualification",
        "name": "Qualification",
        "icon": <UilBriefcaseAlt className='nav__icon' /> 
    },
    {
        "id": 5,
        "path": "#contact",
        "name": "Contact",
        "icon": <UilMessage className='nav__icon' />
    },{
        "id": 6,
        "path": "/blog",
        "name": "Blog",
        "icon": <UilMessage className='nav__icon' />
    } 
]

