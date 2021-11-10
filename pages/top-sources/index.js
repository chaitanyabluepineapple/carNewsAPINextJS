import Head from 'next/head'
import styles from '../../styles/Sources.module.css'

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(process.env.NEXT_PUBLIC_SOURCE_API);
    const resSources = await apiResponse.json();
    const { sources } = resSources;

    return {
        props: {
            sources
        }
    }
};


const pagesourceslist = ({ sources }) => {
    return (
        <div className={styles.container}>
            {/* Bootstraps CDN */}
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href=
                    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity=
                    "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                    crossOrigin="anonymous"></link>
            </Head>
            <div className={styles.row}>
                <center><h1>Top Sources</h1></center>
                <div className={styles.card}>
                    {sources.map((key) => (
                        <>
                            <div className="col-sm-4 mx-auto" >
                                <div className={styles.card}>
                                    <h5 className={styles.cardText}>{key.name} </h5>
                                    <a href={key.url} className={styles.cardImg} >{key.url}</a>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default pagesourceslist;