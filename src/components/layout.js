import React from "react"
import MainMenu from "./MainMenu"
import "./normalize.css"
import styled, { createGlobalStyle } from "styled-components"
import PortfolioItems from './PortfolioItems';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
body {
  font-family: 'Lato', sans-serif;
  margin:0;
  padding:0;
}
`
const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>
      {children}
      <PortfolioItems></PortfolioItems>
    </LayoutWrapper>
  </div>
)

export default Layout
