import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const PortfolioItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const PortfolioPiece = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  margin: 16px;
  padding: 20px;
`
const PortfolioImage = styled.img`
  max-width: 100%;
`

const PortfolioItems = () => {
  return (
    <StaticQuery
      query={graphql`
        query WpPortfolio {
          allWordpressWpPortfolio {
            edges {
              node {
                id
                slug
                title
                excerpt
                path
                featured_media {
                  id
                  slug
                  source_url
                }
              }
            }
          }
        }
      `}
      render={props => (
        <PortfolioItemsWrapper>
          {props.allWordpressWpPortfolio.edges.map(PortfolioItem => (
            <PortfolioPiece key={PortfolioItem.node.id}>
              <h2>{PortfolioItem.node.title}</h2>
              <PortfolioImage
                src={PortfolioItem.node.featured_media.source_url}
                alt="Thumbnail"
              />
              <p dangerouslySetInnerHTML={{ __html: PortfolioItem.node.excerpt }} />
              <Link to={`/portfolio/${PortfolioItem.node.slug}`}>
                Read more
              </Link>
            </PortfolioPiece>
          ))}
        </PortfolioItemsWrapper>
      )}
    />
  )
}

export default PortfolioItems
