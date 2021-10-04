import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
            }
          }
        }
    }
  `

const Banner = () => {
  const data = useStaticQuery(getdata);
  const common = data.wpgraphql.page.homeFields;
  const imageData = common.trustedimages;

  console.log(data)
  return (

    <>
      <section className="mainSpacing">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <article>
                <h1>{common.text1}</h1>
                <p>{common.para1}</p>
              </article>
            </div>
            <div className="col-md-6">
              <div className="ratio ratio-16x9">
                <video src={common.video} controls allowfullscreen webkitallowfullscreen="true" className="embed-responsive-item"
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
                {imageData.map(image => {
                  return (<figure className="px-3 col-md-2 text-center align-self-center" key={image.title}> <img src={image.link} alt="client" /> </figure>)
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mainSpacing">
        <div className="container">
          <div className="row threesection">
            <div className="col-md-4 text-center mb-md-0 mb-4">
              <article>
                <figure>
                  <img src={common.foundersimage.link} />
                </figure>
                <h3>{common.founderstext}</h3>
                <p>{common.founderspara}</p>
              </article>
            </div>
            <div className="col-md-4 text-center mb-md-0 mb-4">
              <article>
                <figure>
                  <img src={common.lawyersimage.link} />
                </figure>
                <h3>{common.lawyerstext}</h3>
                <p>{common.lawyerspara}</p>
              </article>
            </div>

            <div className="col-md-4 text-center mb-md-0 mb-4">
              <article>
                <figure>
                  <img src={common.companyimage.link} />
                </figure>
                <h3>{common.companytext}</h3>
                <p>{common.companypara}</p>
              </article>
            </div>
          </div>
        </div>
      </section>



    </>

  )
}

export default Banner