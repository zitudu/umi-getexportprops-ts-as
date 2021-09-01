export function patchRoutes({routes}: any) {
  routes.forEach(function rmMenuComp(it: any) {
    if (it.menuComp) {
      delete it.component
    }
  })
}
