import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}

class MenuAppDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    })
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem button key="home">
            <Link to="/">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="audience">
            <Link to="/audience">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Audience" />
            </Link>
          </ListItem>
          <ListItem button key="speaker">
            <Link to="/speaker">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Speaker" />
            </Link>
          </ListItem>
          <ListItem button key="board">
            <Link to="/board">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Board" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="welcome">
            <Link to="/welcome">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Welcome" />
            </Link>
          </ListItem>
          <ListItem button key="signup">
            <Link to="/signup">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Sign Up" />
            </Link>
          </ListItem>
          <ListItem button key="signout">
            <Link to="/signout">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Sign Out" />
            </Link>
          </ListItem>
          <ListItem button key="chat">
            <Link to="/chat">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Chat" />
            </Link>
          </ListItem>
        </List>
      </div>
    )

    const fullList = (
      <div className={classes.fullList}>
        <List>
          <ListItem button key="home">
            <Link to="/">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="audience">
            <Link to="/audience">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Audience" />
            </Link>
          </ListItem>
          <ListItem button key="speaker">
            <Link to="/speaker">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Speaker" />
            </Link>
          </ListItem>
          <ListItem button key="board">
            <Link to="/board">
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary="Board" />
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button key="welcome">
            <Link to="/welcome">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Welcome" />
            </Link>
          </ListItem>
          <ListItem button key="signup">
            <Link to="/signup">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Sign Up" />
            </Link>
          </ListItem>
          <ListItem button key="signout">
            <Link to="/signout">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Sign Out" />
            </Link>
          </ListItem>
          <ListItem button key="chat">
            <Link to="/chat">
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary="Chat" />
            </Link>
          </ListItem>
        </List>
      </div>
    )

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

MenuAppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MenuAppDrawer)