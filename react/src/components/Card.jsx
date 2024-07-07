import React from "react"

function Card(props) {

    let timeFrame
    if (props.startDate === props.endDate) {
        timeFrame = props.startDate
    } else {
        timeFrame = `${props.startDate} - ${props.endDate}`
    }

    const percentage = `${props.rating / 5 * 100}%`
    console.log(percentage)

    return(
        <section className="card--container">
            <img
            src={props.imageUrl}
                className="card--image"
            />

            <div className="card">
                <div className="card--location--info">
                    <i className="fa-solid fa-location-dot" />

                    <h3 className="location">
                        {props.location}
                    </h3>

                    <a href={props.googleMapsUrl} className="maps-link" target="_blank">
                        View on Google Maps
                    </a>
                </div>

                <div className="card--text">
                    <h1 className="card--title">
                        {props.title}
                    </h1>
                    <p className="card--timeframe">
                        {timeFrame}
                    </p>
                    <p className="card--description">
                        {props.description}
                    </p>

                    <div className="card--rating">
                        <p>
                            <b className="salmon personal-rating">
                                Personal Rating:
                            </b> 
                        </p>  

                        <div className="back-stars">
                            <i className="fa-solid fa-star" aria-hidden="true" />
                            <i className="fa-solid fa-star" aria-hidden="true" />
                            <i className="fa-solid fa-star" aria-hidden="true" />
                            <i className="fa-solid fa-star" aria-hidden="true" />
                            <i className="fa-solid fa-star" aria-hidden="true" />

                            <div className="front-stars" style={{width: percentage}}>
                                <i className="fa-solid fa-star" aria-hidden="true" />
                                <i className="fa-solid fa-star" aria-hidden="true" />
                                <i className="fa-solid fa-star" aria-hidden="true" />
                                <i className="fa-solid fa-star" aria-hidden="true" />
                                <i className="fa-solid fa-star" aria-hidden="true" />
                            </div>
                        </div>

                    </div>

                    <div className="card--comments">
                        <p>
                            <b className="salmon">
                                Comments:
                            </b> {props.comments}
                        </p>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Card