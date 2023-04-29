
import { useEffect, useState } from 'react';
import './App.css';
import Navinshorts from './Components/NavDetails/Navinshorts'
import NewsContent from './Components/NewsContent/NewsContent';
import axios from 'axios';
import Apikey from './data/config';
import Footer from './Components/Footer/Footer';


function App() {
  const [category,setCategory] = useState('general')
  const [newsArray,setNewsArray] = useState([])
  const [newsResults , setNewsResults] = useState()
  const [loadmore, setLoadmore] = useState(20)

const newsApi = async ()=>{
  try{ 
       const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${Apikey}&category=${category}&pageSize=${loadmore}`)
       setNewsArray(news.data.articles)
       setNewsResults(news.data.totalResults)
  }
  catch(err){
   console.log(err);
  }
}
// console.log(newsArray)

useEffect(()=>{
  newsApi();
},[category,newsResults,loadmore])


  return (
    <div>

      <Navinshorts setCategory={setCategory} />
      <NewsContent setLoadmore={setLoadmore} loadmore={loadmore} newsArray={newsArray} newsResults={newsResults} />
      
      <Footer/>
    </div>
  );
}

export default App;
