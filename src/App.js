import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar'; 
import NewsContent from './components/NewsContent/NewsContent'
import apiKey from './data/config';

function App() {

  const [category , setCategory] = useState("general");
  const [newsArray , setNewsArray] = useState([]);
  const [newsResult , setNewsResult] = useState();
  const [loadmore , setLoadmore] = useState(20);
  const [country , setCountry] = useState('in');


  const newsApi = async() => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&category=${category}&pageSize=${loadmore}`);
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    }
    catch(error) {
      console.log(error);
    }
  };

  console.log(newsArray); 

  useEffect(() => {
    newsApi();// eslint-disable-next-line
  } ,[newsResult,category,loadmore,country]);

  return (
    <div className="App">
      <Navbar setCategory = {setCategory}
      setCountry={setCountry}/>
      <NewsContent setLoadmore={setLoadmore}
      loadmore = {loadmore} 
      newsArray ={newsArray} 
      newsResult= {newsResult}
       />
      <Footer/>
    </div>
  );
}

export default App;