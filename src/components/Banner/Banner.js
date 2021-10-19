import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from 'react-bootstrap/Button'

const getdata = graphql`
    {
      wpgraphql {
        page(id: "cG9zdDo2OTQy") {
          uri
          title
          slug
          homeFields {
            text1
            video
            para1
            trustedtext
            trustedimages {
              altText
              link
              uri
              title
              databaseId
            }
            lawyerstext
            lawyerspara
            founderstext
            founderspara
            companytext
            companypara
            lawyersimage {
              uri
              title
              altText
              link
            }
            foundersimage {
              altText
              uri
              title
              link
            }
            companyimage {
              altText
              uri
              title
              link
            }
            f6para
            f6text
            f1para
            f1text
            f2para
            f2text
            f3para
            f3text
            f4para
            f4text
            f5para
            f5text
            featurespara
            featurestext
            f6image {
              altText
              uri
              title
              sizes
              slug
              link
            }
            f5image {
              altText
              uri
              title
              sizes
              slug
              link
            }
            f4image {
              altText
              uri
              title
              sizes
              slug
              link
            }
            f3image {
              altText
              uri
              title
              sizes
              slug
              link
            }
            f2image {
              altText
              uri
              title
              sizes
              slug
              link
            }
            f1image {
              altText
              uri
              title
              sizes
              slug
              link
            }
            
          }
        }
      }
    }
  `

const Banner = () => {
  const data = useStaticQuery(getdata);
  const common = data.wpgraphql.page.homeFields;
  const imageData = common.trustedimages;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  //console.log(data)
  return (

    <>
      <section className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <article>
                <h1>{common.text1}</h1>
                <h2>IP. Simplified.</h2>
                <p>{common.para1}</p>
              </article>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <video src={common.video} controls allowFullScreen webkitallowfullscreen="true" className="embed-responsive-item"
                  mozallowfullscreen="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mb-md-5 mb-4">
              <article>
                <h2>{common.trustedtext}</h2>
              </article>
            </div>

            <div className="logoArea">
              <div className="justify-content-center align-items-center row">
                <div className="row">
                  <Carousel responsive={responsive}>
                    {imageData.map(image => {
                      return (
                        <figure className="px-3 text-center align-self-center" key={image.title}>
                          <img src={image.uri} alt="client" />
                        </figure>
                      )
                    })}
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mainSpacing">
        <div className="container">
          <div className="row threesection">
            <div className="col-md-4 text-center mb-md-0 mb-4">
              <article className="border p-3 h-100">
                <figure>
                  <img src={common.foundersimage.link} alt="founder" />
                </figure>
                <h3>{common.founderstext}</h3>
                <p>{common.founderspara}</p>
              </article>
            </div>
            <div className="col-md-4 text-center mb-md-0 mb-4">
              <article className="border p-3 h-100">
                <figure>
                  <img src={common.lawyersimage.link} alt="lawyers" />
                </figure>
                <h3>{common.lawyerstext}</h3>
                <p>{common.lawyerspara}</p>
              </article>
            </div>

            <div className="col-md-4 text-center mb-md-0 mb-4 ">
              <article className="border p-3 h-100">
                <figure>
                  <img src={common.companyimage.link} alt="company" />
                </figure>
                <h3>{common.companytext}</h3>
                <p>{common.companypara}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="mainSpacing features-outr">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12 text-center">
              <h2>{common.featurestext}</h2>
              <h3>{common.featurespara}</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center mb-4">
              <figure><img src={common.f1image.uri} alt={common.f1image.altText} /></figure>
              <h4>{common.f1text}</h4>
              <p>{common.f1para}</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <figure><img src={common.f2image.uri} alt={common.f1image.altText} /></figure>
              <h4>{common.f2text}</h4>
              <p>{common.f2para}</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <figure><img src={common.f3image.uri} alt={common.f1image.altText} /></figure>
              <h4>{common.f3text}</h4>
              <p>{common.f3para}</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <figure><img src={common.f4image.uri} alt={common.f1image.altText} /></figure>
              <h4>{common.f4text}</h4>
              <p>{common.f4para}</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <figure><img src={common.f5image.uri} alt={common.f1image.altText} /></figure>
              <h4>{common.f5text}</h4>
              <p>{common.f5para}</p>
            </div>
            <div className="col-md-4 text-center mb-4">
              <figure><img src={common.f6image.uri} alt={common.f1image.altText} /></figure>
              <h4>{common.f6text}</h4>
              <p>{common.f6para}</p>
            </div>
          </div>
        </div>
      </section>



      {/* <section className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h2>{common.forcompaniestext}</h2>
              <h3>{common.forcompaniessubheading}</h3>
            </div>
            <div className="row">
              <div className="col-md-6 align-self-center mb-4">
                <div className="ratio ratio-16x9">
                  <video src={common.forcompaniesvideo} controls allowFullScreen webkitallowfullscreen="true" className="embed-responsive-item"
                    mozallowfullscreen="true" />
                </div>
              </div>
              <div className="col-md-6 align-self-center mb-4">
                <p>{common.forcompaniesparagraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-md-12 text-center">
                <article>
                  <h3>JOIN POWERPATENT</h3>
                  <p>Get in touch to discuss plans and pricing</p>
                </article>
                <div className="d-flex flex-wrap justify-content-center">
                  <Button variant="primary" className="m-2">Request a Demo</Button>
                  <Button variant="primary" className="m-2">Take a video tour</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner