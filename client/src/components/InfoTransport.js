import React from 'react'
import './InfoTransport.css'

export default function InfoTransport() {
    return (
        <div className='InfoTransportContainer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="Infocontainer">
                    <div className="Info-col">
                        <ul>
                            <p>
                            <i className="fa fa-truck fa-2x "></i>
                            </p>
                            <li><p className="InfoBold">MIỄN PHÍ VẬN CHUYỂN</p></li>
                            <li><p>Đơn hàng từ 500.00VNĐ</p></li>
                        </ul>
                    </div>
                    <div className="Info-col">

                        <ul>
                            <p><i className="fa fa-thumbs-up fa-2x "></i></p>
                            <li><p className="InfoBold">DỄ DÀNG, TIỆN LỢI</p></li>
                            <li><p>Đặt sách theo yêu cầu</p></li>

                        </ul>
                    </div>
                    <div className="Info-col">

                        <ul>
                            <p><i className="fa fa-gift fa-2x "></i></p>
                            <li><p className="InfoBold">TÍCH ĐIỂM ĐỔI QUÀ</p></li>
                            <li><p>Nhận nhiều ưu đãi</p></li>

                        </ul>
                    </div>
                    <div className="Info-col">

                        <ul>
                            <p><i className="fa fa-star fa-2x "></i></p>
                            <li><p className="InfoBold">DỊCH VỤ 5 SAO</p></li>
                            <li><p>150+ ratings từ Facbook</p></li>

                        </ul>
                    </div>
            </div>
        </div>
    );
}