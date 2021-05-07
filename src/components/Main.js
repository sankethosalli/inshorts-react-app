import styled from "styled-components";
import "./Main.css";
import NewsWrapper from "./NewsWrapper";
import Footer from "./Footer";
// import $ from "jquery";
var $ = require( "jquery" );


function loadArticles(){
//  console.log("loadArticles()");   
window.location.reload();

 var NewsCardElement= ``;

 $("#NewsWrapper").append(NewsCardElement);

}



const Main = (props)=>{
    return(


<ContainerMain>


<TopSection>
For the best experience use inshorts app on your smartphone


<div>
    <img src="/images/downloadestore.png" alt="" />
</div>

</TopSection>


<NewsWrapper/>




<LoadMore>
<center>
<a onClick={()=> loadArticles()}>
Load More
</a>
</center>
</LoadMore>
        

<Footer/>


        </ContainerMain>

    );
};


const ContainerMain=styled.div`

outline:0;

margin-top:10vh;


/* background-color:red; */



`;



const TopSection=styled.div`
margin:auto;
width:860px;



padding:16px 26px;
font-size:90%;
color:white;
background-color:#ff5f25;


div{
    margin-left:15%;
    display:inline-block;
    img{
        height:40px;
    }
}

`;




const LoadMore=styled.div`


padding:20px;
margin-top:4vh;
margin-bottom:5vh;



a{
    cursor: pointer;
border: 1px solid grey;
    padding: 10px 20px;
    
 
}


`;





export default Main;