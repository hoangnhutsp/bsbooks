import axios from 'axios';

const localhost = 'http://localhost:5000/';

export const getProductDetails = (id) => {
    const URL = localhost + '/product' + id
    return {
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
        "description": "<p><strong>Thay Đổi Cuộc Sống Với Nhân Số Học</strong></p>\n<p>Cuốn sách Thay đổi cuộc sống với Nhân số học là tác phẩm được chị Lê Đỗ Quỳnh Hương phát triển từ tác phẩm gốc “The Complete Book of Numerology” của tiến sỹ David A. Phillips, khiến bộ môn Nhân số học khởi nguồn từ nhà toán học Pythagoras trở nên gần gũi, dễ hiểu hơn với độc giả Việt Nam.</p>\n<p>Đầu năm 2020, chuỗi chương trình “Thay đổi cuộc sống với Nhân số học” của biên tập viên, người dẫn chương trình quen thuộc tại Việt Nam Lê Đỗ Quỳnh Hương ra đời trên Youtube, với mục đích chia sẻ kiến thức, giúp mọi người tìm hiểu và phát triển, hoàn thiện bản thân, các mối quan hệ xã hội thông qua bộ môn Nhân số học. Chương trình đã nhận được sự yêu mến và phản hồi tích cực của rất nhiều khán giả và độc giả sau mỗi tập phát sóng.</p>\n<p>Nhân số học là một môn nghiên cứu sự tương quan giữa những con số trong ngày sinh, cái tên với cuộc sống, vận mệnh, đường đời và tính cách của mỗi người. Bộ môn này đã được nhà toán học Pythagoras khởi xướng cách đây 2.600 năm và sau này được nhiều thế hệ học trò liên tục kế thừa, phát triển.</p>\n<p>Có thể xem, Nhân số học là một bộ môn Khám phá Bản thân (Self-Discovery), đọc vị về số. Bộ môn này giúp giải mã những tín hiệu mà cuộc sống đã gửi đến từng cá thể con người trong đời sống, tương tự như Nhân tướng học hay Nhân trắc học… Khi nghiêm túc nghiên cứu sự tồn tại và mối tương quan giữa các con số xuất hiện trong ngày, tháng, năm sinh của mỗi người qua Nhân số học, ta có thể hiểu được khá nhiều về bản thân mình, cũng như mối quan hệ của mình với người khác. Nếu hiểu những \"mật mã\" nằm ẩn dưới những con số, chúng ta có thể kiểm soát cuộc sống của mình, điều chỉnh chúng theo hướng ngày càng tốt đẹp hơn, phù hợp với năng lực, tính cách của mình hơn.</p>\n<p>Trong quyển sách “Thay đổi cuộc sống với Nhân số học”, Lê Đỗ Quỳnh Hương đã sử dụng khoảng 60% nền tảng tri thức từ quyển sách “The Complete Book of Numerology” (tạm dịch: Một quyển sách toàn diện về Nhân số học) của Tiến sĩ David A. Phillips (1934 – 1993) và 40% kết quả nghiên cứu của chị sau khi phân tích hơn 500 trường hợp cụ thể của những người Việt Nam sinh ra trong thế kỷ 21.</p>\n<p>Cuốn sách “Thay đổi cuộc sống với Nhân số học”mang lại đầy đủ những kiến thức quan trọng nhất mà người hứng thú với Nhân số học cần tìm hiểu. Sách bao gồm các kiến thức về ba thể trong một con người, con số chủ đạo, biểu đồ ngày sinh, các mũi tên chỉ đặc điểm, con số ngày sinh, chu kỳ 9 năm, ba giai đoạn và bốn đỉnh cao của đời người cùng ý nghĩa, sức mạnh của cái tên của mỗi người. Các kiến thức này được diễn giải, phân tích và đi kèm các ví dụ cụ thể.</p>\n<p>Với mục đích đem Nhân số học trở nên gần gũi, dễ ứng dụng và mang lại những giá trị tích cực cho mỗi người trong đời sống, chị Lê Đỗ Quỳnh Hương mong rằng trong hành trình khám phá bản thân qua những con số, người đọc có thể hiểu về mình - hiểu được những thuận lợi và bất lợi mà mình gặp phải, từ đó tìm được động lực lớn để thay đổi cuộc sống. Giá trị của cuốn sách “Thay đổi cuộc sống với Nhân số học” nằm ở kiến thức tổng quan về Nhân số học và những lời khuyên sâu sắc để mỗi người có thể chuyển mình theo những hướng tích cực hơn như sống có lý tưởng, mở lòng, chăm chỉ, biết lắng nghe người khác, luyện tập thiền định, tập trung, sống có trách nhiệm, biết ơn và yêu thương…</p>\n<p>Trong cuộc đời của mỗi con người, chúng ta thường phải mày mò, tìm kiếm con đường riêng cho mình mà không biết chắc con đường đó có phù hợp với mình hay không. Đôi lúc, chúng ta phải phải trầy trật, vấp ngã thậm chí lạc lối mới rút ra được kinh nghiệm, bài học. Nếu hiểu về Nhân số học, và thông qua những kiến thức nhất định về ý nghĩa và sự kết hợp của các con số, chúng ta có thể tự vạch ra cho mình một hướng đi tương đối cụ thể, giảm thiểu được các lần “thử và sai”, từ đó tìm được nhiều niềm vui, hạnh phúc, ý nghĩa trong cuộc sống. <br />Đó chính là thông điệp và mục đích lớn nhất mà tiến sỹ David A. Phillips và tác giả Lê Đỗ Quỳnh Hương mong muốn gửi gắm cho đông đảo bạn đọc.</p>\n<p><strong>VỀ TÁC GIẢ </strong></p>\n<p>DAVID A. PHILLIPS, tiến sĩ triết học tại Đại học London năm 1971, nhưng sau đó lại được biết đến như một chuyên gia trong lĩnh vực sức khỏe và dinh dưỡng. Lúc sinh thời, ông cũng thường đến các nước nói tiếng Anh trên thế giới để giảng dạy và diễn thuyết, tư vấn về Nhân số học, cống hiến sự nghiên cứu cả đời mình về lĩnh vực sức khỏe và phát triển cá nhân cho việc giảng dạy.Tiến sĩ A.Phillips viết tổng cộng 12 quyển sách, trong đó, nổi tiếng và được yêu thích rộng rãi nhất là cuốn The Complete Book of Numerology (Một quyển sách toàn diện về Nhân Số Học).</p>\n<p>Lê Đỗ Quỳnh Hương, thạc sĩ Âm nhạc học tại Nhạc viện TP. HCM, là một biên tập viên, người dẫn chương trình quen thuộc tại Việt Nam, cũng là một cây bút với nhiều quyển sách về chủ đề sống tích cực được nhiều người yêu thích. Lần đầu tiên bén duyên với lĩnh vực Nhân số học, chị cùng các đồng sự đã tìm hiểu, nghiên cứu dựa trên nền tảng cuốn “The Complete Book of Numerology” để cho ra đời tác phẩm “Thay đổi cuộc sống với Nhân số học”, một quyển sách giúp bản thân mỗi người hiểu rõ mình hơn và qua đó, có những thay đổi trong cách sống, cách suy nghĩ, hành độ hướng tới cuộc sống vui vẻ, hạnh phúc, an lạc hơn.</p>\n<p><strong>NGƯỜI NỔI TIẾNG NÓI GÌ VỀ CUỐN SÁCH</strong></p>\n<p>“Từ khi tìm hiểu Nhân số học và biết được con số chủ đạo của mình là số 3, tôi thấy vừa bất ngờ vừa thú vị. Phần nói về tính cách của người có con số chủ đạo 3 quá chính xác, gần như hoàn toàn đúng đối với tôi.”- Ca sĩ Đàm Vĩnh Hưng.</p>\n<p>Trước đây, tôi thường oán giận tại sao mình cũng có năng lực nhưng lại không chạm đến được những điều mình mong muốn. Rồi tôi nhận ra do trước đây tôi đã đặt cái tôi của mình quá cao trong mọi chuyện, trải qua nhiều biến cố nhưng vẫn không rút ra được bài học gì cho bản thân. Mãi đến khi biết đến Nhân số học, tôi có cơ hội dám nhìn lại toàn diện bức tranh cuộc đời mình. Khi ý thức được mình là người có nhiều số 1 và số 7 trong Biểu đồ ngày sinh, tôi bắt đầu nhìn nhận sự việc khác đi, nghiệm lại và dần dần tự điều chỉnh bản thân. Và tới bây giờ, tôi đang có một cuộc sống với năng lượng rất tích cực.”- Nhạc sĩ Phương Uyên.</p>\n<p>“Trước đây, tôi từng rất dễ bị ảnh hưởng bởi cảm xúc của mọi người xung quanh. Nhưng tôi của bây giờ đã khác. Nhân số học như một công cụ giúp tôi quán chiếu lại cuộc sống của mình, giúp tôi mỗi ngày luôn hướng về những điều tích cực. Cảm ơn chị Quỳnh Hương đã cất công tìm hiểu, cấu trúc lại Nhân số học và lan tỏa giá trị đến mọi người.”- Nhà nhiếp ảnh Tâm Bùi</p>\n<p>“Tôi là con trai một, được ba mẹ cưng chiều nên rất ham chơi. Tôi sa vào những cuộc nhậu nhẹt, đàn đúm, cá độ, đánh nhau. Cuộc sống bết bát của tôi đã khiến ba tôi ngày càng phiền muộn, ngay cả vào những ngày cuối đời của ông trên giường bệnh. Nhờ mẹ, tôi biết đến cô Quỳnh Hương và Nhân số học, và nhờ Nhân số học, cuộc sống của tôi bắt đầu thay đổi. Tôi hiểu về ‘mảnh đất’ mà Vũ trụ giao cho tôi, và tôi chọn sống khác đi. Tôi thực hiện thiền biết ơn mỗi ngày, gửi yêu thương đến mọi thứ xung quanh, bắt đầu một công việc mới, theo đúng sứ mệnh của một người có con số chủ đạo 6 và có đỉnh cao số 9. Cảm ơn Nhân số học, cô Quỳnh Hương và mẹ đã gieo duyên cho con. Biết ơn về tất cả!”- Lâm Quang Thịnh - Người được thay đổi nhờ Nhân số học</p><p>Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Tuy nhiên tuỳ vào từng loại sản phẩm hoặc phương thức, địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, ...</p>",
        "specifications": [
          {
            "name": "Thông tin chung",
            "attributes": [
              {
                "name": "Công ty phát hành",
                "value": "First News - Trí Việt"
              },
              {
                "name": "Ngày xuất bản",
                "value": "10-2020"
              },
              {
                "name": "Kích thước",
                "value": "16 x 24 cm"
              },
              {
                "name": "Dịch Giả",
                "value": "Lê Đỗ Quỳnh Hương"
              },
              {
                "name": "Loại bìa",
                "value": "Bìa gập"
              },
              {
                "name": "Số trang",
                "value": "342"
              },
              {
                "name": "SKU",
                "value": "4227584840532"
              },
              {
                "name": "Nhà xuất bản",
                "value": "Nhà Xuất Bản Tổng hợp TP.HCM"
              }
            ]
          }
        ],
        "id_author": 4213807,
        "images": [
          {
            "base_url": "http://localhost:5000/upload/images/00001_base_url.png",
            "thumbnail_url": "http://localhost:5000/upload/images/00001_thumbnail_url.png",
            "small_url": "http://localhost:5000/upload/images/00001_small_url.png",
            "medium_url": "http://localhost:5000/upload/images/00001_medium_url.png",
            "large_url": "http://localhost:5000/upload/images/00001_large_url.png"
          },
          {
            "base_url": "http://localhost:5000/upload/images/00002_base_url.png",
            "thumbnail_url": "http://localhost:5000/upload/images/00001_thumbnail_url.png",
            "small_url": "http://localhost:5000/upload/images/00001_small_url.png",
            "medium_url": "http://localhost:5000/upload/images/00001_medium_url.png",
            "large_url": "http://localhost:5000/upload/images/00001_large_url.png"
          },
          {
            "base_url": "http://localhost:5000/upload/images/00003_base_url.png",
            "thumbnail_url": "http://localhost:5000/upload/images/00001_thumbnail_url.png",
            "small_url": "http://localhost:5000/upload/images/00001_small_url.png",
            "medium_url": "http://localhost:5000/upload/images/00001_medium_url.png",
            "large_url": "http://localhost:5000/upload/images/00001_large_url.png"
          }
        ]
      }
    // return axios.get(URL);
}

