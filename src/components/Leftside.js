import React from "react";
import styled from "styled-components";
import "./Leftside.css";





class Leftside extends React.Component {

  constructor(props){
    super(props);
    this.state={
show:true,
    }  
  
this.handleShow=this.handleShow.bind(this);
};
  


handleShow(self){
  self.state.show=!self.state.show;

// console.log(self.state.show);



}



render() {
  var self=this;

  return(

    <ContainerLeftside>

<ContainerInner>


<Layout>

<Left>
      <LanguageWrapper>
  
        <a className="active" href="en">
        English
        </a>
         <a href="hi">
         
हिंदी
         </a>
         
           
        </LanguageWrapper>

<SeperatorLine>
</SeperatorLine>

<Categories>
<div className="categories-heading">Categories</div>

<CategoriesList>

<a href="/">
All News
</a>


<a className="active" href="/">
India
</a>

<a href="/">
Business
</a>


<a href="/">
Sports
</a>


<a href="/">
World
</a>

<a href="/">
Politics
</a>

<a href="/">
Technology
</a>

<a href="/">
Startup
</a>

<a href="/">
Entertainment
</a>

<a href="/">
Miscellaneous
</a>

<a href="/">
Hatke
</a>

<a href="/">
Science
</a>

<a href="/">
Automobile
</a>


</CategoriesList>

</Categories>


</Left>




<Right className="right">

<div onClick={()=> self.handleShow(self)}>


{this.state.show===false ? (
  <a>
  <i class="fa fa-bars"></i>
  <sup>
  Menu
  </sup>
  </a>
  
):(
<a>
<i class="fa fa-window-close"></i>
<sup>
CloseP
</sup>
</a>
)}

</div>

</Right>



</Layout>

</ContainerInner>

    </ContainerLeftside>

);
}

}








const ContainerLeftside=styled.div`

position: fixed;
padding:0;
top:0;
left:0;

height:100vh;


z-index:4;
`;


// console.log(ContainerLeftside.div);


const ContainerInner = styled.div``;




const LanguageWrapper = styled.div`
padding:36px 30px;



a{
text-decoration:none;
padding:6px 10px;

border: 1px solid rgba(228, 228, 255, 0.4);

color:white;

&:nth-child(1) {
          border-top-left-radius:3px;
          border-bottom-left-radius:3px;
}

&:nth-child(2) {
          border-top-right-radius:3px;
          border-bottom-right-radius:3px;
padding-left:24px;
padding-right:24px;
        }

&:hover{
  color:red;
}

}


.active{
  color:rgb(66, 66, 66);
  background-color:rgba(255, 255, 255, 0.6);
}




`;



const SeperatorLine = styled.div`
width:95%;
height:1px;
background-color:#e5e5fd;
margin:auto;
`;

const Categories = styled.div`
padding: 0 8px;
padding-top:14px;

`;



const CategoriesList = styled.div`
padding:20px 8px;
margin:auto;

.active{
  background-color:rgba(228, 228, 255, 0.4);
}


a{
  border-radius:2px;
  padding:8px 36px;
  margin-top:3px;
  display:block;
  text-decoration:none;
color:#e4e4e4;


&:hover{
  background-color:rgba(228, 228, 255, 0.1);
}

}


`;




const Left = styled.div`
grid-area:leftleft;

background-color:rgb(48,48,54);
height:100vh;
`;

const Right = styled.div`
grid-area:leftright;

padding:20px 0;

`;




const Layout = styled.div`
display: grid;
/* background-color:yellow; */

margin-top:0;
top:0;
padding:0;

grid-template-areas: "leftleft leftright";
grid-template-columns: minmax(220px, 220px) minmax(100px, 100px);
column-gap: 25px;
row-gap: 25px;
`;



export default Leftside;