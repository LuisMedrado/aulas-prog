import { createContext, useContext, useState } from 'react';

const AppDataContext = createContext(null);

export const CATEGORIAS = {
    ranked: 'Ranqueada',
    clash: 'Duelo 1x1',
    '4fun': 'Diversão',
};

const SEED_MATCHES = [
    {
        id: 'seed-1',
        imagem: require('../../assets/images/interfaceAssets/league_icon.png'),
        titulo: 'mu? qui? nha?',
        categoria: 'Ranqueada',
        data: '18/06 às 21:00h',
        funcao: 'chefe',
        isAnfitriao: true,
        descricao: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
        id: 'seed-2',
        imagem: require('../../assets/images/interfaceAssets/rdr2_icon.png'),
        titulo: 'tosse esquisita',
        categoria: 'Diversão',
        data: '23/06 às 19:00h',
        funcao: 'aviaozinho',
        isAnfitriao: false,
        descricao: 'Yeah, boy',
    },
    {
        id: 'seed-3',
        imagem: require('../../assets/images/interfaceAssets/csgo_icon.png'),
        titulo: 'presente professor',
        categoria: 'Duelo 1x1',
        data: '20/06 às 09:00h',
        funcao: 'chefe',
        isAnfitriao: true,
        descricao: 'Rumo ao topo',
    },
    {
        id: 'seed-4',
        imagem: require('../../assets/images/interfaceAssets/apex_icon.png'),
        titulo: 'jogo morto',
        categoria: 'Ranqueada',
        data: '20/06 às 14:20h',
        funcao: 'chefe',
        isAnfitriao: true,
        descricao: 'Bora queimar tudo',
    },
    {
        id: 'seed-5',
        imagem: require('../../assets/images/interfaceAssets/valorant_icon.png'),
        titulo: 'tiro com magia',
        categoria: 'Diversão',
        data: '18/06 às 21:00h',
        funcao: 'chefe',
        isAnfitriao: true,
        descricao: 'Valorosos',
    },
    {
        id: 'seed-6',
        imagem: require('../../assets/images/interfaceAssets/mine_icon.png'),
        titulo: 'minezao damassa',
        categoria: 'Diversão',
        data: '18/06 às 21:00h',
        funcao: 'aviaozinho',
        isAnfitriao: false,
        descricao: 'Construtores',
    },
];

export function AppDataProvider({ children }) {
    const [user, setUser] = useState(null);
    const [matches, setMatches] = useState(SEED_MATCHES);
    const [selectedServer, setSelectedServer] = useState(null);

    function login(nome) {
        setUser({ nome });
    }

    function logout() {
        setUser(null);
    }

    function addMatch(match) {
        setMatches((prev) => [match, ...prev]);
    }

    const value = {
        user,
        login,
        logout,
        matches,
        addMatch,
        selectedServer,
        setSelectedServer,
    };

    return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
}

export function useAppData() {
    const context = useContext(AppDataContext);
    if (!context) {
        throw new Error('useAppData must be used within an AppDataProvider');
    }
    return context;
}
