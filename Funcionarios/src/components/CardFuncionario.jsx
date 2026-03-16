import styles from './CardFuncionario.module.css';

function CardFuncionario({ nome, cargo, dataAdmissao, foto }) {
    return (
        <div className={styles.card}>
            <img className={styles.foto} src={foto} alt={nome} loading='lazy' />
            <h2 className={styles.nome}>{nome}</h2>
            <p className={styles.texto}>{cargo}</p>
            <p className={styles.texto}>Admitido em: {dataAdmissao}</p>
        </div>
    );
}

export default CardFuncionario;
