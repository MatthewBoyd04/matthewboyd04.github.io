import ListGroup from "./Components/Misc/ListGroup";
import Button from "./Components/Misc/Button";
import MainNavigationBar from "./Components/PageLayout/MainNavigationBar";
import Footer from "./Components/PageLayout/Footer";
import { useState } from "react";

import About from "./Components/Tabs/About";
import Blog from "./Components/Tabs/Blog";
import CV from "./Components/Tabs/CV";
import Home from "./Components/Tabs/Home";


/*
function App() {
  let cities = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} />
      <ListGroup items={fruits} heading="Fruits" onSelectItem={handleSelectItem}/>
    </div>
  );
}

*/

/*
function App() {
  return (
    <div>
      <Alert> 
        Hello <h1>World</h1>
      </Alert>
    </div>
  );
}
*/

export enum Tab{
  Home = "Home",
  About = "About",
  CV = "Projects",
  Blog = "Blog"
}

function App() {

  const [selectedTab, setTab] = useState(Tab.Home)
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(null);

  const onTabButtonPressed = (tabNumber: number) => {
    const tabValues = Object.values(Tab);
    const selectedTabValue = tabValues[tabNumber];
    setTab(selectedTabValue);
    setSelectedBlogPostId(null);
    console.log("Tab " + selectedTabValue + " pressed");
  };

  const onBlogPostClick = (postId: string) => {
    setSelectedBlogPostId(postId);
    setTab(Tab.Blog);
  };

  const onSelectPost = (postId: string) => setSelectedBlogPostId(postId);
  const onClearPost = () => setSelectedBlogPostId(null);

  const renderMainPage = () => {
    switch(selectedTab){
      case Tab.Home:
        return <Home/>
      case Tab.About:
        return <About/>
      case Tab.CV:
        return <CV onBlogPostClick={onBlogPostClick}/>
      case Tab.Blog:
        return <Blog selectedPostId={selectedBlogPostId} onSelectPost={onSelectPost} onClearPost={onClearPost}/>
    }
  }

  return (
    <div>
      <MainNavigationBar tabNames={Object.values(Tab)} onTabButtonPressed={onTabButtonPressed}/>
      <main style={{ flex: 1 }} className="bg-primary">
        {renderMainPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
