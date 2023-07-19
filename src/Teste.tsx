import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
  // o ? faz com que propriedade naõ seja obrigatoria
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '18px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="15px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não Clicar</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
