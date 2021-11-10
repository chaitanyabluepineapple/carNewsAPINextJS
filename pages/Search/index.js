import { useState } from "react"
import React from "react"
import styles from '../../styles/Search.module.css'
import Head from 'next/head'

function Searchbox() {

    //States
    const [searchValue, setSearchValue] = useState("News");
    const [newsData, setNewsData] = useState([]);

    //getData Function to fetch data accroding users search value
    const getAllData = async () => {
        const url = `${process.env.NEXT_PUBLIC_URL}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&qInTitle=${searchValue}`;
        const response = await fetch(url);
        const resJon = await response.json();
        setNewsData(resJon.articles);
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    };

    return (
        <div>
            {/* Bootstraps CDN */}
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