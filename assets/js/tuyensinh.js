$(document).ready(function() {
    $('.experience-list').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });


    let answer = [
         'Vâng, hoàn toàn được. ISHCMC mang đến cho mỗi học sinh một chương trình học tập được cá nhân hóa, được thiết kế để hỗ trợ các em chuẩn bị cho các kỳ thi IGCSE năm 16 tuổi. Ngoài ra, nhà trường còn có các bộ phận Hỗ trợ tiếng Anh (EAL) và Hỗ trợ tiếng Việt (VAL) cho những em học sinh có nhu cầu.',
        'Việc xếp lớp cho học sinh sẽ phụ thuộc vào độ tuổi, kết quả kiểm tra và báo cáo kết quả học tập của em. Các em ở độ tuổi lớn hơn thường cần trình độ tiếng Anh cao hơn do yêu cầu từ chương trình học. Đội ngũ giáo viên Hỗ trợ ngôn ngữ Tiếng Anh xuất sắc của nhà trường có thể giúp các em trong trường hợp em gặp một số khó khăn ban đầu. Nhà trường luôn hướng đến sự thành công và tiến bộ vượt bậc của từng em học sinh, dù các em có xuất phát điểm hoặc những trải nghiệm trước đó như thế nào.',
        'Quy trình tuyển sinh tại ISHCMC bắt đầu vào tháng 10, đây cũng chính là lúc nhà trường tuyển dụng đội ngũ giáo viên quốc tế tốt nhất cho năm học tiếp theo. Xuất phát điểm của kế hoạch tài chính bắt đầu từ khá sớm để chuẩn bị cho đội ngũ giảng dạy, vì vậy nhà trường cần nhận được sự cam kết từ phía gia đình. Trong trường hợp quý phụ huynh thông báo khá gấp khi xin cho con thôi học tại trường, khoản phí đặt cọc của quý vị sẽ bù vào các chi phí phát sinh trong quá trình tuyển dụng. Phương thức sử dụng khoản phí đặt cọc là yêu cầu tiêu chuẩn tại các trường quốc tế cao cấp trên toàn thế giới.',
        'Vâng, hoàn toàn được. I mang đến cho mỗi học sinh một chương trình học tập được cá nhân hóa, được thiết kế để hỗ trợ các em chuẩn bị cho các kỳ thi IGCSE năm 16 tuổi. Ngoài ra, nhà trường còn có các bộ phận Hỗ trợ tiếng Anh (EAL) và Hỗ trợ tiếng Việt (VAL) cho những em học sinh có nhu cầu.',
        'I là một trong những trường hàng đầu tại Việt Nam, và chúng tôi luôn trân trọng đặc quyền được giảng dạy Chương trình Quốc gia của Anh trong một môi trường song ngữ. Nhà trường áp dụng chương trình giảng dạy này làm khung Chương trình tiêu chuẩn để đảm bảo mỗi học sinh đều nhận được chất lượng giáo dục chuẩn quốc tế mà vẫn duy trì được đặc trưng bản sắc Việt Nam.',
        'Học sinh sẽ chuẩn bị cho các kỳ thi IGCSE của Đại học Cambridge diễn ra vào năm 16 tuổi, sau đó là các kỳ thi A Level Quốc tế năm 18 tuổi',
        'Chương trình giảng dạy tại ISHCMC kết hợp cả tiếng Anh và tiếng Việt. Mật độ tiết học bằng tiếng Anh sẽ tăng dần khi học sinh bước vào Trung học (95% tiếng Anh với Khối KS5) để chuẩn bị cho các kỳ thi, còn các học sinh nhỏ tuổi hơn được học tiếng Anh và tiếng Việt với thời lượng như nhau.',
        'Có. Các kỳ thi của Đại học Cambridge được tổ chức tại hơn 100 quốc gia và được tất cả các trường đại học hàng đầu trên thế giới chấp nhận.',
        'Nhà trường hỗ trợ học tập cho các em học sinh gặp chút khó khăn trong học tập. Nhà trường còn có các bộ phận Hỗ trợ tiếng Anh (EAL) và Hỗ trợ tiếng Việt (VAL) cho những em học sinh có nhu cầu được hỗ trợ ngôn ngữ ở giai đoạn đầu, và việc hỗ trợ này là không thu phí.',
    ]   
    $('.question-item-right>i').click(function() {
        $(this).css('transform', 'rotate(0)'); 
        let pos = $(this).closest('.question-item').index();
        $(this).closest('.question-item').append(
            `<div class="question-item-answer"> 
            ${answer[pos]};
            </div>`
        );  
    })
})