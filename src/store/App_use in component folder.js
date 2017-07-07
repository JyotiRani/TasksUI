//This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './header.jsx';
import RightSidebarMenuList from './right-sidebar-menulist.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      subMenu: '1'
    };
    this.changeRightBarMenu = this.changeRightBarMenu.bind(this);
  }

  changeRightBarMenu(menuNo){
    this.setState({
      subMenu: menuNo
    });
  }
  render(){
    let childrenWithProps = React.cloneElement(
      this.props.children, {
        subMenuNumber: this.state.subMenu, changeRightBarMenu:this.changeRightBarMenu
      }
    );
    return (<div className="container-fluid">
      <Header changeRightBarMenu = {this.changeRightBarMenu}/>
      <RightSidebarMenuList subMenuNumber = {this.state.subMenu}/>
      {childrenWithProps}
    </div>
  );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default App;
