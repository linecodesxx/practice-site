import styles from './BlogCard.module.scss';

interface BlogCardProps {
    title: string;
    description: string;
    link: string;
}

export const BlogCard = ({ title, description, link }: BlogCardProps) => {

    return (
        <div className={styles.blogCard}>
            <h3 className={styles.blogTitle}>{title}</h3>
            <p className={styles.blogDescription}>{description}</p>
            <a href={link} className={styles.readMore}>Читать →</a>
        </div>
        
    )
}