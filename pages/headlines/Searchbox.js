import { useState } from "react"
import React from "react"
import styles from '../../styles/Search.module.css'
import Head from 'next/head'

function Searchbox() {

    //States
    const [searchValue, setSearchValue] = useState("News");
    const [newsData, setNewsData] = useState([]);

    const getAllData = async () => {
        const url = `https://newsapi.org/v2/everything?apiKey=069bc61f2f154e118cce721f4e1a8520&qInTitle=${searchValue}`;
        const response = await fetch(url);
        const resJon = await response.json();
        console.log(resJon.articles);
        setNewsData(resJon.articles);
    }

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSearchValue(e.target.value);
    };

    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href=
                    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity=
                    "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossOrigin="anonymous"></link>
            </Head>

            <div className={styles.searchMenu}>
                <input className={styles.inputBox} type="text" placeholder="Type Title,Article,Author....." onChange={handleChange} />
                <button className={styles.btn} onClick={getAllData}>Search</button>
            </div>

            <div className={styles.row}>
                <div className={styles.container}>
                    {newsData.map((news) => (
                        <> 
                            <div className="col-sm-4 mx-auto">
                                <div className={styles.card}>
                                    <h5 className={styles.cardText}>{news.title} </h5>
                                    <img className={styles.cardImg} src={news.urlToImage} />
                                    <h6 className={styles.cardText}>Published Date: {news.publishedAt}</h6>
                                </div>

                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Searchbox;