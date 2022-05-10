import React from 'react';

import Button, {ButtonSize, ButtonType} from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';


function App() {
  return (
    <div>
      <h1>hellow world</h1>
      <h2>hellow world</h2>
      <h3>hellow world</h3>
      <h4>hellow world</h4>
      <h5>hellow world</h5>
      <>
        <Button>Default</Button>
        <Button btnType={ButtonType.Danger} disabled>Danger</Button>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button size={ButtonSize.Large}>Large</Button>
        <Button size={ButtonSize.Small}>Small</Button>
        <Button size={ButtonSize.Large} btnType={ButtonType.Danger}>Large Dange</Button>
        <Button size={ButtonSize.Small} btnType={ButtonType.Primary}>Small Primary</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com">Link</Button>
        <Button btnType={ButtonType.Link} disabled href="http://www.baidu.com">Disabled Link</Button>
      </>
      <>
        <Menu>
          <MenuItem>item1</MenuItem>
          <MenuItem>item2</MenuItem>
          <MenuItem>item3</MenuItem>
          <SubMenu title='SubMenu'>
            <MenuItem>item1</MenuItem>
            <MenuItem>item2</MenuItem>
          </SubMenu>
        </Menu>
        <Menu mode='vertical'>
          <MenuItem>item1</MenuItem>
          <MenuItem>item2</MenuItem>
          <MenuItem>item3</MenuItem>
          <SubMenu title='SubMenu'>
            <MenuItem>item1</MenuItem>
            <MenuItem>item2</MenuItem>
          </SubMenu>
        </Menu>
      </>
    </div>
  );
}

export default App;
