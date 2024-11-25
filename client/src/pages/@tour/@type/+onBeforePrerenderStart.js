export { onBeforePrerenderStart }

async function onBeforePrerenderStart() {

  const URLs = [
    '/atp/singles',
    '/atp/singles-race',
    '/atp/doubles',
    '/atp/doubles-race',
    '/wta/singles',
    '/wta/singles-race',
    '/wta/doubles',
    '/wta/doubles-race',
  ]

  return URLs
  
}
