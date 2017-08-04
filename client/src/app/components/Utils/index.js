const mob = 768
const tab = 992
// const Mobile = navigator.userAgent.match(/(Android|iPhone|Windows Phone|MeeGo|BB10)/i) ? true : false
const Mobile = window.innerWidth <= mob
const YTImg = id => `https://i.ytimg.com/vi/${id}/default.jpg`
export { mob, tab, Mobile, YTImg }
