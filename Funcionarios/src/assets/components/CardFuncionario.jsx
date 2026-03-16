import styles from './Card.module.css';

function Card({ nome, cargo, dataAdmissao, foto }) {
    return (
        <div className={styles.card}>
            <img className={styles['card-image']} src={foto} alt={nome} loading='lazy' />
            <h2 className={styles['card-title']}>{nome}</h2>
            <p className={styles['card-text']}>{cargo}</p>
            <p className={styles['card-text']}>Admitido em: {dataAdmissao}</p>
        </div>
    );
}

export default Card;
