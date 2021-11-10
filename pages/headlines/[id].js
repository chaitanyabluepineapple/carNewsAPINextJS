import styles from '../../styles/Single.module.css'

export const getStaticPaths = async () => {

    const apiResponse = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=069bc61f2f154e118cce721f4e1a8520');
    const response = await apiResponse.json();
    const { articles } = response;
    console.log(articles)

    const paths = articles.map(index => ({
       params: { id: index.toString() }
    })
    );

    return {
        paths, 
        fallback: true,
    }
}

export const getStaticProps = async (pageContext) => {
    const id = encodeURI(pageContext.params.id);
    const response = await fetch(`https://newsapi.org/v2/everything?apiKey=069bc61f2f154e118cce721f4e1a8520&qInTitle=${id}`)
    const singleData = await response.json();
    const { articles } = singleData;
    console.log(articles)
    return {
        props: { 
            articles,
            id,
        }
    }
}

const Details = ({ articles, id }) => {
    console.log("data",articles)
    console.log("id",id)
    return (
        <div className={styles.container}>
            {articles.map((article, id) => (
                <div key={id} className={styles.mainBody} >
                        <h1 className={styles.title}>{article.title}</h1>
                        <h2 className={styles.content}>{article.content}</h2>
                        <p className={styles.description}>{article.description}</p>
                        <img className={styles.image} src={article.urlToImage} />
                        <p className={styles.date}>Published Date: {article.publishedAt}</p>
                        <p className={styles.name}>{article.name}</p>
                        <h4 className={styles.author}>Author Name: {article.author}</h4>
                        <p className={styles.url}>To Read Full News Visit This Link<a href={article.url} className={styles.span}>Click Here</a></p>
                </div>
            ))}
        </div>
    );
}

export default Details;