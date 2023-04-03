import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AssignmentIcon from '@mui/icons-material/Assignment';

const todos = ['Call 1', 'Call 2']
//check setDraggedEvent

export default function ListTodo({ setDraggedEvent }) {
  return (
    <Box sx={{ width: '100%', maxWidth: 200 }}>
      <nav aria-label="main mailbox folders">
        <ListItem>
            <ListItemIcon>
            <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
        </ListItem>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
            {todos && todos.map((item, i) => {
                return (
                    <ListItem disablePadding 
                    key={item + i} 
                    draggable={true}
                    onDragStart ={(e) => setDraggedEvent(e.target.value)}
                    >
                        <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                )  
            })}
        </List>
      </nav>
    </Box>
  );
}