import { createTheme } from '@mui/material/styles';


const arcBlue = '#0B72B8';
const arcOrange = '#FFBA60';    
export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main:`${ arcBlue}`,

        },
        secondary:{
            main:`${arcOrange}`,
        }
    },
    typography:{
        h3: {
            fontWeight: 400
        },
    },
    components: {
        MuiMenu:{
            styleOverrides: {
                paper: {
                    backgroundColor: `${arcBlue}`,
                    color: 'white',
                    borderRadius: '10px',
                    marginTop: '2px',
                    borderRadius: '0px',
                },
            },  
        },
        MuiMenuItem:{
            styleOverrides: {
                root:{
                        opacity: 0.7,
                        "&:hover":{
                    opacity: 1
                    }   
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    marginLeft: 'auto',
                    marginRight: '25px',
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    fontFamily: 'Raleway',
                    textTransform: 'none',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginLeft: '25px',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius:'50px',
                    marginLeft: '50px',
                    marginRight: '25px',
                    fontFamily: 'Pacifico',
                    fontSize:"1rem",
                    textTransform: 'none',
                    height: '45px',
                    color: 'white',
                },
            },
        },
    }
})
