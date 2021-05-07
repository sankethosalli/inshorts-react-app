import styled from "styled-components";
import "./Footer.css";



const Footer = (props)=>{
    return(

        <Container>
            
<Content className="flex-container footer">


<div>
<div>
<img src="/images/footer0.png" alt="" />
</div>

<div>
<span class="inshorts-small-white">inshorts </span> 
<span class="inshorts-small-grey">
 medialabs pvt. ltd. <br/>
&copy;COPYRIGHT 2021
</span>
</div>
</div>


<div class="footer-vertical-seperator"></div>


<div className="right-box">
    
    <div className="contact-us">
    Contact US
    </div>

    <br/><br/>

<div className="others">
    <a>Terms &amp; conditions</a><br/>
    <a>Privacy Policy</a><br/>
    <a>Editorial Policy</a><br/>
</div>

</div>



</Content>
        
        </Container>

    );
};






const Container=styled.div`
margin-bottom:0;
padding-bottom:0;
background-color:#2d2d38;
padding:20px 60px;
width:100%;


`;



const Content=styled.div`



/* min-height:15vh; */
max-width:1020px;
width:100%;
margin:auto;


img{
    width:200px;
}



`;



export default Footer;