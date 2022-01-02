import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from "@mui/material";
import React from "react";
import clsx from "clsx";
import { makeStyles } from '@mui/styles';
import MenuIcon from "@mui/icons-material/Menu";
import GithubIcon from "@mui/icons-material/GitHub";
import MessageIcon from "@mui/icons-material/Message";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flex: 1
    },
    buttonNavbar: {
        padding: 10
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerHeader: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(5, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    contentHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}));

const Navbar = ({ children }) => {
    const styles = useStyles();
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const handleRouteChange = (to) => {
        history.push(to);
    }

    return (
        <div className={styles.root}>
            <AppBar
                position="fixed"
                className={clsx(styles.appBar, {
                    [styles.appBarShift]: open
                })}
            >
                <Toolbar>
                    <IconButton
                        className={styles.menuButton}
                        color="inherit"
                        aria-label="menu"
                        edge="start"
                        onClick={() => setOpen(!open)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={styles.title} variant="h6">
                        Sellers Portal
                    </Typography>
                    <IconButton color="inherit">
                        <GithubIcon />
                        <Typography
                            className={styles.buttonNavbar}
                            variant="h6"
                            color="inherit"
                        >
                            GitHub
                        </Typography>
                    </IconButton>
                    <IconButton color="inherit">
                        <MessageIcon />
                        <Typography
                            className={styles.buttonNavbar}
                            variant="h6"
                            color="inherit"
                        >
                            Slack
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={styles.drawer}
                varinat="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: styles.drawerPaper
                }}
                onClose={()=>setOpen(false)}
            >
                <div className={styles.drawerHeader}>
                    <Avatar>S</Avatar>
                    <Typography variant="h6"> Seller </Typography>
                </div>
                <Divider />
                <List>
                    {[
                        {
                            text: "Dashboard",
                            icon: <DashboardIcon />,
                            to: "/"
                        },
                        {
                            text: "Orders",
                            icon: <AssignmentIcon />,
                            to: "/orders"
                        }
                    ].map((item) => (
                        <ListItem
                            onClick={() => handleRouteChange(item.to)}
                            button
                            key={item.text}
                        >
                            <ListItemIcon> {item.icon} </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main
                className={clsx(styles.content, {
                    [styles.contentShift]: open
                })}
            >
                <div className={styles.contentHeader}>
                    { children }
                </div>
            </main>
        </div>
    )
};

export default Navbar;