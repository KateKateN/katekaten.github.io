import React from 'react';
import './Nav.scss';
import Trending from '../TrendingGames/TrendingGames';
import RecentGames from '../RecentGames/RecentGames';
import UpcommingGames from '../UpcommingGames/UpcommingGames';
import Playtime from '../Playtime/Playtime';
import Steam from '../Steam/Steam';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


const tabItems = ['trending games', 'recent games', 'upcomming games', 'top by playtime', 'steam stats' ];
const tabs = tabItems.map(tab => {
  return (
      <Tab className= "menu__item">{tab}</Tab>
  )
})


const contentList = [<Trending/>, <RecentGames/>, <UpcommingGames/>, <Playtime/>, <Steam/>];
const content = contentList.map(content => {
  return (
      <TabPanel>{content}</TabPanel>
  )
})

const nav = () => {

  const displayContent = (
    <Tabs defaultIndex= {0} onSelect={index => console.log(index)}>
      <TabList className = "menu">
        {tabs}
      </TabList>
      <div className= "content">
        {content}
      </div>
    </Tabs>
  )

 return (
   <div>
     {displayContent}
   </div>
 );
}

export default nav;