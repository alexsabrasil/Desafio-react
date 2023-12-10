# Desafio React 2.2023

Olá,

Me chamo Alexsandra e faço parte da turma de Programação Web FullStack na Campinho Digital 2.2023. Estou empolgada em compartilhar o resultado do meu primeiro projeto React, que visa aplicar os conhecimentos adquiridos ao longo do curso, começando com HTML, CSS e JavaScript puro e evoluindo para conceitos mais avançados, como JSON, React e APIs.

Ao longo de três meses intensivos, participei ativamente de aulas ao vivo e contribuí para debates nos fóruns do Discord e Whatsapp. A experiência foi enriquecida pelas "Oficinas Mão na Massa" oferecidas pela equipe da Campinho Digital, com temas valiosos, como React e Consumo de APIs, ministrados por profissionais renomados, como Raissa Barata, Engenheira de Software Frontend na Ifood S.A., e Componentes Reutilizáveis com React, apresentados por Alícia Foureaux, Engenheira de Software Sênior na Togetherhood.

A base sólida que obtive e os aprofundamentos no 'Desafio React' me proporcionaram os recursos necessários para desenvolver meu projeto. Escolhi explorar APIs relacionadas aos Pokémon, desvendando códigos e construindo uma estrutura organizada e limpa. Além disso, dediquei especial atenção à estilização, incorporando animações e garantindo a responsividade do projeto.

É válido admitir que o cansaço e as dificuldades iniciais trouxeram momentos desafiadores, gerando desmotivação. Contudo, a superação de cada obstáculo reavivou minha determinação. Cada passo conquistado renovou meu entusiasmo para continuar e concluir o projeto, que passou por várias iterações até atingir o resultado final.

Como aprendizado, destaco:

- Aprofundamento na compreensão de variáveis e constantes
- Uso efetivo dos comandos git: `git add`, `git commit`, `git pull`, `git push`, `git branch`
- Domínio no gerenciamento de repositórios no GitHub (clone e fork)
- Habilidade adquirida na instalação do `npx create-react-app nome-do-seu-app`
- Aplicação prática do HTML semântico para melhorar a estrutura e a compreensão do código
- Utilização de seletores CSS para aprimorar a estilização e o design
- Proficiência no gerenciamento de eventos no DOM, enriquecendo a interatividade do aplicativo
- Exploração do método global `fetch()` , entendimento do `setState` , aplicação de conceitos de `API` e `componentização`
- Implementação do deploy no GitHub Pages

Espero que apreciem o resultado, pois estou verdadeiramente satisfeita por ter conseguido simplificar o básico, transformando aprendizado em prática.


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

1. Clone este repositório: `git clone https://github.com/alexsabrasil/Desafio-react.git`
2. Entre no diretório do projeto: `cd pokemon-react`
3. Instale as dependências: `npm install`
4. Inicie o aplicativo: `npm start`
5. Abra o navegador e acesse [http://localhost:3000/Desafio-react](http://localhost:3000/Desafio-react)

---

**Aviso:** Este README serve como um exemplo básico de estudo. Fiquem à vontade para fornecer feedbacks.
