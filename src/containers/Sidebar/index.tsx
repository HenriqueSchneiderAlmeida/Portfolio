import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}> Henrique Schneider</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        HenriqueSchneiderAlmeida
      </Paragrafo>
      <Descricao fontSize={12}>Desenvolvedor de Software</Descricao>
      <BotaoTema>Trocar Tema </BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
