import { createRouter, createWebHistory} from 'vue-router'

import MentorsList from './pages/mentors/MentorsList.vue'
import MentorsDetail from './pages/mentors/MentorsDetail.vue'
import MentorsRegister from './pages/mentors/MentorsRegister.vue'
import ContactMentors from './pages/requests/ContactMentors.vue'
import RequestRecieved from './pages/requests/RequestRecieved.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {   path: '/', redirect:'/mentors' },
     {   path: '/mentors', component:MentorsList },
     {   path: '/mentors/:id', component:MentorsDetail, 
           children:[
                     {   path: 'contact', component:ContactMentors},
                     ]
     },
     {   path: '/register', component:MentorsRegister},
     {   path: '/requests', component:RequestRecieved},
     {   path: '/:notFound(.*)', component:NotFound},
    ]
})

export default router;