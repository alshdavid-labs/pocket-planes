import crayon from 'crayon'
import crayonReact from 'crayon-react'
import { GlobalContext } from './context'
import { HomeView } from './views/home'
import { AirportView } from './views/airport'
import { HangerView } from './views/hanger'
import { state } from './state'

const router = crayon.create() 

router.use(crayonReact.router(document.getElementById('outlet')!))
router.use(crayonReact.withContext(GlobalContext, state)) 

router.path('/', ctx => ctx.mount(HomeView))
router.path('/hanger', ctx => ctx.mount(HangerView))
router.path('/airport/:code', ctx => ctx.mount(AirportView))

state.router = router
router.load() 