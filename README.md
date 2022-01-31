# Projeto Semana 03 - Driven
## _Aplicação do layout mobile do DrivenEats e uso de Js para simular um aplicativo de comida_



O projeto consistem em aplicar o layout mobilie de um aplicativo de comida, utilizando HTML e CSS. A página deveria ficar ao máximo parecida com o layout fornecido no [figma][lfig].
Além disso, foi criado um sistema com JavaScript para fazer a lógica e ação ao clickar nos botões. Para acessar o projeto hospedado no GitHubPages, [clique aqui][ghpages].

## Objetivos

- Aplicar layout para mobile, seguindo imagens fornecida (não é necessário implementar um layout para desktop)
- O topo e o botão de fechar pedido devem ter posicionamento fixo e não rolar com a barra de rolagem
- Você pode usar imagens e textos aleatórios para ilustrar a página, porém varie o preço em cada item da mesma categoria
- As fontes utilizadas são: [Righteous](https://fonts.google.com/specimen/Righteous) (nome do restaurante e títulos das categorias) e [Roboto](https://fonts.google.com/specimen/Roboto) (demais textos)
- Para fazer as sombras presentes em alguns elementos, pesquise sobre como aplicar sombras em CSS e brinque com os valores até ficar parecido com as imagens do layout
- Para fazer os produtos rolarem horizontalmente, utilize `overflow-x: scroll`. No modo desktop um scroll é exibido, mas no modo celular não.
- Ao clicar sobre um item, o mesmo deve ser marcado como selecionado, seguindo layout da tela 3
- Ao clicar em um item, caso já exista um item selecionado na mesma categoria, este deve ser desmarcado e o novo item clicado deve ser o novo selecionado
- Ao clicar em um item já marcado, **não** é necessário desmarcá-lo
- Por padrão, o botão de finalizar pedido deve vir desabilitado. Ao clicar no botão nesse estado, nada deve acontecer.
- Quando o usuário tiver selecionado os itens das 3 categorias, o botão deve mudar para o estado de habilitado, seguindo layout da tela 5
- Ao finalizar o pedido, o usuário deverá ser encaminhado para o WhatsApp Web, em conversa com o contato do restaurante, já com uma mensagem padrão preenchida
- Ao clicar em finalizar pedido, lance dois `prompt` para o usuário solicitando seu nome e endereço. Essas informações devem então serem adicionadas na mensagem final que é enviada por WhatsApp
- Ao clicar em "Finalizar pedido", em vez de ir para o WhatsApp direto, primeiro revise a compra seguindo a tela Bônus disponível no Figma.

[ghpages]: <https://victorlimah.github.io/project3-driveneats/>
[lfig]: <https://www.figma.com/file/i8tceg0W7Z9FfANaDbR3FV/DrivenEats?node-id=0%3A1>
