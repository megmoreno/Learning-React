import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    navlinks: {
        marginLeft: theme.spacing(10),
        display: "flex",
    },
    logo: {
        flexGrow: "1",
        cursor: "pointer",
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
            color: "yellow",
            borderBottom: "1px solid white",
        },
    },
}));

function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Megan Moreno
        </Typography>
                <div className={classes.navlinks}>
                    <Link to="/" className={classes.link}>
                        Home
            </Link>
                    <Link to="/about" className={classes.link}>
                        About
            </Link>
                    <Link to="/contact" className={classes.link}>
                        Contact
            </Link>
                    <Link to="/tic-tac-toe" className={classes.link}>
                        Tic-Tac-Toe
            </Link>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;
