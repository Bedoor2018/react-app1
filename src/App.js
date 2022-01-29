import React from "react";
import Button from "./Button";
import Article from "./Article";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

class App extends React.Component {
  render() {
    const categories = [
      "Business",
      "Entertainment",
      "general",
      "Health",
      "Technology",
      "All"
    ];
    const articles = [
      {
        title:
          "UOP professor explains future impacts of the James Webb telescope - KCRA News",
        description:
          "NASA and scientists around the world have waited decades for the James Webb telescope to begin its mission. On Monday, it reached its destination.",
        url: "https://www.youtube.com/watch?v=i_cJahrnlf4",
        img: "https://i.ytimg.com/vi/i_cJahrnlf4/hqdefault.jpg",
      },
      {
        title:
          "Nicor Gas Prices Expected to Lower Next Month, Company Says - NBC Chicago",
        description:
          "Nicor Gas filed with the Illinois Commerce Commission to reduce its monthly gas cost, which goes into effect next month, the company said Thursday.Nicor Gas filed with the Illinois Commerce Commission to reduce its monthly gas cost, which goes into effect next month, the company said Thursday.",
        url:
          "https://www.nbcchicago.com/news/local/nicor-gas-prices-expected-to-lower-next-month/2740239/",
        img:
          "https://media.nbcchicago.com/2022/01/GettyImages-166273240.jpg?quality=85&strip=all&resize=1200%2C675"
      },
      {
        title:
          "Bianca Belair, Liv Morgan and the Raw Women's division make Royal Rumble proclamations - WWEBianca Belair, Liv Morgan and the Raw Women's division make Royal Rumble proclamations - WWE",
        description:
          "The women of Monday Night Raw, Bianca Belair, Liv Morgan, Dana Brooke, Rhea Ripley, Nikki A.S.H., Tamina, Queen Zelina and Carmella, are all staking their cl...",
        url: "https://www.youtube.com/watch?v=uQiUeHxqb_0",
        img: "https://i.ytimg.com/vi/uQiUeHxqb_0/hqdefault.jpg"
      },
      {
        title:
          "Oxford scientists seek volunteers to get COVID-19 deliberately - Business Insider",
        description:
          "Britain is the first country to conduct a human challenge trial, exposing people to a low dose of the coronavirus and observing the immune response.",
        url: "https://www.businessinsider.com/oxford-researchers-seek-volunteers-willing-to-get-covid-19-science-2022-1",
        img: "https://i.insider.com/61f2d06b792e7300116be535?width=1200&format=jpeg"
      },
      {
        title:
          "Apple Seeds First Beta of watchOS 8.5 to Developers - MacRumors",
        description:
          "Apple today seeded the first beta of an upcoming watchOS 8.5 beta to developers for testing purposes, with the new software coming just a day after...",
        url:"https://www.macrumors.com/2022/01/27/apple-seeds-watchos-8-5-beta-1-to-developers/",
        img: "https://images.macrumors.com/t/D0L-mzmZmiuvoRBrXoV9pov4M1M=/1600x/article-new/2021/06/watchOS-8-on-Apple-Watch-feature.jpg"
      }
    ];
    return (
      <div className="container-fluid">
        <div className="row vh-100">
          <div className=" col-12 col-md-12 bg-Light p-0">
    {/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Header />;
</nav>
{/* Navbar */}

            <div className="nav d-flex justify-content-evenly mt-2 bg-Nav">
              {categories.map(button => {
                return <Button name={button} />;
              })}
            </div>
            {/*news cards*/}
            <div className="row m-3 " id="newsCard">
              {/*Fetching & mapping / js file*/}
              {articles.map(article => {
                return <Article name={article} />;
              })}
            </div>
            
          </div>
          <footer className="text-center text-lg-start bg-light text-muted ">
          <Footer />;
          </footer>
        </div>
      </div>
    );
  }

  
}

export default App;
