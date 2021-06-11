import React from 'react'
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import './Dashboad.css'
function Dashboad() {
    let { path } = useRouteMatch();
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="Dashboard-01">
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-midnight-bloom">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Tổng Sản Phẩm</div>
                                <div className="widget-numbers text-white"><span>186</span></div>

                            </div>
                            <div className="widget-content-right">
                                <div><i className="fa fa-shopping-basket fa-3x das-icon" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-arielle-smile">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Người Đăng Ký</div>
                                <div className="widget-numbers text-white"><span>300</span></div>
                            </div>
                            <div className="widget-content-right">

                                <div><i className="fa fa-user-circle fa-3x das-icon" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="card mb-3 widget-content bg-grow-early">
                        <div className="widget-content-wrapper text-white">
                            <div className="widget-content-left">
                                <div className="widget-heading">Tổng Đơn Hàng </div>
                                <div className="widget-numbers text-white"><span>10.000</span></div>
                            </div>
                            <div className="widget-content-right">

                                <div><i className="fa fa-gift fa-3x das-icon" aria-hidden="true"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Dashboard-02">
                <div className="Das-Header bg-midnight-bloom">
                    Sản Phẩm
                </div>
                <div className="Das-Body-1">
                    <div className="Das-Body-1-Part01">
                        <div className="col-md-6 col-xl-4">
                            <div className="card mb-3 widget-content Product-Border">
                                <div className="widget-content-wrapper text-white">
                                    <div className="widget-heading-black-1">English Books</div>
                                    <div className="widget-content-left-1">
                                        <div className="widget-heading-2">Thể loại</div>
                                        <div className="widget-numbers-2 text-black"><span>15</span></div>
                                    </div>
                                    <div className="widget-content-right-1">
                                        <div className="widget-heading-2">Số Lượng</div>
                                        <div className="widget-numbers-2 text-black"><span>18.600</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Das-Body-1-Part01">
                            <div className="col-md-6 col-xl-4">
                                <div className="card mb-3 widget-content Product-Border">
                                    <div className="widget-content-wrapper text-white">
                                        <div className="widget-heading-black-1">Sách Tiếng Việt</div>
                                        <div className="widget-content-left-1">
                                            <div className="widget-heading-2">Thể loại</div>
                                            <div className="widget-numbers-2 text-black"><span>22</span></div>
                                        </div>
                                        <div className="widget-content-right-1">
                                            <div className="widget-heading-2">Số Lượng</div>
                                            <div className="widget-numbers-2 text-black"><span>19.000</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Das-Body-1-Part02">
                        <div className="col-md-6 col-xl-4">
                            <div className="card mb-3 widget-content bg-grow-anna">
                                <div className="widget-content-wrapper text-white">
                                    <div className="widget-content-left">
                                        <div className="widget-heading">Trong Kho</div>
                                        <div className="widget-numbers text-white"><span>100.000</span></div>
                                    </div>
                                    <div className="widget-content-right">

                                        <div><i className="fa fa-database fa-3x das-icon" aria-hidden="true"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Dashboard-04">
                <div className="Das-Header bg-grow-early">
                    Hóa Đơn
                </div>
                <div className="Das-Body-3">
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content invoice-border">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading-black">Chờ xác nhận</div>
                                    <div className="widget-numbers text-black"><span>18</span></div>

                                </div>
                                <div className="widget-content-right">
                                    <div><i className="fa fa-pencil-square-o fa-3x das-icon-black" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content invoice-border">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading-black">Đang giao</div>
                                    <div className="widget-numbers text-black"><span>67</span></div>
                                </div>
                                <div className="widget-content-right">

                                    <div><i className="fa fa-truck fa-3x das-icon-black" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content invoice-border">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-heading-black">Hoàn Thành</div>
                                    <div className="widget-numbers text-black"><span>1000</span></div>
                                </div>
                                <div className="widget-content-right">
                                    <div><i className="fa fa-thumbs-up fa-3x das-icon-black" aria-hidden="true"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboad
