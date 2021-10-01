import React from 'react'
import { useCTAareaQuery } from "../../hooks/useCTAareaQuery";
import Image from "gatsby-image"

const ThreeSection = () => {
    const { cta } = useCTAareaQuery();

    return (
        <div className="threeSectionOutr">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 mb-5 mb-md-0">
                        <article>
                            <figure style={{ width: "100px" }}>
                                <Image src={cta.bannerVideo.foundersimage.localFile.childImageSharp.fluid.src} fluid={cta.bannerVideo.foundersimage.localFile.childImageSharp.fluid} />
                            </figure>
                            <h2>{cta.bannerVideo.founders}</h2>
                            <p>{cta.bannerVideo.foundersdescription}</p>
                        </article>
                    </div>
                    <div className="col-md-4 mb-5 mb-md-0">
                        <article>
                            <figure style={{ width: "100px" }}>
                                <Image src={cta.bannerVideo.lawyersimage.localFile.childImageSharp.fluid.src} fluid={cta.bannerVideo.lawyersimage.localFile.childImageSharp.fluid} />
                            </figure>
                            <h2>{cta.bannerVideo.lawyers}</h2>
                            <p> {cta.bannerVideo.lawyersdescription}</p>
                        </article>
                    </div>
                    <div className="col-md-4 mb-5 mb-md-0">
                        <article>
                            <figure style={{ width: "100px" }}>
                                <Image src={cta.bannerVideo.companiesimage.localFile.childImageSharp.fluid.src} fluid={cta.bannerVideo.companiesimage.localFile.childImageSharp.fluid} />
                            </figure>
                            <h2>{cta.bannerVideo.companies}</h2>
                            <p>{cta.bannerVideo.companiesdescription}</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeSection
