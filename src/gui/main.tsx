import crayon from 'crayon'
import crayonReact from 'crayon-react'
import { GlobalContext } from './context'
import { HomeView } from './views/home'
import { AirportView } from './views/airport'
import { HangerView } from './views/hanger'
import { state } from './state'
import { paths, Navigator } from './navigation'

const router = crayon.create() 

router.use(crayonReact.router(document.getElementById('outlet')!))
router.use(crayonReact.withContext(GlobalContext, state)) 

router.path(paths.mainMenu.path, ctx => ctx.mount(HomeView))
router.path(paths.hanger.path, ctx => ctx.mount(HangerView))
router.path(paths.airport.path, ctx => ctx.mount(AirportView))

state.router = router
state.navigator = new Navigator(router)
router.load() 