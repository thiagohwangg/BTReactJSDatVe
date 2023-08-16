import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieBookingActions } from "../Store/MovieBooking/slice";
import "./style.scss"
const Result = () => {
    let soGhe = ""
    const dispatch = useDispatch();
    const { booking } = useSelector((state) => state.movieBooking);
    return (
        <div className="container">
            <div className="Result">
            <h3 style={{marginTop:30,color:"#d6090e"}}>DANH SÁCH GHẾ ĐÃ CHỌN</h3>
            <div className="d-flex gap-3 mt-4">
                <div
                    className="Chair"
                    style={{ backgroundColor: "#96c93d" }}
                ></div>
                <p className="p">Ghế đã đặt</p>
            </div>
            <div className="d-flex gap-3 mt-4">
                <div className="Chair" style={{ backgroundColor: "#c43dc9" }}></div>
                <p className="p">Ghế đang chọn</p>
            </div>
            <div className="d-flex gap-3 mt-4">
                <div className="Chair"></div>
                <p className="p">Ghế chưa đặt</p>
            </div>
            <div className="bang">
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.map((chair) => (
                <tr key={chair.soGhe}>
                    <td>{chair.soGhe}</td>
                    <td>{chair.gia}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={()=>{
                                dispatch(MovieBookingActions.setBooking(chair))
                            }}
                        >
                            X
                        </button>
                    </td>
                </tr>
            ))}
            
                    <tr>
                        <td>Tổng tiền cần thanh toán:</td>
                        <td>
                            {booking.reduce((total, chair) => {
                                return (total += chair.gia);
                            }, 0)}
                        </td>
                        <td>
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    dispatch(MovieBookingActions.setDelete());
                                }}
                            >
                                Huỷ tất cả
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>      
            </div>
            <button
                className="btnPay mt-3"
                onClick={() => {
                    dispatch(MovieBookingActions.setBooked());
                }}
            >
                Thanh toán
            </button>
        </div>
        </div>
    );
};

export default Result;
