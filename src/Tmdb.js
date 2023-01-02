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

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'best',
                title: 'Melhores filmes',
                items: []
            },
            {
                slug: 'supernatural',
                title: 'Sobrenatural',
                items: []
            },
            {
                slug: 'gore',
                title: 'Gore',
                items: []
            },
            {
                slug: 'classics',
                title: 'Clássicos',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentário',
                items: []
            },
            {
                slug: 'ffootage',
                title: 'Found Footage',
                items: []
            },
            {
                slug: 'trash',
                title: 'Trash',
                items: []
            },
            {
                slug: 'cosmic',
                title: 'Cósmico',
                items: []
            },
        ];
    }
}