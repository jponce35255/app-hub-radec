  export interface NavOption{
    route: string,
    name: string,
    icon: string,
    submenu?: NavOption[],
    // active: boolean
  }
