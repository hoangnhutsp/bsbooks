//đây là thông báo khi xác nhận đơn

export const dataNotification = () => {
    const data = [{
        title: "Đơn hàng đã được xác nhận",
        description: "Đơn hàng của bạn đã được xác nhận, cảm ơn bạn đã tin tưởng và chọn BsBooks. Chúng tôi sẽ cố gắng giao hàng sớm nhất cho bạn"
    },
    {
        title: "Đơn hàng đang trên đường vận chuyển",
        description: "Đơn hàng của bạn đang trên đường vận chuyển. Hãy thường xuyên cập nhật tình hình đơn hàng để có thể nhận đúng thời gian. Xin cảm ơn!!!"
    },
    {
        title: "Đơn hàng đã được giao",
        description: "Đơn hàng của bạn đã hoàn thành. Cảm ơn bạn đã chọn BsBooks, mong được phục vụ bạn trong thời gian tới."
    },
    {
        title: "Đơn hàng đã bị hủy",
        description: "Đơn hàng của bạn đã bị hủy. Cảm ơn bạn đã chọn BsBooks, mong được phục vụ bạn trong thời gian tới."
    }
    ]
    return data
}