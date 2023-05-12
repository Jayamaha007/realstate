import React from "react";
import { Box, Button, Container, styled, Typography } from "@mui/material";
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";
import RunningMan from "../media/RunningImg.png";
import Workout from "../media/OIP.jpg";



function UserData() {

    const CustomBox = styled(Box)(({ theme }) => ({
        backgroundColor: 'white',
        borderRadius: 10,
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: theme.spacing(110),
        padding: "0.5rem 1.25rem",
    }));

    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
          fontSize: "40px",
        },
      }));


    return (
        
        
        <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "100vh" }}>
            <Container>

                <Navbar/>  
                <Box sx={{display:"flex",flexDirection:"row"}}>
                <Box sx={{  minHeight: "40vh",  height: "416px", width: "50%",   alignItems: "center",}}>
                <CustomBox>
          <Box sx={{ flex: "1" }}>
          
            <Title variant="h1">
              Give Up the fat, Watch your belly go flat
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
             Welcome to our fitness page, where we believe that fitness is not just a hobby, but a way of life. Our page is dedicated to providing you with the latest fitness tips, workout routines, and healthy eating ideas that will help you achieve your fitness goals.


            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Start Now"
              heroBtn={true}
              position= "absolute"
              left= "50%"
              transform= "translateX(-50%)"
              
            />
          </Box>
                    </CustomBox>
                </Box>

                <Box sx={{ minHeight: "40vh",  height: "416px", width: "50%",   alignItems: "center",padding:'10px'}}>
                <CustomBox >
                <Box sx={{ flex: "1" }}>
            <img
              src={Workout}
              alt="heroImg"
              style={{ maxWidth : "fit-content" , minHeight: "fit-content"}}/>
               </Box>
          </CustomBox>
                </Box>
                </Box>
                  
               
            </Container>
                
            </Box>

     

    );
}

export default UserData;
