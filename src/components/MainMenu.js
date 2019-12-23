import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import SiteInfo from "./SiteInfo"
import styled from "styled-components"

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
  `
  
  const MainMenuInner = styled.div`
  align-items: center;
  justify-content: flex-start;
  max-width: 960px;
  margin: 0 auto;
  width:960px;
  display: flex;
`

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 16px 16px;
  text-decoration: none;
  align-self: flex-end;
`

const MainMenu = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { slug: { eq: "main-menu" } }
        ) {
          edges {
            node {
              id
              name
              slug
              items {
                order
                title
                url
                target
                classes
                object_id
                type_label
                object_slug
              }
            }
          }
        }
      }
    `}
    render={props => (
      <div>
        <MainMenuWrapper>
          <MainMenuInner>
          <SiteInfo />
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
              item => (
                <MenuItem to={item.object_slug} key={item.title}>
                  {item.title}
                </MenuItem>
              )
            )}
          </MainMenuInner>
        </MainMenuWrapper>
      </div>
    )}
  />
)

export default MainMenu
