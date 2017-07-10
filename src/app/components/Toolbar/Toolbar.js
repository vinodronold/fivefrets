import React from 'react'
import { clsToolbar, clsTheme } from '../../constants/ui'
import Icon from '../Icons'
import Menu from '../Menu'
import Button from '../Button'

const ToolbarButton = ({ label, onClick }) =>
  <Button className={`${clsTheme}--text-primary-on-primary`} onClick={onClick}>
    {label}
  </Button>

const ToolbarLeft = ({ toggleDrawer }) =>
  <section
    className={`${clsToolbar}__section ${clsToolbar}__section--align-start ${clsToolbar}__section--shrink-to-fit`}>
    <Icon i={'menu'} onClick={toggleDrawer} />
  </section>

const ToolbarRight = ({ isOptionsOpen, btns, opts, toggleMoreOptions }) =>
  <section className={`${clsToolbar}__section ${clsToolbar}__section--align-end`}>
    {btns.map(b => <ToolbarButton key={b.label} {...b} />)}
    {opts && <Menu i={'more_vert'} isOptionsOpen={isOptionsOpen} opts={opts} toggleMoreOptions={toggleMoreOptions} />}
  </section>

const Toolbar = ({ isOptionsOpen, btns, opts, toggleDrawer, toggleMoreOptions }) =>
  <div>
    <header className={`${clsToolbar} ${clsToolbar}--fixed`}>
      <div className={`${clsToolbar}__row`}>
        <ToolbarLeft toggleDrawer={toggleDrawer} />
        <ToolbarRight isOptionsOpen={isOptionsOpen} btns={btns} opts={opts} toggleMoreOptions={toggleMoreOptions} />
      </div>
    </header>
    <div className={`${clsToolbar}-fixed-adjust`} />
    <div style={{ padding: 10 }} />
  </div>
  
export default Toolbar
