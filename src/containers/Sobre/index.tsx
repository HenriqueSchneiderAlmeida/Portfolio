import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GitHubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim voluptas
      facere ab earum alias est, corrupti explicabo eos cumque voluptatum in
      totam nostrum et, pariatur libero adipisci excepturi. Quisquam.
    </Paragrafo>
    <GitHubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=henriqueschneideralmeida&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=henriqueschneideralmeida&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSecao>
  </section>
)

export default Sobre
