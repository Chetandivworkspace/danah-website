import React from "react"
import {Link} from "gatsby"

import SEO from "../components/seo"
import DefaultLayout from "../layout/default";
import {Container, Button, UncontrolledTooltip, Nav, NavItem, Col, NavLink, TabContent, Row, TabPane,} from "reactstrap"
import SecondaryHeader from "../components/secondaryheader";
import NormalHeader from "../components/normalheader";
import {useStaticQuery, graphql} from "gatsby"

const Books = () => {
    const {books} = useStaticQuery(graphql`
        {
            books: allBooksJson {
                edges {
                    node {
                        info
                        name
                        author
                        slug
                        image {
                            childImageSharp {
                                fluid(base64Width: 100){
                                    base64
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return (
        <DefaultLayout>
            <SEO title="Books"/>
            {/*<NormalHeader title="Books"/>*/}
            <div className="subpage">
                <div className="section">
                    <Container>
                        <h3 className="title">Books</h3>
                        <h5 className="description text-center">
                            Danah’s best selling books have become institutions in their own right.<br/><br/>
                            <strong>“Danah Zohar successfully integrates modern physics not only with consciousness
                                but also with the individuality of the human being within the context of society and the
                                cosmos.” </strong><br/>
                            <em>Professor David Bohm, Emeritus Professor of Theoretical Physics, Birkbeck College,
                                London</em>
                        </h5>
                        <Col xs="10" className="ml-auto mr-auto">
                            {books.edges.map(({node}, idx) => (
                                <Row className="ml-auto mr-auto mb-5" key={idx}>
                                    <Col md="2">
                                        <a
                                            href=""
                                            className="book-short w-inline-block">
                                            <img
                                                src={node.image && node.image.childImageSharp.fluid.base64}
                                                alt="" className="book-small-image"/>
                                        </a>
                                    </Col>
                                    <Col md="10" className="text-left book-small-text">
                                        <div className="mt-4 text-title"><a href="">{node.name}</a>
                                        </div>
                                        <div className="mt-1 text-author">{node.author}</div>
                                        <div className="mt-2 mb-2">
                                            {node.info}
                                        </div>
                                        <a href={node.slug} className="text-link">Learn more</a>
                                    </Col>
                                </Row>
                            ))}
                        </Col>
                    </Container>
                </div>
            </div>
        </DefaultLayout>
    )
};


export default Books
