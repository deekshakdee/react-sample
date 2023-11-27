import React from 'react';
import './Footer.css'; 
import IconButton from '@mui/joy/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

function Footer() {
  return (
    <footer className="my-custom-footer">
      <div className="social-icons">
        <IconButton variant="plain">
          <FacebookIcon />
        </IconButton>
        <IconButton variant="plain">
          <GitHubIcon />
        </IconButton>
      </div>
      <div className="footer-content">
        <List size="sm" orientation="horizontal" wrap >
          <ListItem nested className="left-section">
            <ListSubheader>Sitemap</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Blog</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Contact us</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested className="right-section">
            <ListSubheader>Product</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Music Core</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Source Files</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </div>
    </footer>
  );
}

export default Footer;