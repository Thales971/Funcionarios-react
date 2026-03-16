import CardFuncionario from './components/CardFuncionario';
import styles from 'CardFuncionario.module.css';

function App() {
    const funcionarios = [
        {
            id: 1,
            nome: 'Ana Silva',
            cargo: 'Desenvolvedora Frontend',
            dataAdmissao: '10/02/2023',
            foto: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
            id: 2,
            nome: 'Carlos Eduardo',
            cargo: 'Engenheiro de Software',
            dataAdmissao: '15/08/2022',
            foto: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            id: 3,
            nome: 'Mariana Souza',
            cargo: 'Designer UI/UX',
            dataAdmissao: '05/11/2021',
            foto: 'https://randomuser.me/api/portraits/women/68.jpg',
        },
        {
            id: 4,
            nome: 'Rafael Lima',
            cargo: 'Engenheiro DevOps',
            dataAdmissao: '12/01/2021',
            foto: 'https://randomuser.me/api/portraits/men/22.jpg',
        },
        {
            id: 5,
            nome: 'Juliana Costa',
            cargo: 'Gerente de Projetos',
            dataAdmissao: '20/03/2019',
            foto: 'https://randomuser.me/api/portraits/women/33.jpg',
        },
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Lista de Funcionários</h1>

            <div className={styles.gridCards}>
                {funcionarios.map((f) => (
                    <CardFuncionario
                        key={f.id}
                        nome={f.nome}
                        cargo={f.cargo}
                        dataAdmissao={f.dataAdmissao}
                        foto={f.foto}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
