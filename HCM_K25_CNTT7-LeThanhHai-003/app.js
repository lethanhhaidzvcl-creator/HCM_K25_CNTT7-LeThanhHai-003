let currentOrderCode = "";
let isOrderValid = false;
let totalRevenue = 0;
let totalOrders = 0;

while(true){

    console.log("=======================================");
    console.log("HỆ THỐNG THANH TOÁN NHÀ SÁCH TRI THỨC");
    console.log("=======================================");
    console.log("1. Nhập và kiểm chuẩn mã đơn hàng");
    console.log("2. Tính tiền đơn sách");
    console.log("3. Thẩm định mã hóa đơn may mắn");
    console.log("0. Thoát chương trình");
    console.log("=======================================");

    let choice = prompt("Vui lòng nhập lựa chọn của bạn: ");

    if(choice === null){
        console.log("Bạn đã hủy!");
        break;
    }

    switch (choice) {
        case "1":{
            let currentOrderCode = "";
            let isOrderValid = false;

            let input = prompt("Nhập mã đơn hàng: ")

            if(input === null){
                console.log("Bạn chưa nhập mã đơn hàng!");
                return;
            }

            let cleanCode = input.trim().toUpperCase();

            if(cleanCode.includes(" ")){
                console.log("Không được có khoảng trắng giữ chuỗi!");
                return;
            }

            if(cleanCode === ""){
                console.log("Chưa nhập mã đơn hàng!");
                break;
            }

            if(!cleanCode.startsWith("BOK-")){
                console.log("Mã phải bắt đầu bằng (BOK-)!");
                return;
            }

            if(cleanCode.length <= 6){
                console.log("Độ dài tối thiểu là 6!");
                return;
            }

            isOrderValid = true;
            console.log("Nhập đơn hàng thành công!");
            break;
        }
        case "2":{
            if(!isOrderValid){
                console.log("Vui lòng chọn case 1 để nhập mã hợp lệ trước");
                break;
            }
            let bookCount = 0;
            let pricePerBook = 0;

            let cancelCount = false;
            while(true){
                let inputCount = prompt("Nhập số cuốn sách(số nguyên): ")
                if (inputCount === null) {
                    console.log("Đã huy giao dịch!");
                    cancelCount = true;
                    break;
                }

                let trimmed = inputCount.trim().toUpperCase();
                let num = Number(trimmed);

                if(trimmed !== "" && !isNaN(num)){
                    bookCount = num;
                    break;
                }
                console.log("Lỗi số lượng sách!");
            }
            if(cancelCount) break;

            let cancelPrice = false;
            while(true){
                let inputPrice = prompt("Nhập giá bán sách: ")
                if (inputPrice === null) {
                    console.log("Đã hủy giao dịch!");
                    cancelPrice = true;
                    break;
                }

                let trimmed = inputCount.trim().toUpperCase();
                let num = Number(trimmed);

                if(trimmed !== "" && !isNaN(num)){
                    pricePerBook = num;
                    break;
                }
                console.log("Lỗi!");
            }
            if(cancelPrice);

            let basicCost = bookCount * pricePerBook;
            let discount = 0;
            if(bookCount >= 4){
                discount = basicCost * 0.1
            } else {
                discount = 0;
            }

            let packagingFee = (basicCost - discount)* 0.08;
            discount = Math.round(discount);
            packagingFee = Math.round(packagingFee);

            let totalPayment = basicCost - discount + packagingFee;
            
            totalRevenue += totalPayment;
            totalOrders += 1;

            console.log("==========Hóa đơn mua sách===============");
            console.log(`Ma đơn hàng: ${currentOrderCode}`);
            console.log(`So cuốn sách: ${bookCount}`);
            console.log(`Giá mỗi cuốn: ${pricePerBook.toLocaleString}`);
            console.log(`Chi phí cơ bản: ${basicCost.toLocaleString}`);
            console.log(`Tien giảm giá: ${discount.toLocaleString}`);
            console.log(`Phí bọc sách: ${packagingFee.toLocaleString}`);
            console.log(`Tổng thanh toán: ${totalPayment.toLocaleString}`);
            console.log("=========================================");

            currentOrderCode = "";
            isOrderValid = true;
            
            break;
        }
        case "3":
            
            break;
        case "0":
            console.log("Bạn đã thoát khỏi chương trình thành công!");
            break;
        default:
            console.log("Lựa chọn của bạn không hợp lệ!");
            break;
    }
    if(choice === "0"){
        break;
    }
}