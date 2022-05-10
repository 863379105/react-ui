import React, {useContext, useState} from "react";
import classNames from "classnames";
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

interface SubMenuProps{
  index?: number;
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
  const classes = classNames(
    'menu-item submenu-item',
    className,
    {
      'is-active': context.index === index
    }
  )
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      if(childElement.type.displayName === 'MenuItem') {
        return childElement;
      } else {
        console.error("Waring: Menu has a child which is not a MenuItem component");
      }
    })
    return (
      <ul className="sub-menu">
        {childrenComponent}
      </ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title">
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu';
export default SubMenu;