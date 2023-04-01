//Never không bao giờ trả giá trị promise !
//KiểU dữu liệu Never được sử dụng khi chúng ta 
//'chắc chắn điều gì đó không sảy ra'
// xử lý lỗi
function handlException(errMessage:string): never {
    throw Error(errMessage)
}

handlException("erro")

