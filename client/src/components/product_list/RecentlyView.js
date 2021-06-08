import React, { useState } from 'react'
import Item from '../item/index.js'
import './RecentlyView.css'

import { Link } from 'react-router-dom'


const RecentlyView = () => {
    const [recentlyData, setRecentlyData] = useState([])
    const data = [
        {
            "_id": "60b6358d1f08e96659c40428",
            "id": 0,
            "id_category": 34,
            "sku": "",
            "name": "Sách Tài Chính Cá Nhân Cho Người Việt Nam - Tặng Khóa học Online về Tài chính",
            "url_key": "sach-tai-chinh-ca-nhan-cho-nguoi-viet-nam-tang-khoa-hoc-online-ve-tai-chinh",
            "short_description": "Cuốn sách “Tài chính cá nhân dành cho người Việt Nam” và bộ bài giảng trực tuyến tặng kèm, gồm tất cả những nội dung về tài chính cá nhân, như sau:\n\nKiếm tiền: Khi còn có thể làm việc, chúng ta cần...",
            "price": 200000,
            "discount": 0,
            "discount_rate": 0,
            "rating_average": 0,
            "review_count": 0,
            "thumbnail_url": "http://localhost:5000/upload/images/00000_thumbnail_url.png",
            "has_ebook": false,
            "inventory_status": "available",
            "publisher": "CÔNG TY CỔ PHẦN ĐÀO TẠO QUẢN TRỊ KINH DOANH BIZUNI",
            "author_name": "Lâm Minh Chánh",
            "index_name": "sach tai chinh ca nhan cho nguoi viet nam tang khoa hoc online ve tai chinh",
            "index_author_name": "lam minh chanh"
        },
        {
            "_id": "60b6358d1f08e96659c40429",
            "id": 1,
            "id_category": 35,
            "sku": "",
            "name": "Thay Đổi Cuộc Sống Với Nhân Số Học",
            "url_key": "thay-doi-cuoc-song-voi-nhan-so-hoc",
            "short_description": "Thay Đổi Cuộc Sống Với Nhân Số Học\nCuốn sách Thay đổi cuộc sống với Nhân số học là tác phẩm được chị Lê Đỗ Quỳnh Hương phát triển từ tác phẩm gốc “The Complete Book of Numerology” của tiến sỹ David A...",
            "price": 156000,
            "discount": 92000,
            "discount_rate": 37,
            "rating_average": 0,
            "review_count": 0,
            "thumbnail_url": "http://localhost:5000/upload/images/00001_thumbnail_url.png",
            "has_ebook": false,
            "inventory_status": "available",
            "publisher": "First News - Trí Việt",
            "author_name": "David A. Phillips",
            "index_name": "thay doi cuoc song voi nhan so hoc",
            "index_author_name": "david a. phillips"
        },
        {
            "_id": "60b6358d1f08e96659c4042a",
            "id": 2,
            "id_category": 30,
            "sku": "",
            "name": "Từ Điển Tiếng “Em”",
            "url_key": "tu-dien-tieng-em",
            "short_description": "TỪ ĐIỂN TIẾNG “EM” – Định nghĩa về thế giới mới!Bạn sẽ bất ngờ, khi cầm cuốn “từ điển” xinh xinh này trên tay.\nVà sẽ còn ngạc nhiên hơn nữa, khi bắt đầu đọc từng trang sách…\nDĩ nhiên là vì “Từ điển...",
            "price": 40900,
            "discount": 28100,
            "discount_rate": 41,
            "rating_average": 0,
            "review_count": 0,
            "thumbnail_url": "http://localhost:5000/upload/images/00002_thumbnail_url.png",
            "has_ebook": false,
            "inventory_status": "available",
            "publisher": "Skybooks",
            "author_name": "Khotudien",
            "index_name": "tu dien tieng em",
            "index_author_name": "khotudien"
        },
        {
            "_id": "60b6358d1f08e96659c4042b",
            "id": 3,
            "id_category": 37,
            "sku": "",
            "name": "Cây Cam Ngọt Của Tôi",
            "url_key": "cay-cam-ngot-cua-toi",
            "short_description": "“Vị chua chát của cái nghèo hòa trộn với vị ngọt ngào khi khám phá ra những điều khiến cuộc đời này đáng số một tác phẩm kinh điển của Brazil.”\n- Booklist\n“Một cách nhìn cuộc sống gần như hoàn chỉnh...",
            "price": 75900,
            "discount": 32100,
            "discount_rate": 30,
            "rating_average": 0,
            "review_count": 0,
            "thumbnail_url": "http://localhost:5000/upload/images/00003_thumbnail_url.png",
            "has_ebook": false,
            "inventory_status": "available",
            "publisher": "Nhã Nam",
            "author_name": "",
            "index_name": "cay cam ngot cua toi",
            "index_author_name": ""
        },
        {
            "_id": "60b6358d1f08e96659c4042c",
            "id": 4,
            "id_category": 40,
            "sku": "",
            "name": "Tô Bình Yên Vẽ Hạnh Phúc",
            "url_key": "to-binh-yen-ve-hanh-phuc",
            "short_description": "TÔ BÌNH YÊN VẼ HẠNH PHÚC – KULZSCSau thành công của cuốn sách đầu tay “Phải lòng với cô đơn” chàng họa sĩ nổi tiếng và tài năng Kulzsc đã trở lại với một cuốn sách vô cùng đặc biệt mang tên:\"Tô bình...",
            "price": 55900,
            "discount": 22100,
            "discount_rate": 28,
            "rating_average": 0,
            "review_count": 0,
            "thumbnail_url": "http://localhost:5000/upload/images/00004_thumbnail_url.png",
            "has_ebook": false,
            "inventory_status": "available",
            "publisher": "Skybooks",
            "author_name": "Kulzsc",
            "index_name": "to binh yen ve hanh phuc",
            "index_author_name": "kulzsc"
        }]
    return (
        <div className = 'container-recently-view'>
        <Link to={`/product-details/${data._id}`}>
            <div className=''>
                <div className='title-recently-view'>DANH SÁCH XEM GẦN ĐÂY</div>
                <div className='container-product-recently-view'>
                    <div className='row-recently-view'>
                        <div className='click-list-recently-view'>
                            <div className = 'click-strac-recently-view'>

                            {data.map(item => {
                                return <Item data={item}></Item>
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </div>
    )


}
export default RecentlyView;
