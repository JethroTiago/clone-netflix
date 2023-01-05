import React from 'react';
import './FeaturedMovie.css';

export default ({item}) => {
    console.log(item);
    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">Nota {item.vote_average}</div>
                        <div className="featured--year">2023</div>
                    </div>
                </div>
            </div>
        </section>
    );
}