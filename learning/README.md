## Porque escrever testes?

Primeiramente, pensando em garantir o bom funcionamento do sistema.

![graph](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.parasoft.com%2Fwp-content%2Fuploads%2F2020%2F06%2FGraph_Applied_Software_Measurement_Graph-e1691169339658.jpg&f=1&nofb=1&ipt=67e17a836da9a3737163e865d0e05db66ec98e561e83e26f5dce76854a78c071&ipo=images)

Essa imagem mostra muito bem o custo de um erro (bug), erros quanto mais cedo identificados mais barato para a empresa é resolve-ló. Principalmente quando ele é identificado em produção, que dependente da criticidade do sistema pode custar caro. Por isso, testes são fundamentais para prevenção de bugs. Como o gráfico mostra a maior parte dos bugs são encontrados por meio dos testes, unitários, funcionais e manuais.

Por isso é extremamente necessário a escrita de testes focando sempre num bom funcionamento do sistema.

## Testes funcionais

Os testes funcionais servem principalmente para medir requisitos que são fundamentais para aquela determinada aplicação conhecidos como requisitos funcionais. Dentro dos testes funcionais podemos pegar e utilizar algo bem comum quando se trabalha com testes que é a piramide de testes, onde tem algumas etapas começando por sua base:

- Testes unitários/unidade: Testam a menor unidade do sistema (geralmente testando funções específicas de forma isolada)

  - Vantagens: Baixo custo, fácil elaboração, ótima precisão, garante que aquela parte separada está funcional.
  - Desvantagem: Não entrega tanto valor em relação aos outros tipos de testes. Foge do caso de uso do usuário.

- Testes de integração: Testam unidades de forma integradas.

  - Vantagens:Geram mais valor ao produto, simulando melhor um caso de uso específico.
  - Desvantagens: Mais difícil de fazer, custo maior.

- Testes end to end (E2E) (Testes de aceitação): Testam TODO o fluxo do usuário na aplicação.

  - Vantagens: Muito valioso para a aplicação. Se bem feitos conseguem simular todo o fluxo que o usuário vai percorrer, assim prevendo diversas ações que o usuário pode tomar.
  - Desvantagens: Muito caros, são demorados (criação e execução), tem maior complexidade na escrita e são frágeis (Flaky) podem mudar constantemente.

## Testes não funcionais

Testam a disponibilidade da aplicação (com foco nos requisitos não funcionais).

Desempenho:

- Testes de carga: Testar o comportamento de um cenário com muitos usuários (com uma determinada carga específica).
- Teste de estresse: Testar o limite da aplicação até o seu limite.

## Ferramentas

Algumas ferramentas em algumas linguagens que atuo que podem ser usadas para testes.

- Jest (para testes unitários)
- Cypress (e2e)
- React testing library (testes para componentes)
- JUnit (Java)
- PyTest (Python)

## Padrões contraproducentes

- Ice cream cone: Esse padrão exemplifica algumas má práticas no desenvolvimento de testes com um time

## Outros tipos de testes

- Smoke Test (teste de fumaça): Testam as funcionalidades principais da sua aplicação.
- Testes de regressão visual: Testam se uma nova funcionalidade não altera um comportamento antigo.
- Test doubles (Dublês de testes):
  - Fakes: São dublês de teste com implementações reais, diferentes da de produção.
  - Stubs: São funções com retornos já pré determinados.
  - Mocks: São funções com retornos já pré determinados, que validam a camada da função.
  - Spies: Age como um espião sob uma função.
  - Dummies: São valores fictícios, que são passados mas não são utilizados.
