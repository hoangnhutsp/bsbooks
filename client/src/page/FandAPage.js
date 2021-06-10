import React, { forwardRef } from 'react';
import './FandAPage.css';

function FandAPage() {
  return (
    <div className='FandAPageContainer'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      <div className="FandA-Page-Container">
          <div className="FandA-Page-Container-title">
              <h2>
                  CÁC CÂU HỎI 
              </h2>
          </div>
          <div className="FandA-Page-Container-content">
            <div className="FandA-Page-Container-content-page">
              <ol className="FandA-Page-Container-content-ol">
                  <li>Làm thế nào để tôi tìm thấy một cuốn sách?</li>

                  <p>Bạn sẽ dễ dàng tìm thấy kết quả bằng cách nhập tên sách, tác giả, ISBN, từ khóa hoặc thẻ có liên quan đến những gì bạn đang tìm kiếm (ví dụ: Du lịch, Văn học Nhật Bản, LGBT ....) vào thanh tìm kiếm tại đầu trang của chúng tôi. Bạn cũng có thể duyệt qua các danh mục được xác định theo Thể loại và Tiểu thể loại hoặc thu hẹp kết quả bằng cách sử dụng các bộ lọc (Phạm vi giá, Định dạng ...).</p>
                  <p>Vui vẻ duyệt web!</p>
                  
                  <li>Làm thế nào tôi có thể đặt hàng những cuốn sách không có sẵn?</li>

                  <p className="FandA-Page-Container-content-ol-indentation">•	Nếu sách bạn cần không có sẵn, vui lòng gửi yêu cầu cho chúng tôi trên trang Facebook của chúng tôi.</p>
                  <p className="FandA-Page-Container-content-ol-indentation">•	Gửi cho chúng tôi tiêu đề và điều kiện bạn đang tìm kiếm và chúng tôi sẽ cung cấp báo giá phù hợp, có giá trị trong 2 ngày kể từ khi truy vấn.</p>
                  <p className="FandA-Page-Container-content-ol-indentation">•	Bạn sẽ được yêu cầu đặt cọc 50% giá trị báo giá.</p>
                  <p className="FandA-Page-Container-content-ol-indentation">•	Khi sách đến nơi, chúng tôi sẽ thông báo cho bạn và gửi đến địa chỉ giao hàng của bạn.</p>
                    
                  <li>Nhà sách BsBooks có mặt tiền cửa hàng không?</li>

                  <p>Thật không may là không phải lúc này. Tuy nhiên, nếu bạn có nhu cầu xem kho hoặc nhận sách tại địa điểm của chúng tôi, vui lòng gọi trước 091 252 6808 để đặt trước với nhân viên kế toán.</p>

                  <li>Bạn xác định tình trạng của sách đã qua sử dụng như thế nào? </li>

                  <p>Chúng tôi xác định tình trạng sách đã qua sử dụng của mình dựa trên các tiêu chí sau:</p>
                  <p className="FandA-Page-Container-content-ol-indentation">•	Mới:  Giống như âm thanh. Một bản sao hoàn toàn mới, chưa sử dụng, chưa đọc trong tình trạng hoàn hảo.</p>
                  <p className="FandA-Page-Container-content-ol-indentation">•	Like New:  Một bản sao dường như chưa đọc trong tình trạng hoàn hảo. Bụi che còn nguyên vẹn; các trang sạch sẽ và không bị hoen ố bởi các ghi chú hoặc nếp gấp dưới bất kỳ hình thức nào.</p>
                  <p className="FandA-Page-Container-content-ol-indentation">•	Rất tốt:  Một bản sao đã được đọc, nhưng vẫn ở trong tình trạng tuyệt vời. Các trang còn nguyên vẹn và không bị mờ bởi ghi chú hoặc đánh dấu, nhưng có thể chứa tên chủ sở hữu trước đó gọn gàng. Cột sống vẫn không bị hư hại.</p>
                  <p className="FandA-Page-Container-content-ol-indentation">•	Tốt:  Một bản sao đã được đọc, nhưng vẫn trong tình trạng sạch sẽ. Tất cả các trang còn nguyên vẹn và nắp còn nguyên vẹn. Cột sống có thể cho thấy các dấu hiệu hao mòn. Các trang có thể bao gồm ghi chú và đánh dấu giới hạn, và bản sao có thể bao gồm nhãn "Từ thư viện" hoặc chữ khắc của chủ sở hữu trước đó.</p>
                  <p className="FandA-Page-Container-content-ol-indentation">•	Có thể chấp nhận:  Một bản sao có thể đọc được. Tất cả các trang đều còn nguyên vẹn, và bìa còn nguyên vẹn (có thể thiếu nắp che bụi). Các trang có thể bao gồm các ghi chú đáng kể - bằng bút hoặc bút đánh dấu - nhưng các ghi chú không thể che khuất văn bản.</p>

                  <li>Làm thế nào để tôi đặt hàng?</li>

                  <p>Hiện tại, chúng tôi nhận đặt hàng trên Facebook và Website. Tuy nhiên, xin lưu ý rằng chỉ các đơn đặt hàng từ Trang web mới đủ điều kiện tham gia Chương trình Điểm thưởng. </p>

                  <li>Giá vận chuyển / thời gian giao hàng là bao nhiêu?</li>

                  <p>Tỷ lệ vận chuyển đến địa chỉ cụ thể của bạn có thể được tìm thấy trên trang thanh toán khi bạn nhập thông tin chính xác. Nhìn chung, thời gian vận chuyển sẽ mất 1-2 ngày đối với Hà Nội, và 3-5 ngày đối với các thành phố khác.</p>
                  <p>Trong trường hợp thời gian vận chuyển lâu hơn bình thường, vui lòng thông báo trên trang Facebook của chúng tôi để chúng tôi hỗ trợ bạn theo dõi đơn hàng. </p>

                  <li>Những phương thức thanh toán nào bạn cung cấp?</li>

                  <p>Chúng tôi chấp nhận COD (Tiền mặt khi Giao hàng), Chuyển khoản ngân hàng và Momo. Vui lòng đọc kỹ và làm theo hướng dẫn trên trang thanh toán khi bạn mua hàng. Chúng tôi cũng chấp nhận thanh toán bằng tiền mặt khi bạn mua hàng tại địa điểm của chúng tôi.</p>

                  <li>Làm cách nào để lưu những cuốn sách mà tôi quan tâm?</li>

                  <p>Danh sách mong muốn được thiết kế để cho phép bạn lưu các mặt hàng mà bạn muốn mua sau này. Khi bạn mua một mặt hàng trong Danh sách mong muốn của mình, chúng tôi sẽ tự động xóa nó cho bạn. Khi bạn đã tìm thấy một mặt hàng mà bạn quan tâm, chỉ cần mở trang sản phẩm và nhấp vào biểu tượng trái tim nằm dưới giá để thêm nó vào Danh sách mong muốn của bạn. </p>

                  <li>Chương trình Điểm thưởng hoạt động như thế nào?</li>

                  <p>Chỉ các đơn đặt hàng từ Trang web mới đủ điều kiện để kiếm Điểm thưởng. Với mỗi 10.000đ chi tiêu, bạn sẽ nhận được 1 Điểm thưởng. Điểm thưởng tích lũy của bạn có thể được đổi thành Giao hàng miễn phí, Phiếu giảm giá, Quà tặng, v.v.</p>
              </ol>
              <p>Trên đây chỉ là một số trường hợp phổ biến mà chúng tôi thu thập thu thập được từ các câu hỏi từ trước đến giờ của các khách hàng. Nếu có thắc mắc hãy đến trang liên hệ để gọi trực tiếp cho chúng tôi giải đáp những thắc mắc của khách hàng.</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default FandAPage;



