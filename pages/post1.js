import Head from 'next/head';

import { Frame, Justify } from '../components/posts-components';
import { Typography, Divider } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const { Title, Paragraph, Text } = Typography;

const codeString1 = `console.log(1, 2, 3)`;

const codeString2 = `function show(...params) {
    return params.join(' ');
}
show(0, 1, 2);
//retornará 0 1 2`;

const codeString3 = `class Classe {
    #atributo;
    contructor(valor) {
        this.#atributo = valor;
    }
    #metodo(valor) {
        return (this.#atributo == valor);
    }
}`;

function Post1() {
    return (
        <Frame>
            <Head>
                <title>2 Coisas do JavaScript que você provavelmente não sabe</title>
            </Head>
            <Justify>
                <Title level={3}>2 Coisas do JavaScript que você provavelmente não sabe</Title>
            </Justify>
            <Divider />
            <Justify>
                <Paragraph style={{ lineHeight: '2.0em' }}>
                    Hoje em dia JavaScript é uma das linguagens mais usadas, no desenvolvimento web e até em aplicações nativas.
                    É uma linguagem odiada por alguns, mas amada por muitos... se você está lendo isso provavelmente você se encaixa no segundo grupo.
                </Paragraph>
                <Paragraph style={{ lineHeight: '2.0em' }}>
                    Hoje eu separai 2 coisas que você <del>(provavelmente)</del> não sabe sobre JavaScript.
                </Paragraph>
            </Justify>

            <Divider />

            <Title level={4}>1. Rest params</Title>

            <SyntaxHighlighter language='javascript' style={a11yDark}>
                {codeString1}
            </SyntaxHighlighter>

            <Justify>
                <Paragraph style={{ lineHeight: '2.0em' }}>
                    Com certeza você já sabe que se você executar esse código vai aparecer <Text code style={{ whiteSpace: 'nowrap' }}>1, 2, 3</Text> no seu console.
                    O <i>console.log</i> basicamente recebeu 3 parâmetros e imprimiu-os separados por espaços.
                </Paragraph>
                <Paragraph style={{ lineHeight: '2.0em' }}>
                    Mas como isso é feito? Como o <i>console.log</i> sabe que eu passei 3 parâmetros?
                    Se eu passar 50 parâmetros ao invés de 3 isso também vai funcionar? A respota é sim, e isso é feito utilizando <i>rest params</i>.
                </Paragraph>
            </Justify>

            <SyntaxHighlighter language='javascript' style={a11yDark}>
                {codeString2}
            </SyntaxHighlighter>

            <Justify>
                <Paragraph style={{ lineHeight: '2.0em' }}>
                    Como você pode ver é muito fácil utilizá-lo, basta adicionar <Text code>...</Text> antes do nome do parâmetro, com isso a função passa a aceitar
                    uma lista de parâmetros de tamanho indefinido, que dentro da função será usado como um array.
                </Paragraph>
                <Paragraph style={{ lineHeight: '2.0em' }}>
                    Vale ressaltar que esse parâmetro sempre deve ser o último a ser declarado já que ele tem um tamanho indefinido.
                </Paragraph>
            </Justify>

            <Divider />

            <Justify>
                <Title level={4}>2. Métodos e Atributos Privados</Title>

                <Paragraph style={{ lineHeight: '2.0em' }}>
                    Não é novidade que o javascript nos permite criar <b>classes</b>, mas você sabia que é possível criar métodos e atributos de forma privada?
                    Em linguagens como Java ou C#, um atributo privado é aquele que tem a palavra <b>private</b> antes dele, porém no JavaScript não temos esse modificador,
                    ao invés disso usamos o <b>#</b> (hash) antes do nome do atributo/método para torná-lo privado. Veja um exemplo:
                </Paragraph>
            </Justify>

            <SyntaxHighlighter language='javascript' style={a11yDark}>
                {codeString3}
            </SyntaxHighlighter>
        </Frame>
    )
}

export default Post1;