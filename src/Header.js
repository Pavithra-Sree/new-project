import React from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
const Header= () => {
    return(
        <React.Fragment>
         <AppBar sx={{background: "#063970"}}>
            <Toolbar>
            <Typography>
                LOGIN
                <Tabs textColor="inherit">
                    <Tab label="Home"/>
                </Tabs>
            </Typography>
            </Toolbar>
         </AppBar>
        </React.Fragment>
    )
}
export default Header;