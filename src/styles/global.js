import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 

*{
    margin:0 ;
    padding:0 ;
    box-sizing:border-box;
    outline: 0; 
} 

:root{
 --grey:#2F302E; 
 --light-yellow:#D7AF70; 
 --dark-yellow:#BF8A36;
 --white:#FFFFFF; 
 --black:#0c0d0d ;
 --red:tomato;
} 
 
body{
    background-color: var(--grey);
   
}  

body , input , button{  
    font-family: 'PT Sans', sans-serif;
    
}

h1{
    color: var(--light-yellow); 
    margin-bottom: 15px;
}
h1,h2,h3,h4,h5,h6{ 
    font-family: 'PT Sans Caption', sans-serif;
    font-weight: 700; 

} 

button{
    cursor: pointer;
} 

a{
    text-decoration: none;
} 



`;
