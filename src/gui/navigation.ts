import crayon from "crayon";

export const toMainMenu = (router: crayon.Router) => router.navigate('/')
export const toAirport = (router: crayon.Router, code: string) => router.navigate(`/airport/${code.toLowerCase()}`)
export const toHanger = (router: crayon.Router) => router.navigate('/hanger')
