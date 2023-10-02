import React from 'react'

import './Card.module.scss'

function Card({results}) {
    let display;

    if (results) {
        display = results.map((x) => {
            let { name, url } = x;

            return (
                <div
                key={name}
                className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                >
                    <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">
                            <a href={url}>View more</a>
                        </p>
                        </div>
                    </div>
                </div>
            );
        });
    }
    else{
        display = "No Characters Found :/";
    }

    return <>{display}</>;
}

export default Card