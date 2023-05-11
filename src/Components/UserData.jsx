import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";


function UserData() {

    const CustomBox = styled(Box)(({ theme }) => ({
        backgroundColor: 'white',
        borderRadius: 10,

        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: theme.spacing(110),
        padding: "0.5rem 1.25rem",
    }));


    return (
        // <div>
        //     <h1>
        //         Hiii
        //     </h1>
        // </div>
        <div>
            <Box sx={{ backgroundColor: "#E0F2F1", minHeight: "80vh" }}>
                <Box sx={{ backgroundColor: "#00B8D4", minHeight: "40vh",  height: "416px", width: "234px",   alignItems: "center",}}>
                    
                </Box>
            </Box>

        </div>

    );
}

export default UserData;
