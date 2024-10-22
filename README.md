
# Focus Timer Versão 2.0

Essa página é uma aplicação web chamada Focus Timer V2, que implementa a técnica de produtividade Pomodoro. A técnica consiste em dividir o tempo de trabalho em blocos com intervalos, normalmente de 25 minutos de foco, seguidos de pequenos intervalos de descanso.




## Funcionalidades


1. **Exibição de um temporizador**: Mostra o tempo restante, começando em 25 minutos e 0 segundos.

2. **Botão de iniciar/pausar o temporizador**: Permite iniciar ou pausar o temporizador, alternando o estado de execução.

3. **Botão de reiniciar o temporizador**: Reinicia o temporizador, voltando aos valores iniciais (25 minutos e 0 segundos).

4. **Aumentar tempo**: O botão "Aumentar 5 minutos" adiciona 5 minutos ao temporizador.

5. **Diminuir tempo**: O botão "Diminuir 5 minutos" subtrai 5 minutos do temporizador.

6. **Modo sonoro "Floresta"**: Ativa ou desativa o som de floresta ao clicar no botão "Floresta", e troca a cor de fundo.

7. **Modo sonoro "Chuva"**: Ativa ou desativa o som de chuva ao clicar no botão "Chuva", e troca a cor de fundo.

8. **Modo sonoro "Cafeteria"**: Ativa ou desativa o som de cafeteria ao clicar no botão "Cafeteria", e troca a cor de fundo.

9. **Modo sonoro "Lareira"**: Ativa ou desativa o som de lareira ao clicar no botão "Lareira", e troca a cor de fundo.

10. **Controle de áudio para cada modo**: Apenas um som pode tocar por vez. Se um novo som é ativado, o anterior é pausado.

11. **Funcionalidade de acessibilidade**: Usa a classe `.sr-only` para ocultar texto visualmente, mas mantê-lo acessível para leitores de tela, como nos botões que descrevem as funções (iniciar, aumentar tempo, modos sonoros, etc.).

12. **Animações ao passar o mouse**: Aplica animação de "aumentar" nos botões de controle e modos sonoros ao passar o mouse, para feedback visual.

13. **Responsividade**: O layout muda para uma disposição em coluna em telas menores, ajustando o tamanho da fonte e o espaçamento.
## Aprendizados

O que você aprendeu construindo esse projeto? 


1. **Integração de HTML, CSS e JavaScript** para criar uma aplicação interativa com um temporizador funcional.
2. **Manipulação de elementos do DOM** com JavaScript, usando eventos como `click` para ativar ações específicas, como iniciar, pausar ou resetar o contador.
3. **Uso de classes e controle de estados no JavaScript**, como alternar entre diferentes modos (floresta, chuva, cafeteria, lareira) e manter estados como se o som está mudo ou se o temporizador está rodando.
4. **Controle de áudio** no JavaScript, permitindo reproduzir e pausar diferentes sons ambientes de acordo com o modo ativado.
5. **Estilização avançada com CSS**, incluindo uso de **clamp** para definir tamanhos responsivos, além de propriedades como **transform** e **transition** para criar animações suaves ao interagir com os botões.
6. **Responsividade** usando **media queries** para ajustar o layout em telas menores.
7. **Uso de `localStorage` para persistência de dados** e manter o estado da aplicação ao recarregar a página.
8. **Acessibilidade** ao aplicar a classe `sr-only` para melhorar a experiência de usuários que dependem de leitores de tela.
9. **Uso de variáveis CSS (`:root`)** para facilitar a mudança de temas de cores com base no modo ativo da aplicação. 

Esse projeto permitiu aprofundar o entendimento sobre como combinar funcionalidades de temporizador com interatividade e personalização de temas.


## Demonstração


https://github.com/user-attachments/assets/661f50e4-58c1-4873-aad7-134881547f9b


## Screenshots

![App Screenshot](https://i.imgur.com/8u3trFK.png)

