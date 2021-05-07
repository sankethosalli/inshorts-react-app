import styled from "styled-components";

const Header = (props)=>{
    return(
        <ContainerHeader>
            <Content>



            
                <Logo>
                    <a href="/home">
                        <img  src="/images/inshorts.png" alt="" /> 
                    </a>
                </Logo>
                
                
                
              
            </Content>
        </ContainerHeader>
    );
};




const ContainerHeader=styled.div`
background-color:white;
border-bottom:1px solid rgba(0,0,0, 0.08);
box-shadow: 0px 15px 10px -15px rgba(0,0,0,0.3); 

left:0;
padding:10px 24px;
position:fixed;
top:0;
width:100vw;

z-index:3;
`;


const Content=styled.div`

`;


const Logo=styled.div`
/* font-size:0px; */
/* left: -200px; */
padding-right:36px;

padding-top:6px;
padding-bottom:4px;

display:flex;
align-items: center;
justify-content: center;
/* margin:auto; */

a{
  img{
height:36px;

}
}
`;



export default Header;