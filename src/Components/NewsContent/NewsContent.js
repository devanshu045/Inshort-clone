import { Container } from '@material-ui/core'
import React from 'react'
import './NewsContent.css'
import Newscard from '../Newscard/Newscard'


const NewsContent = ({setLoadmore,loadmore,newsArray,newsResults}) => {

  return (
    <Container maxWidth="md">
        <div className="content">
             <div className="heading-message">
              <span>For the best experience use inshorts app on Your Smartphone</span>
              <img src="" alt="" />
              <img src="" alt="" />
             </div>

             {
              newsArray.map((newsItem) =>(
              
                    <Newscard newsItem={newsItem}/>
                    // console.log(newsItem)
              ))
             }

             {loadmore<=newsResults && (
              <>
                  <hr />
             <button className="loadmore" onClick={() =>setLoadmore(loadmore+20)}>
              Load More
             </button>
              </>
             )}
             
           
         
         
          
        </div>
    </Container>
    
  )
}

export default NewsContent