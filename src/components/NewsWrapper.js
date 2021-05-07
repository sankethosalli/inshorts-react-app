import React from "react";
import styled from "styled-components";



class NewsWrapper extends React.Component {
    

    
    constructor(props){
    super(props);
    this.state={
articleCount:4,
      };

      this.addArticles=this.addArticles.bind(this);
    };


    addArticles(){
              
        
      }


    render(){

    return(

<Container id="NewsWrapper">

<NewsCard>

<div class="image">
    <img src="https://picsum.photos/320/240" alt="" />
</div>

<div  class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac pharetra risus, in egestas augue. Sed orci risus, ultricies dictum mi vitae, finibus bibendum velit. Ut tincidunt sit amet velit ac finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc fringilla dolor rhoncus nunc auctor mollis. Vestibulum sodales id justo at pulvinar. Vivamus ut euismod ligula. Praesent a felis tincidunt, aliquet turpis et, sollicitudin ipsum. Nulla pellentesque pretium vestibulum. Pellentesque commodo at ante non facilisis. Mauris augue mauris, sodales eget felis sed, egestas pulvinar ante. Nunc a massa ligula. Phasellus malesuada massa et enim interdum condimentum. Nam fermentum cursus neque, eget vulputate augue rhoncus ut. Pellentesque volutpat suscipit mauris, sed ornare dolor ullamcorper tincidunt. Praesent sodales mi a tellus eleifend, eget posuere quam convallis. Nullam sit amet risus quis nulla pellentesque placerat eget non quam.
</div>

</NewsCard>





<NewsCard>

<div class="image">
<img src="https://picsum.photos/321/240" alt="" />
</div>

<div  class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac pharetra risus, in egestas augue. Sed orci risus, ultricies dictum mi vitae, finibus bibendum velit. Ut tincidunt sit amet velit ac finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc fringilla dolor rhoncus nunc auctor mollis. Vestibulum sodales id justo at pulvinar. Vivamus ut euismod ligula. Praesent a felis tincidunt, aliquet turpis et, sollicitudin ipsum. Nulla pellentesque pretium vestibulum. Pellentesque commodo at ante non facilisis. Mauris augue mauris, sodales eget felis sed, egestas pulvinar ante. Nunc a massa ligula. Phasellus malesuada massa et enim interdum condimentum. Nam fermentum cursus neque, eget vulputate augue rhoncus ut. Pellentesque volutpat suscipit mauris, sed ornare dolor ullamcorper tincidunt. Praesent sodales mi a tellus eleifend, eget posuere quam convallis. Nullam sit amet risus quis nulla pellentesque placerat eget non quam.
</div>

</NewsCard>


<NewsCard>

<div class="image">
<img src="https://picsum.photos/322/240" alt="" />
</div>

<div  class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac pharetra risus, in egestas augue. Sed orci risus, ultricies dictum mi vitae, finibus bibendum velit. Ut tincidunt sit amet velit ac finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc fringilla dolor rhoncus nunc auctor mollis. Vestibulum sodales id justo at pulvinar. Vivamus ut euismod ligula. Praesent a felis tincidunt, aliquet turpis et, sollicitudin ipsum. Nulla pellentesque pretium vestibulum. Pellentesque commodo at ante non facilisis. Mauris augue mauris, sodales eget felis sed, egestas pulvinar ante. Nunc a massa ligula. Phasellus malesuada massa et enim interdum condimentum. Nam fermentum cursus neque, eget vulputate augue rhoncus ut. Pellentesque volutpat suscipit mauris, sed ornare dolor ullamcorper tincidunt. Praesent sodales mi a tellus eleifend, eget posuere quam convallis. Nullam sit amet risus quis nulla pellentesque placerat eget non quam.
</div>

</NewsCard>


<NewsCard>

<div class="image">
<img src="https://picsum.photos/323/240" alt="" />
</div>

<div  class="content">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac pharetra risus, in egestas augue. Sed orci risus, ultricies dictum mi vitae, finibus bibendum velit. Ut tincidunt sit amet velit ac finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc fringilla dolor rhoncus nunc auctor mollis. Vestibulum sodales id justo at pulvinar. Vivamus ut euismod ligula. Praesent a felis tincidunt, aliquet turpis et, sollicitudin ipsum. Nulla pellentesque pretium vestibulum. Pellentesque commodo at ante non facilisis. Mauris augue mauris, sodales eget felis sed, egestas pulvinar ante. Nunc a massa ligula. Phasellus malesuada massa et enim interdum condimentum. Nam fermentum cursus neque, eget vulputate augue rhoncus ut. Pellentesque volutpat suscipit mauris, sed ornare dolor ullamcorper tincidunt. Praesent sodales mi a tellus eleifend, eget posuere quam convallis. Nullam sit amet risus quis nulla pellentesque placerat eget non quam.
</div>

</NewsCard>




</Container>

    );
};


};






const Container=styled.div`


margin:auto;
    min-width:860px;
    max-width:860px;


    /* background-color:blue; */
`;


const NewsCard=styled.div`
margin:2vh;
padding:3vh;

display: grid;


box-shadow:0 0 4px grey;

.image{
    grid-area:imagearea;
overflow:hidden;
}


.content{
    grid-area:contentarea;
}

grid-template-areas: "imagearea contentarea";
grid-template-columns: minmax(30%, 40%) minmax(70%, 70%);
column-gap: 25px;
row-gap: 25px;
`;




export default NewsWrapper;