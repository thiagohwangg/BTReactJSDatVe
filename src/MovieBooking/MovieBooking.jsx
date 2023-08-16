import React from "react";
import dsGhe from "./data.json";
import Result from "./Result";
import ChairList from "./ChairList";

const MovieBooking = () => {
    return (
        <div className="container">
            <div className="row MovieBooking">
                <div className="col-8">
                    <h1 className="title text-center pe-5 mb-3">ĐẶT VÉ XEM PHIM</h1>
                    <div className="manHinh"></div>
                    <p className="text-center fw-bold"> Màn hình</p>
                    <ChairList dsGhe={dsGhe} />
                </div>
                <div className="col-4">
                    <Result />
                </div>
            </div>
        </div>
    );
};

export default MovieBooking;
