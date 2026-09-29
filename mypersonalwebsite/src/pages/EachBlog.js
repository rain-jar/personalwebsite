import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const EachBlog = ({ title, date, readTime, content }) => {
    const navigate = useNavigate();

    return (
        <div className="blogpostpage">
            <h1>Blog</h1>
            <Box sx={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
                <Box
                    variant="outlined"
                    onClick={() => navigate("/blog")}
                    sx={{
                        width : "120px",
                        display: "flex",
                        justifyContent: 'center',
                        marginBottom: "16px",
                        textTransform: "none",
                        alignItems: 'center',
                        fontWeight: 'bold',
                        padding: "5px",
                        backgroundColor: '#1e1e1e',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                        '&:hover': {
                          backgroundColor: '#808080', // Slight color change on hover
                          color:'black',
                        },
                    }}
                >
                    <IconButton edge="end" sx={{ color: 'white' }}>
                        <ArrowBackIosIcon/>   
                    </IconButton>
                    Back to Blog
                </Box>

                {/* Blog title */}
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{ textAlign: "center", marginBottom: "8px" }}
                >
                    {title}
                </Typography>

                {/* Date and read time */}
                <Typography
                    variant="body1"
                    sx={{ textAlign: "center", color: "gray", marginBottom: "24px" }}
                >
                    {date} • {readTime} min read
                </Typography>

                {/* Blog content */}
                <Typography
                    variant="body1"
                    sx={{
                        textAlign: "justify",
                        lineHeight: "1.7",
                    }}
                >
                    {content}
                </Typography>

            </Box>
        </div>
    );
};

export default EachBlog;