import React from 'react';
import './InnerNavigation.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';
// import { faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons';
// import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

const innerNavigation = (props) => {


   const onSearchInputChange = (e) => {
      console.log("search input change");
      props.onSearch(e.target.value);
   }

   return (
      <div>
         <div className = "navigation">
            <div className = "navigation__search-box">
               <div className = "navigation__search-text">search:</div>
               <input className = "navigation__input" onChange={onSearchInputChange} type = "text" placeholder = "type here"/>
            </div>
            <div className = "navigation__pagination">pagination</div>
         </div>
         <div className = "filters">
            <div className = "filter" onClick={props.onClick}># <FontAwesomeIcon icon = { faArrowsAltV } className = "icon"/></div>
            <div className = "filter">game <FontAwesomeIcon icon = { faArrowsAltV } className = "icon" /></div>
            <div className = "filter">release <br/> date <FontAwesomeIcon icon = { faArrowsAltV } className = "icon" /></div>
            <div className = "filter">price <FontAwesomeIcon icon = { faArrowsAltV } className = "icon" /></div>
            <div className = "filter">score rank <FontAwesomeIcon icon = { faArrowsAltV } className = "icon" /></div>
            <div className = "filter">owners <FontAwesomeIcon icon = { faArrowsAltV } className = "icon" /></div>
         </div>
      </div>   
   );
};

export default innerNavigation; 