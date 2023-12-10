# Desafio React 2.2023

 Meu nome é Alexsandra e sou aluna do curso de Programação Web FullStack na Campinho Digital 2.2023. O projeto que apresento tem como objetivo a aplicação prática dos conhecimentos adquiridos, inicialmente focando em HTML, CSS e JavaScript puro. Avançamos gradativamente, explorando conceitos básicos e, posteriormente, aprofundando-nos em estudos sobre JSON, React e APIs.

Durante um período dedicado de 3 meses, participei ativamente de aulas ao vivo e dos debates nos fóruns dos grupos Discord e Whatsapp. Essa experiência foi enriquecida pelas oficinas "Mão na Massa" promovidas pela equipe da Campinho Digital, que abordaram temas relevantes, como React e Consumo de APIs (ministrada por Raissa Barata, Engenheira de Software Frontend na Ifood S.A.) e Componentes Reutilizáveis com React (apresentada por Alícia Foureaux, Engenheira de Software Sênior na Togetherhood).

A sólida base adquirida e aprofundamentos realizados sobre o 'Desafio React' proporcionaram-me os recursos necessários para desenvolver meu primeiro projeto React. Optei por explorar o uso de APIs com foco nos Pokémon, desvendando códigos e construindo uma estrutura organizada e limpa. Além disso, dediquei atenção especial à estilização com animação e à responsividade do projeto.

Admito que o cansaço e as dificuldades iniciais causaram desmotivação em alguns momentos, mas a superação de cada obstáculo reavivou minha determinação. Cada passo conquistado renovou meu entusiasmo para continuar e concluir o projeto, que passou por várias tentativas até alcançar o resultado final. Espero sinceramente que apreciem o resultado, pois estou muito satisfeita por ter conseguido simplificar o básico.

## Projeto:
![p1](https://github.com/alexsabrasil/Desafio-react/assets/113733583/8166d1e0-bbb8-4b00-a29f-23494648d872)
![p2](https://github.com/alexsabrasil/Desafio-react/assets/113733583/f89591f7-9e94-4b43-ad86-30423920956a)

## Pokémon React App

Este projeto React consome a PokeAPI para exibir informações sobre Pokémon. Os usuários podem navegar entre os Pokémon, visualizar detalhes e interagir com a aplicação.

## Funcionalidades Principais

- **Consumo da API Pokémon:**
  - A aplicação utiliza a [PokeAPI](https://pokeapi.co/) para obter dados sobre os Pokémon.
  - A função `fetchPokemonData` faz chamadas assíncronas para a API e atualiza o estado com os dados recebidos.

- **Listagem de Pokémon:**
  - Os Pokémon são exibidos em cards na parte esquerda da página.
  - Cada card exibe o ID, imagem (se disponível) e nome do Pokémon.

- **Navegação entre Páginas:**
  - Botões "Previous" e "Next" permitem a navegação entre diferentes páginas de Pokémon.
  - Esses botões atualizam o estado da URL e fazem uma nova chamada à API.

- **Detalhes do Pokémon:**
  - Ao clicar em um card, o usuário pode ver informações detalhadas sobre o Pokémon selecionado na parte direita da página.

- **Estilo Responsivo:**
  - O layout do aplicativo é responsivo, adaptando-se a diferentes tamanhos de tela.

- **GitHub Pages Deploy:**
  - O aplicativo está hospedado no GitHub Pages, permitindo que outros usuários acessem a aplicação online.

## Melhorias Possíveis

- **Estilo:**
  - Aprimorar ainda mais o estilo e a aparência do aplicativo.
  - Adicionar animações para uma experiência mais interativa.

- **Melhor Gerenciamento de Estado:**
  - Explorar o uso de um gerenciador de estado mais robusto, como Redux, para facilitar o controle do estado em aplicações maiores.

- **Detalhes Adicionais:**
  - Adicionar mais informações sobre os Pokémon, como habilidades, estatísticas, etc.

- **Testes:**
  - Implementar testes para garantir a estabilidade e robustez do aplicativo.

## Como Executar o Projeto

1. Clone este repositório: `git clone (https://github.com/alexsabrasil/Desafio-react.git)`
2. Entre no diretório do projeto: `cd pokemon-react`
3. Instale as dependências: `npm install`
4. Inicie o aplicativo: `npm start`
5. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)

---

**Aviso:** Este README é um exemplo básico de estudo. Sintam-se à vontade para dar feedbacks.
