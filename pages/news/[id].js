import styles from '../../styles/Single.module.css'

export const getStaticPaths = async () => {

    const apiResponse = await fetch(process.env.NEXT_PUBLIC_API);
    const response = await apiResponse.json();
    const { articles } = response;

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&qInTitle=${id}`)
    const singleData = await response.json();
    const { articles } = singleData;
    return {
        props: { 
            articles,
            id,
        }
    }
}

const Details = ({ articles, id }) => {

    return (
        <div className={styles.container}>
            {articles.map((article) => (
                <div key={id} className={styles.mainBody} >
                        <h1 className={styles.title}>{article.title}</h1>
                        <h3 className={styles.content}>{article.content}</h3>
                        <p dangerouslySetInnerHTML={{__html:article.description}} className={styles.description}></p> 
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