import classNames from 'classnames'
import style from './Layout.module.css'

export const Layout = ({ children, className }) => {

  return (
    <div className={classNames(style.container, className)}>
      {children}
    </div>
  )
}