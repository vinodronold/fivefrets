const Mobile = navigator.userAgent.match(/(Android|iPhone|Windows Phone|MeeGo|BB10)/i) ? true : false
const YTImg = id => `https://i.ytimg.com/vi/${id}/default.jpg`
export { Mobile, YTImg }
