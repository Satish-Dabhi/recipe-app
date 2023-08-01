import { Container, Typography, Link } from '@mui/material';


const footerStyle = {
    padding: '16px',
    backgroundColor: '#333', // Change this to your desired background color
    color: '#fff', // Change this to your desired text color
    marginTop: 'auto', // This will push the footer to the bottom of the page
    flexShrink: 0, // Prevent the footer from shrinking
  };

const Footer = () => {

    return (
        <footer className='footer'>
            <Container maxWidth="md">
                <Typography variant="body2" align="center">
                    App built by <Link href="https://satish-dabhi.github.io/satish-profile/">Satish Dabhi</Link>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
