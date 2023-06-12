import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./Cardy.css";

export default function Cardy({ title, description, image }) {


    return (
        <Card sx={{ maxWidth: 390, margin: 'auto', padding: '10px'}} className='cardy-prop'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="160"
                    image={image}
                    alt="Card Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
