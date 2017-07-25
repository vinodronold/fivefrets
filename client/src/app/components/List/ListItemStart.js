import React from 'react'
import { clsList } from '../../constants/ui'
import Icon from '../Icons'

const ListItemStart = ({ className, icon, img, width = '120', height = '90', alt = 'Picture' }) => {
  let _cls = `${className} ${clsList}-item__start-detail`
  if (icon) {
    return (
      <Icon className={_cls} i={icon} />
    )
  }
  if (img) {
    return <img className={_cls} src={img} width={width} height={height} alt={alt} />
  }
  return
}

export default ListItemStart
