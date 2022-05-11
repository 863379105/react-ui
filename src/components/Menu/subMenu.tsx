import React, {useContext, useState} from "react";
import classNames from "classnames";
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

interface SubMenuProps{
  index?: string;
  title: string;
  className?: string;
  children: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const {
    index,
    title,
    className,
    children
  } = props;
  
  const context = useContext(MenuContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const classes = classNames(
    'menu-item submenu-item',
    className,
    {
      'is-active': context.index.slice(0,1) === index
    }
  )
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    },300)
  }

  const clickEvents = context.mode === 'vertical' ? {
    onClick: handleClick
  } : {}

  const hoverEvents = context.mode !== 'vertical' ? {
    onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
    onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
  } : {}

  const renderChildren = () => {
    const classes = classNames(
      'sub-menu',
      {
        'menu-opened': menuOpen
      }
    )
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if(childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {index: `${index}-${i}`});
      } else {
        console.error("Waring: Menu has a child which is not a MenuItem component");
      }
    })
    return (
      <ul className={classes}>
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu';
export default SubMenu;