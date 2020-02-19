import React, {useState, useEffect} from 'react';
import './TrendingGames.scss';
import InnerNavigation from '../InnerNavigation/InnerNavigation';

const Trending = (props) => {

   useEffect(x=> {
      fetchGames();
   }, []);

  const [games, setGames] = useState([]);

  const [savedGames, setSavedGames] = useState([]);

   const fetchGames = async() => {
      let data = await fetch("https://c684fe17.ngrok.io/api/steam" );

      let items = await data.json();

      var i = 1;
      items.forEach(x=> x.index = i++);

      items.forEach(x=> console.log(x));

      setGames(items);

      setSavedGames([...items]);
   }


   const reverseGames = () => {
       setGames([...games.reverse()]);
   }

   const onSearch = (text) => {
      var result = savedGames.filter(x=> x.name.toLowerCase().includes(text.toLowerCase()));
      setGames(result);
   }

   const showGames = games.map((game) => {
      return(
        <div className= "games">
          <div className= "game">
            <div className= "game__desc"> {game.index} </div>
            <div className= "game__desc game__title ">
                  <img src= {game.header_image} />
                  <div><a href= {game.link}>{game.name}</a></div>
            </div>
            { game.release_date.coming_soon ? (<div className= "game__desc">Comming Soon</div>) :
            (<div className= "game__desc"> {game.release_date.date} </div>) }
            { game.is_free || game.price_overview == null ? ( <div className= "game__desc"> free</div> ) : (
            <div className= "game__desc"> {game.price_overview.final / 100}<span> {game.price_overview.currency}</span> </div> )}
            <div className= "game__desc"> N/A (N/A) </div>
            <div className= "game__desc"> {game.owners} </div>
          </div>
        </div>
      ) 
    })


   return (
      <div className = "container">
         <div className = "container__title">trending now on steam</div>
         <InnerNavigation onClick={reverseGames} onSearch = {onSearch}/>
            {showGames}
      </div>
   );
};

export default Trending; 