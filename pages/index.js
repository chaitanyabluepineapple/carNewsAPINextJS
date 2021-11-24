import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Headline.module.css'

export const getServerSideProps = async pageContext => {

    const apiResponse = await fetch(process.env.NEXT_PUBLIC_API);

    const url = process.env.NEXT_PUBLIC_API;
    console.log("Hello", url)
    const response = await apiResponse.json();
    console.log(response)
    const { articles } = response;
    console.log(articles)

    return {
        props: {
            articles,
            pageNumber: 1,
        },
    };
};

const allheadlines = ({ articles, pageNumber }) => {
    return (
        <div className={styles.container}>

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href=
                    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity=
                    "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossOrigin="anonymous"></link>
            </Head>

            <div className={styles.row}>
                <div className={styles.card}>
                    {articles.map((article, index) => (
                        <Link href={'/news/' + article.title} key={article.title} passHref >
                            <div className="col-sm-4 mx-auto">

                                <div className={styles.card1}>
                                    <h5 className={styles.cardText}>{article.title} </h5>
                                    <img className={styles.cardImg} src={article.urlToImage} />
                                    <h6 className={styles.cardText}>Published Date: {article.publishedAt}</h6>
                                </div>

                            </div>
                        </Link>
                    ))}

                </div>

            </div>
        </div>

    );
}


export default allheadlines;