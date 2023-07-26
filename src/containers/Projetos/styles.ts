import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
export const LiProj = styled.li`
  width: 100%;
`
