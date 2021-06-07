
export const data_order = {
    _id : "id don hang",
    status: 0, 
    /** 
     * 0 - Don hang dan dat
     * 1 - Da xac nhan thong tin thanh toan
     * 2 - Da giao cho dvvc
     * 3 - Don hang da nhan
     * 4 - Don hang da giao
    */

    order : [
        {
            name: 'Don hang da dat',
            date: '',
        },
        {
            name: 'Da xac nhan thong tin thanh toan',
            date: '',
        },
        {
            name: 'Da giao cho dvvc',
            date: '',
        },
        {
            name: 'Don hang da nhan',
            date: '',
        },
        {
            name: 'Don hang da giao',
            date: '',
        },
    ],
    name: "Trang Hoang Nhut",
    phone: "(+84) 905749010",
    address: "KTX B ĐHQG HCM, Phường Đông Hòa, Thị Xã Dĩ An, Bình Dương",
    items: [
        {
        _id:"60bcf3795372b82dcfa30a60",
            name:"TEST Sách Tài Chính Cá Nhân Cho Người Việt Nam - Tặng Khóa học Online ...",
            quantity:1,
            image:"http://localhost:5000/upload/images/00000_thumbnail_url.png",
            price:200000,
        },
        {
            _id:"60bcf3795372b82dcfa30a60",
            name:"TEST Sách Tài Chính Cá Nhân Cho Người Việt Nam",
            quantity:2,
            image:"http://localhost:5000/upload/images/00000_thumbnail_url.png",
            price:200000,
        },
    ],
    sum_price : 255000,
    ship_price: 39000,
    total: 294000,
}