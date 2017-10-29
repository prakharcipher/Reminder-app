import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';
import { Notifications, Chat, Assignment, List, Add } from 'material-ui-icons';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Chip from 'material-ui/Chip';


class Navbar extends Component {
  render() {
    let props = this.props.open;
    return (
      <div className="nav-bar">
        <Drawer
          className="drawer"
          open={props}
          containerStyle={{
            height: '100%',
            top: '7%'
          }}
        >
          <div
            style={{
              height: '60px',
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#00FFFF'
            }}
          >
            <Avatar
              className="user-badge"
              backgroundColor="#32CD32"
              color="white"
              size={40}
              style={{
                height: '50px',
                width: '20%',
                marginTop: '5px',
                marginLeft: '5px',
                padding: '2px',
              }}
            >
              P
            </Avatar>
            <div
              style={{
                display: 'inline',
                marginLeft: '8px',
                width: '40%',
                height: '50px'
              }}
              onClick={() => window.alert('Fuck My Life')}
            >
              Prakhar Gupta
            </div>
            <div
              style={{
                width: '20%',
                height: '25px',
                display: 'inline-block',
                textAlign: 'center',
                position: 'absolute',
                top: '7px',
                right: '40px'
              }}
            >
              <IconButton
                children={<Notifications />}
                className="bell-icon"
                tooltip={'Notifications'}
              />
            </div>
            <div
              style={{
                width: '20%',
                height: '25px',
                display: 'inline-block',
                textAlign: 'center',
                position: 'absolute',
                top: '7px',
                right: '2px'
              }}
            >
              <IconButton
                children={<Chat />}
                className="chat-icon"
                tooltip={'Chat'}
              />
            </div>
          </div>
          <Menu>
            <MenuItem
              primaryText="Inbox"
              leftIcon={<Assignment />}
            />
            <Divider />
            <MenuItem
              primaryText="Private"
              leftIcon={<List />}
            />
            <Divider />
            <MenuItem
              primaryText="Public"
              leftIcon={<List />}
            />
            <Divider />
          </Menu>
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '50px',
              top: '87%'
            }}
          >
            <Divider />
            <Chip
              backgroundColor="#00FFFF"
              onClick={() => window.alert('Create a new list')}
              style={{
                width: '90%',
                marginTop: '12px',
                marginLeft: '12px'
              }}
            >
              <Avatar size={32}>
                <Add />
              </Avatar>
              Create List
            </Chip>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default connect()(Navbar);
