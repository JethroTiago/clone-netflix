const API_KEY = 'da54db69cd70d0c038a1de3218ea9347';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- Melhores filmes
- Sobrenatural
- Gore
- Clássicos
- Documentários
- Found Footage
- Trash
- Cósmico
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'toprated',
                title: 'Melhores filmes',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'supernatural',
                title: 'Sobrenatural',
                items: await basicFetch(`/trending/all/week?language=pt=BR&api_key=${API_KEY}`)
            },
            {
                slug: 'gore',
                title: 'Gore',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'classics',
                title: 'Clássicos',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'footage',
                title: 'Found Footage',
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trash',
                title: 'Trash',
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'cosmic',
                title: 'Cósmico',
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}