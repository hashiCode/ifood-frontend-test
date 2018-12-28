# Spotifood [![Build Status](https://travis-ci.org/hashiCode/ifood-frontend-test.svg?branch=master)](https://travis-ci.org/hashiCode/ifood-frontend-test)

Pode ser acessado em http://hashicode-spotifood.herokuapp.com/
Ou localmente via `npm start` na pasta do projeto.

## Arquitetura

- O projeto foi inicializado via `create-react-app`
- Foi utilizado o [reactstrap](https://reactstrap.github.io/) para a criação dos componentes.
- De maneira resumida, os principais componentes são:
  - `Login`: para permitir o usuário logar via _Implicit Grant Flow_ e obter o token de acesso.
  - `FeaturedPlaylist`, compostos pelos seguintes componentes:
    - `FilterPanel` - renderiza os filtros consumindo a api de filtros
	- `PlaylistsResult` - renderiza as playlist consumindo a api de filtros do Spotify junto com os parâmetros definidos no `FilterPanel

## Pontos a serem melhorados:
- Aprender a utilizar o `Jest` para testar os componentes e evitar possíveis bugs. Com isso seria possível integrar o `TravisCI` com alguma ferramenta de cobertura de testes (como o [Coveralls](https://coveralls.io/)).
- Verificar se existe alguma outra alternativa mais segura para armazenar o token de acesso à api do spotify que não seja o `localstorage`
- Melhorar a renderização das imagens do álbum, que hoje é feito basicamente via `<img />`


