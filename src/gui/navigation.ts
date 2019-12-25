import crayon from "crayon";

export const paths = {
  mainMenu: {
    path: '/'
  },
  airport: {
    path: '/airport/:code',
    build: (code: string) => `/airport/${code.toLowerCase()}`,
    params: {
      code: 'code'
    }
  },
  hanger: {
    path: '/hanger'
  }
}

export class Navigator {
  constructor(
    private router: crayon.Router
  ) {}

  getParam(key: string): string {
    return this.router.currentContext?.params[key] || ''
  }

  toMainMenu() {
    this.router.navigate(paths.mainMenu.path)
  }

  toAirport(code: string) {
    this.router.navigate(paths.airport.build(code))
  }

  toHanger() {
    this.router.navigate(paths.hanger.path)
  }
}