import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0 auto;
  padding:0;
  font-family: 'Inter', sans-serif;
  list-style: none;
}

body {
  padding-top:80px;
  padding-bottom: 80px;

  @media (max-width:768px) {
    padding-top: 16px;
  }
}
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  background-color: #f1faee;
  display: grid;
  grid-template-columns: 165px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
