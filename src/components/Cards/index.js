import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";


function Cards({ image,name, Population,Region,Capital,Nativename,SubRegion }) {
    
    const [display,setDisplay] = React.useState("none")
    const [btn,setBtn] = React.useState(true)
    
    const handleDisplay = () => {
        if(display === "none") {
            setDisplay("block")
            setBtn(false)
        }
        else{
            setDisplay("none")
            setBtn(true)
        }
    };
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="190"
                image={image}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Box style={{ display: 'flex' }}>
                    <Typography variant="h6">
                        Population :
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {Population}
                    </Typography>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Typography variant="h6">
                    Region :
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {Region}
                    </Typography>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Typography variant="h6">
                    Capital  :
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {Capital}
                    </Typography>
                </Box>
                <Box style={{ display: display }}>
                <Box style={{ display: 'flex' }}>
                    <Typography variant="h6">
                    Native name :
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {Nativename}
                    </Typography>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Typography variant="h6">
                    Sub Region :
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {SubRegion}
                    </Typography>
                </Box>
                
                </Box>

                
                
            </CardContent>
            <CardActions>                
                <Button size="large" variant="contained" onClick={handleDisplay}>Show {btn?"More":"Less"}</Button>
            </CardActions>
        </Card>
    );
}

export default Cards;