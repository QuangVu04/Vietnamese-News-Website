import leadImage from './assets/hanoi-dawn.jpg';
import marketBasketImage from './assets/market-basket.jpg';
import pedestrianStreetImage from './assets/pedestrian-street.jpg';
import craftsmanImage from './assets/pho-co-craftsman.jpg';

export type SubCategoryItem = { name: string; slug: string };
export type SubCategoryGroup = { groupTitle: string; items: SubCategoryItem[]; isTwoColumn?: boolean };

export type CategoryNewsletter = {
  title: string;
  description: string;
  linkText: string;
  tag?: string;
  iconBg?: string;
};

export type CategoryFeature = {
  name: string;
  tag?: string;
  iconColor?: string;
};

export type Category = {
  slug: string;
  name: string;
  color: string;
  description: string;
  subgroups: SubCategoryGroup[];
  newsletter?: CategoryNewsletter;
  features?: CategoryFeature[];
  featuredSlug?: string;
};

export const categories: Category[] = [
  {
    slug: 'tin-tuc',
    name: 'TIN TỨC',
    color: 'red',
    description: 'Cập nhật kịp thời, chính xác mọi chuyển động thời sự, chính sách và sự kiện ngành Công Thương.',
    subgroups: [
      {
        groupTitle: 'CHỦ ĐỀ CHÍNH',
        isTwoColumn: true,
        items: [
          { name: 'Thời sự Công Thương', slug: 'thoi-su-cong-thuong' },
          { name: 'Chính sách & Pháp luật', slug: 'chinh-sach-phap-luat' },
          { name: 'Hoạt động Lãnh đạo Bộ', slug: 'hoat-dong-lanh-dao-bo' },
          { name: 'Thời sự Địa phương', slug: 'thoi-su-dia-phuong' },
          { name: 'Công tác Đảng & Đoàn thể', slug: 'cong-tac-dang' },
          { name: 'Cải cách Hành chính', slug: 'cai-cach-hanh-chinh' },
        ],
      },
      {
        groupTitle: 'TIÊU ĐIỂM',
        items: [
          { name: 'Đại hội Đảng XIII', slug: 'dai-hoi-dang-xiii' },
          { name: 'Họp báo thường kỳ Bộ', slug: 'hop-bao-thuong-ky' },
          { name: 'Chuyển đổi xanh & Giảm phát thải', slug: 'chuyen-doi-xanh' },
          { name: 'Đột phá Thể chế Kinh tế', slug: 'dot-pha-the-che' },
        ],
      },
    ],
    newsletter: {
      title: 'Bản tin Công Thương 18h30',
      description: 'Tổng hợp thời sự kinh tế, chính sách và chuyển động thị trường mỗi ngày.',
      linkText: 'Xem lịch phát sóng',
      tag: 'BẢN TIN',
      iconBg: '#d60000',
    },
    features: [
      { name: 'Truyền hình Trực tuyến', iconColor: '#d60000' },
      { name: 'Infographic Số liệu', iconColor: '#0852b5' },
      { name: 'Tạp chí Công Thương Số', iconColor: '#28754c' },
    ],
    featuredSlug: 'ha-noi-tren-hanh-trinh-xanh',
  },
  {
    slug: 'cong-nghiep',
    name: 'CÔNG NGHIỆP',
    color: 'red',
    description: 'Bức tranh phát triển công nghiệp nền tảng, chuỗi sản xuất và hạ tầng năng lượng quốc gia.',
    subgroups: [
      {
        groupTitle: 'NGÀNH TRỌNG ĐIỂM',
        isTwoColumn: true,
        items: [
          { name: 'Năng lượng & Điện lực', slug: 'nang-luong-dien-luc' },
          { name: 'Dầu khí & Khai khoáng', slug: 'dau-khi-khoang-san' },
          { name: 'Chế biến & Chế tạo', slug: 'che-bien-che-tao' },
          { name: 'Công nghiệp Phụ trợ', slug: 'cong-nghiep-phu-tro' },
          { name: 'Hóa chất & Vật liệu', slug: 'hoa-chat' },
          { name: 'Cơ khí - Chế tạo máy', slug: 'co-khi' },
        ],
      },
      {
        groupTitle: 'XU HƯỚNG PHÁT TRIỂN',
        items: [
          { name: 'Quy hoạch Điện VIII', slug: 'quy-hoach-dien-viii' },
          { name: 'Chuyển dịch Năng lượng Xanh', slug: 'chuyen-dich-nang-luong' },
          { name: 'Cam kết Net Zero 2050', slug: 'net-zero' },
          { name: 'Kinh tế Tuần hoàn', slug: 'kinh-te-tuan-hoan' },
        ],
      },
    ],
    newsletter: {
      title: 'Toàn cảnh Năng lượng',
      description: 'Phân tích chuyên sâu ngành điện lực, dầu khí và xu thế chuyển dịch xanh.',
      linkText: 'Xem chuyên đề năng lượng',
      tag: 'CHUYÊN ĐỀ',
      iconBg: '#0852b5',
    },
    features: [
      { name: 'Bản đồ Năng lượng Việt Nam', iconColor: '#0852b5' },
      { name: 'Báo cáo Chỉ số IIP', iconColor: '#d60000' },
      { name: 'Tham quan Nhà máy 360°', iconColor: '#28754c' },
    ],
    featuredSlug: 'quy-hoach-dien-viii-chuyen-dich-xanh',
  },
  {
    slug: 'thuong-mai',
    name: 'THƯƠNG MẠI',
    color: 'red',
    description: 'Thị trường trong nước, điều hành cung cầu, xuất nhập khẩu và bảo vệ quyền lợi người tiêu dùng.',
    subgroups: [
      {
        groupTitle: 'LĨNH VỰC TRỌNG TÂM',
        isTwoColumn: true,
        items: [
          { name: 'Xuất nhập khẩu', slug: 'xuat-nhap-khau' },
          { name: 'Thương mại Điện tử', slug: 'thuong-mai-dien-tu' },
          { name: 'Thị trường Trong nước', slug: 'thi-truong-trong-nuoc' },
          { name: 'Quản lý Thị trường', slug: 'quan-ly-thi-truong' },
          { name: 'Bảo vệ Quyền lợi NTD', slug: 'bao-ve-nguoi-tieu-dung' },
          { name: 'Logistics & Chuỗi cung ứng', slug: 'logistics' },
        ],
      },
      {
        groupTitle: 'CHƯƠNG TRÌNH',
        items: [
          { name: 'Người Việt ưu tiên hàng Việt', slug: 'hang-viet' },
          { name: 'Bình ổn Cung - Cầu Thị trường', slug: 'binh-on-gia' },
          { name: 'Xúc tiến Thương mại Quốc gia', slug: 'xuc-tien-thuong-mai' },
        ],
      },
    ],
    newsletter: {
      title: 'Nhịp đập Thị trường',
      description: 'Cập nhật giá cả hàng hóa thiết yếu, nông sản, thị trường xuất khẩu mới nhất.',
      linkText: 'Xem bản tin thị trường',
      tag: 'THỊ TRƯỜNG',
      iconBg: '#d60000',
    },
    features: [
      { name: 'Tra cứu Giá Xăng Dầu', iconColor: '#d60000' },
      { name: 'Cổng TMĐT Quốc gia', iconColor: '#0852b5' },
      { name: 'Đường dây nóng QLTT 1900', iconColor: '#28754c' },
    ],
    featuredSlug: 'xuat-khau-viet-nam-thang-moi',
  },
  {
    slug: 'hoi-nhap',
    name: 'HỘI NHẬP',
    color: 'red',
    description: 'Mở rộng thị trường toàn cầu, đàm phán và thực thi hiệu quả các hiệp định thương mại tự do thế hệ mới.',
    subgroups: [
      {
        groupTitle: 'HIỆP ĐỊNH FTA',
        isTwoColumn: true,
        items: [
          { name: 'Hiệp định EVFTA', slug: 'evfta' },
          { name: 'Hiệp định CPTPP', slug: 'cptpp' },
          { name: 'Hiệp định RCEP', slug: 'rcep' },
          { name: 'Hiệp định UKVFTA', slug: 'ukvfta' },
          { name: 'Khuôn khổ IPEF', slug: 'ipef' },
          { name: 'Hiệp định VIFTA', slug: 'vifta' },
        ],
      },
      {
        groupTitle: 'THỊ TRƯỜNG TOÀN CẦU',
        items: [
          { name: 'Thị trường Châu Mỹ', slug: 'thi-truong-chau-my' },
          { name: 'Thị trường Châu Âu (EU)', slug: 'thi-truong-chau-au' },
          { name: 'Thị trường Đông Bắc Á', slug: 'thi-truong-dong-bac-a' },
          { name: 'Hàng rào Kỹ thuật (TBT/SPS)', slug: 'hang-rao-ky-thuat' },
        ],
      },
    ],
    newsletter: {
      title: 'Sổ tay Doanh nghiệp FTA',
      description: 'Quy tắc xuất xứ và cẩm nang tận dụng ưu đãi thuế quan cho xuất khẩu.',
      linkText: 'Tải cẩm nang FTA',
      tag: 'HỘI NHẬP',
      iconBg: '#0852b5',
    },
    features: [
      { name: 'Thương vụ VN tại Nước ngoài', iconColor: '#0852b5' },
      { name: 'Cảnh báo Phòng vệ Thương mại', iconColor: '#d60000' },
      { name: 'Cổng FTA Portal Quốc gia', iconColor: '#28754c' },
    ],
    featuredSlug: 'bien-dong-va-can-bang-khu-vuc',
  },
  {
    slug: 'thuong-hieu',
    name: 'THƯƠNG HIỆU',
    color: 'red',
    description: 'Nâng tầm giá trị sản phẩm, dịch vụ và khẳng định uy tín thương hiệu quốc gia Việt Nam.',
    subgroups: [
      {
        groupTitle: 'CHƯƠNG TRÌNH QUỐC GIA',
        isTwoColumn: true,
        items: [
          { name: 'Thương hiệu Quốc gia VN', slug: 'thuong-hieu-quoc-gia' },
          { name: 'Sản phẩm CNNT Tiêu biểu', slug: 'sp-cnnt' },
          { name: 'Sản phẩm OCOP 5 Sao', slug: 'ocop' },
          { name: 'Hàng Việt Nam Chất lượng cao', slug: 'hang-viet-clc' },
        ],
      },
      {
        groupTitle: 'PHÁT TRIỂN & BẢO HỘ',
        items: [
          { name: 'Bảo hộ Chỉ dẫn Địa lý', slug: 'chi-dan-dia-ly' },
          { name: 'Sở hữu Trí tuệ Doanh nghiệp', slug: 'so-huu-tri-tue' },
          { name: 'Quảng bá Thương hiệu Toàn cầu', slug: 'quang-ba-thuong-hieu' },
        ],
      },
    ],
    newsletter: {
      title: 'Hồ sơ Vietnam Value',
      description: 'Hành trình khẳng định vị thế và niềm tự hào các sản phẩm mang thương hiệu Việt.',
      linkText: 'Khám phá các thương hiệu',
      tag: 'VIETNAM VALUE',
      iconBg: '#28754c',
    },
    features: [
      { name: 'Danh bạ Thương hiệu Quốc gia', iconColor: '#28754c' },
      { name: 'Triển lãm Vietnam Expo', iconColor: '#d60000' },
      { name: 'Tuần lễ Nhận diện Hàng Việt', iconColor: '#0852b5' },
    ],
    featuredSlug: 'thuong-hieu-quoc-gia-vuon-tam-toan-cau',
  },
  {
    slug: 'khoa-hoc-cong-nghe',
    name: 'KHOA HỌC CÔNG NGHỆ',
    color: 'red',
    description: 'Đổi mới công nghệ, nghiên cứu ứng dụng, tự động hóa và thúc đẩy chuyển đổi số sản xuất.',
    subgroups: [
      {
        groupTitle: 'ĐỔI MỚI & CÔNG NGHỆ',
        isTwoColumn: true,
        items: [
          { name: 'Kinh tế số & Smart Factory', slug: 'kinh-te-so' },
          { name: 'Tự động hóa & Robot', slug: 'tu-dong-hoa' },
          { name: 'Chuyển giao Công nghệ', slug: 'chuyen-giao-cong-nghe' },
          { name: 'AI trong Sản xuất Công nghiệp', slug: 'ai-san-xuat' },
        ],
      },
      {
        groupTitle: 'NĂNG LƯỢNG TIẾT KIỆM',
        items: [
          { name: 'Tiết kiệm Năng lượng Hiệu quả', slug: 'tiet-kiem-nang-luong' },
          { name: 'Kiểm toán Năng lượng Doanh nghiệp', slug: 'kiem-toan-nang-luong' },
          { name: 'Công nghệ Sản xuất Sạch hơn', slug: 'san-xuat-sach-hon' },
        ],
      },
    ],
    newsletter: {
      title: 'Diễn đàn Công nghệ 4.0',
      description: 'Cập nhật giải pháp chuyển đổi số và công nghệ tiên tiến cho ngành sản xuất.',
      linkText: 'Xem tài liệu công nghệ',
      tag: 'CÔNG NGHỆ',
      iconBg: '#0852b5',
    },
    features: [
      { name: 'Giải thưởng Sáng tạo KHCN', iconColor: '#0852b5' },
      { name: 'Bản đồ Công nghệ Ngành', iconColor: '#28754c' },
      { name: 'Chuyển đổi số Doanh nghiệp', iconColor: '#d60000' },
    ],
    featuredSlug: 'tri-tue-nhan-tao-trong-san-xuat',
  },
  {
    slug: 'doanh-nghiep',
    name: 'DOANH NGHIỆP',
    color: 'red',
    description: 'Đồng hành cùng cộng đồng doanh nghiệp, hợp tác xã và nhà đầu tư vượt khó, bứt phá.',
    subgroups: [
      {
        groupTitle: 'CỘNG ĐỒNG DOANH NGHIỆP',
        isTwoColumn: true,
        items: [
          { name: 'Tập đoàn & Tổng công ty', slug: 'tap-doan' },
          { name: 'Doanh nghiệp SMEs', slug: 'smes' },
          { name: 'Doanh nghiệp FDI', slug: 'fdi' },
          { name: 'Hợp tác xã & Khởi nghiệp', slug: 'hop-tac-xa' },
        ],
      },
      {
        groupTitle: 'HỖ TRỢ & ĐỒNG HÀNH',
        items: [
          { name: 'Tháo gỡ Rào cản Chính sách', slug: 'thao-go-rao-can' },
          { name: 'Tiếp cận Vốn & Tín dụng xanh', slug: 'von-tin-dung' },
          { name: 'Gương sáng Doanh nhân', slug: 'doanh-nhan' },
        ],
      },
    ],
    newsletter: {
      title: 'Đối thoại Doanh nhân',
      description: 'Lắng nghe những tiếng nói tâm huyết và hiến kế từ cộng đồng doanh nhân Việt.',
      linkText: 'Xem các kỳ đối thoại',
      tag: 'ĐỐI THOẠI',
      iconBg: '#d60000',
    },
    features: [
      { name: 'Câu chuyện Khởi nghiệp', iconColor: '#d60000' },
      { name: 'Cẩm nang Xúc tiến Đầu tư', iconColor: '#0852b5' },
      { name: 'Cổng Hỏi - Đáp Doanh nghiệp', iconColor: '#28754c' },
    ],
    featuredSlug: 'smes-viet-nam-vuot-song-hoi-nhap',
  },
  {
    slug: 'van-hoa-cong-thuong',
    name: 'VĂN HÓA CÔNG THƯƠNG',
    color: 'red',
    description: 'Lan tỏa nét đẹp văn hóa người thợ Công Thương, truyền thống lịch sử vẻ vang và an sinh xã hội.',
    subgroups: [
      {
        groupTitle: 'TRUYỀN THỐNG VẺ VANG',
        isTwoColumn: true,
        items: [
          { name: 'Lịch sử Ngành Công Thương', slug: 'lich-su-nganh' },
          { name: 'Văn hóa Doanh nghiệp', slug: 'van-hoa-doanh-nghiep' },
          { name: 'Hoạt động Công đoàn', slug: 'cong-doan' },
          { name: 'Thanh niên Công Thương', slug: 'thanh-nien' },
        ],
      },
      {
        groupTitle: 'ĐỜI SỐNG & PHONG TRÀO',
        items: [
          { name: 'Lao động Sáng tạo Tiêu biểu', slug: 'lao-dong-sang-tao' },
          { name: 'Hoạt động Đền ơn Đáp nghĩa', slug: 'den-on-dap-nghia' },
          { name: 'Hội thi Tiếng hát Người thợ', slug: 'tieng-hat-nguoi-tho' },
        ],
      },
    ],
    newsletter: {
      title: 'Giai điệu Người thợ',
      description: 'Tôn vinh những cống hiến thầm lặng và nét đẹp văn hóa người thợ Công Thương.',
      linkText: 'Khám phá các câu chuyện',
      tag: 'VĂN HÓA',
      iconBg: '#28754c',
    },
    features: [
      { name: 'Bảo tàng Ngành Công Thương', iconColor: '#28754c' },
      { name: 'Kỷ yếu 70 năm Ngành', iconColor: '#0852b5' },
      { name: 'Phóng sự Ảnh Đời sống Thợ', iconColor: '#d60000' },
    ],
    featuredSlug: 'nhung-nghe-nhan-giu-nhip-pho-co',
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  time: string;
  read: string;
  image?: string;
  imageLabel: string;
  lead?: boolean;
  isVideo?: boolean;
  videoDuration?: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: 'ha-noi-tren-hanh-trinh-xanh',
    category: 'tin-tuc',
    title: 'Hà Nội trên hành trình xanh: khi những dòng sông được gọi tên',
    excerpt: 'Từ những bờ sông đang hồi sinh đến các tuyến phố ưu tiên người đi bộ, Thủ đô đang tìm một nhịp sống mới — xanh hơn, gần gũi hơn.',
    author: 'Ngọc Hà',
    time: '08:12, 18.06.2025',
    read: '6 phút đọc',
    image: leadImage,
    imageLabel: 'Hồ Hoàn Kiếm trong nắng sớm Hà Nội',
    lead: true,
    body: [
      'Buổi sáng bên hồ, thành phố thức dậy bằng những âm thanh rất khẽ: tiếng bánh xe lăn trên con đường còn mát, tiếng chổi tre chạm vỉa hè, và ánh nắng đầu ngày trượt qua mặt nước.',
      'Hà Nội đang đứng trước một lựa chọn quan trọng. Những kế hoạch hồi sinh không gian công cộng, cải thiện chất lượng sông hồ và mở rộng giao thông xanh đang dần bước từ bản vẽ vào đời sống. Nhưng thay đổi bền vững không chỉ nằm ở những công trình mới; nó bắt đầu từ cách mỗi người có thể đi bộ an toàn, gặp nhau dưới tán cây và nhìn thấy mặt nước trong hơn.',
      'Các chuyên gia quy hoạch cho rằng kết nối những khoảng xanh rời rạc sẽ tạo nên một mạng lưới sinh thái đô thị có sức sống. Khi bờ sông trở thành không gian chung thay vì ranh giới, thành phố cũng có thêm những hành lang mát lành cho người dân.',
      'Thách thức vẫn còn ở phía trước: nguồn lực, sự phối hợp giữa các cấp và việc giữ gìn không gian sau đầu tư. Hành trình xanh vì thế không phải một đích đến, mà là cam kết được làm mới mỗi ngày — bằng những quyết định nhỏ, gần với người dân nhất.',
    ],
  },
  {
    slug: 'xuat-khau-viet-nam-thang-moi',
    category: 'thuong-mai',
    title: 'Xuất khẩu Việt Nam mở thêm cửa vào thị trường mới',
    excerpt: 'Doanh nghiệp chuyển từ lợi thế chi phí sang câu chuyện chất lượng, truy xuất và năng lực giao hàng bền vững.',
    author: 'Minh Quân',
    time: '07:40, 18.06.2025',
    read: '5 phút đọc',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    imageLabel: 'Nhịp hàng hóa tại cảng biển',
    body: ['Những tín hiệu phục hồi của thương mại toàn cầu đang mở ra cơ hội mới cho hàng Việt. Cơ hội ấy không còn chỉ đến từ giá cạnh tranh, mà ngày càng phụ thuộc vào khả năng đáp ứng tiêu chuẩn và kể được nguồn gốc của sản phẩm.', 'Tại các doanh nghiệp vừa và nhỏ, đầu tư vào dữ liệu chuỗi cung ứng đang trở thành ưu tiên thực tế. Một lô hàng được theo dõi minh bạch giúp nhà sản xuất chủ động hơn trước biến động và tạo niềm tin với đối tác dài hạn.', 'Bài toán phía trước là làm sao để chuyển đổi xanh không trở thành gánh nặng riêng của từng doanh nghiệp. Chia sẻ hạ tầng, tín dụng phù hợp và tiêu chuẩn rõ ràng sẽ quyết định tốc độ đi xa của hàng Việt.'],
  },
  {
    slug: 'bien-dong-va-can-bang-khu-vuc',
    category: 'hoi-nhap',
    title: 'Đông Nam Á tìm tiếng nói chung trước những chuyển động lớn',
    excerpt: 'Đối thoại và hợp tác khu vực đang được đặt ở vị trí trung tâm trong một thế giới nhiều biến động.',
    author: 'Thảo Vy',
    time: '06:55, 18.06.2025',
    read: '4 phút đọc',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    imageLabel: 'Đường chân trời khu vực lúc chiều muộn',
    body: ['Những chuyển động của kinh tế và an ninh quốc tế đang đặt các nước Đông Nam Á trước yêu cầu phối hợp chặt chẽ hơn. Từ thương mại đến ứng phó thiên tai, thách thức ngày càng vượt qua biên giới quốc gia.', 'Các nhà ngoại giao nhấn mạnh giá trị của đối thoại liên tục và những cơ chế hợp tác thực chất. Một khu vực ổn định không được tạo nên bằng những tuyên bố lớn, mà bằng sự tin cậy tích lũy qua từng thỏa thuận nhỏ.', 'Với Việt Nam, giữ vai trò chủ động và kết nối là cách để cùng các đối tác bảo vệ môi trường hòa bình, đồng thời mở thêm không gian phát triển.'],
  },
  {
    slug: 'nhung-nghe-nhan-giu-nhip-pho-co',
    category: 'van-hoa-cong-thuong',
    title: 'Người giữ nhịp phố cổ: ký ức được làm mới bằng đôi tay',
    excerpt: 'Trong những căn nhà nhỏ, nghề thủ công truyền thống vẫn tìm thấy chỗ đứng giữa nhịp sống hiện đại.',
    author: 'Lan Chi',
    time: '06:20, 18.06.2025',
    read: '7 phút đọc',
    image: craftsmanImage,
    imageLabel: 'Nghề thủ công trong một căn nhà phố cổ',
    body: ['Âm thanh trong xưởng nhỏ bắt đầu từ rất sớm. Nhịp búa gõ, tiếng giấy sột soạt và những câu chuyện được kể lại qua nhiều thế hệ tạo nên một bản nhạc riêng của phố.', 'Người trẻ đang tìm đến nghề thủ công bằng những cách mới: đưa sản phẩm lên nền tảng số, kết hợp thiết kế đương đại và mở cửa xưởng cho khách tham quan. Điều cũ không đứng yên; nó được tiếp nối bằng một ngôn ngữ mới.', 'Giữ nghề cũng là giữ một phần ký ức của thành phố. Và ký ức ấy chỉ sống khi có người muốn lắng nghe, học hỏi và trao lại.'],
  },
  {
    slug: 'mot-bua-com-it-lang-phi',
    category: 'cong-nghiep',
    title: 'Một bữa cơm ít lãng phí bắt đầu từ chiếc giỏ đi chợ',
    excerpt: 'Những thay đổi nhỏ trong căn bếp đang giúp nhiều gia đình sống nhẹ nhàng hơn với môi trường.',
    author: 'Thu An',
    time: '05:48, 18.06.2025',
    read: '3 phút đọc',
    image: marketBasketImage,
    imageLabel: 'Mâm cơm gia đình với nguyên liệu theo mùa',
    body: ['Trong chiếc giỏ vải của chị Mai luôn có một cuốn sổ nhỏ. Trước khi ra chợ, chị ghi lại những gì còn trong tủ lạnh và lên thực đơn vừa đủ cho vài ngày.', 'Thói quen ấy giúp gia đình giảm đáng kể thực phẩm bỏ đi, nhưng lợi ích không chỉ nằm ở con số. Việc chọn rau theo mùa, mua từ những quầy quen thuộc và tận dụng phần nguyên liệu còn lại cũng khiến bữa cơm gần với nhịp tự nhiên hơn.', 'Sống bền vững không cần khởi đầu bằng điều gì lớn lao. Đôi khi, đó chỉ là một kế hoạch bữa ăn và chiếc giỏ được dùng lại mỗi ngày.'],
  },
  {
    slug: 'mot-thanh-pho-can-lang-nghe',
    category: 'doanh-nghiep',
    title: 'Một thành phố đáng sống phải biết lắng nghe người đi bộ',
    excerpt: 'Vỉa hè không chỉ là lối đi. Đó là nơi thành phố thể hiện sự tôn trọng với những bước chân bình thường nhất.',
    author: 'Hoàng Minh',
    time: '05:15, 18.06.2025',
    read: '5 phút đọc',
    image: pedestrianStreetImage,
    imageLabel: 'Người đi bộ trên con phố rợp bóng cây',
    body: ['Chúng ta thường đo tốc độ của một thành phố bằng thời gian di chuyển. Nhưng đôi khi, thước đo đáng tin cậy hơn là cảm giác của một người đi bộ khi băng qua đường.', 'Một vỉa hè thông thoáng, bóng cây đúng chỗ và lối sang đường dễ tiếp cận không phải tiện ích xa xỉ. Đó là hạ tầng cơ bản để trẻ em, người cao tuổi và người khuyết tật có thể cùng tham gia vào đời sống đô thị.', 'Lắng nghe người đi bộ là lắng nghe những nhu cầu dễ bị bỏ qua nhất. Và khi những nhu cầu ấy được đưa vào quy hoạch, thành phố trở nên tử tế hơn với tất cả mọi người.'],
  },
  {
    slug: 'quy-hoach-dien-viii-chuyen-dich-xanh',
    category: 'cong-nghiep',
    title: 'Quy hoạch Điện VIII: Khơi thông nguồn lực cho chuyển dịch năng lượng xanh',
    excerpt: 'Việt Nam đang tập trung hoàn thiện hành lang pháp lý, thu hút nguồn vốn tư nhân và quốc tế vào phát triển điện gió ngoài khơi và năng lượng sạch.',
    author: 'Trần Tuấn',
    time: '04:45, 18.06.2025',
    read: '5 phút đọc',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
    imageLabel: 'Cánh đồng điện gió ngoài khơi ven biển',
    body: [
      'Chuyển dịch năng lượng không còn là câu chuyện của tương lai mà là yêu cầu cấp thiết của hiện tại. Việc triển khai hiệu quả Quy hoạch Điện VIII mở ra không gian phát triển mới cho ngành năng lượng quốc gia.',
      'Các dự án điện gió, điện mặt trời và hệ thống lưu trữ năng lượng đang nhận được sự quan tâm lớn từ các tập đoàn tài chính toàn cầu. Điểm mấu chốt nằm ở cơ chế giá và sự đồng bộ của lưới điện truyền tải.',
      'Ngành Công Thương đang nỗ lực tháo gỡ các nút thắt cơ chế để các nhà đầu tư an tâm cam kết nguồn lực lâu dài vì mục tiêu Net Zero 2050.',
    ],
  },
  {
    slug: 'thuong-hieu-quoc-gia-vuon-tam-toan-cau',
    category: 'thuong-hieu',
    title: 'Thương hiệu quốc gia Việt Nam: Hành trình vươn tầm các thị trường khó tính',
    excerpt: 'Từ nông sản chế biến sâu đến sản phẩm công nghệ cao, nhiều thương hiệu Việt đang dần khẳng định vị thế vững chắc tại Mỹ, EU và Nhật Bản.',
    author: 'Khánh Linh',
    time: '04:10, 18.06.2025',
    read: '6 phút đọc',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    imageLabel: 'Dây chuyền chế biến nông sản đạt chuẩn quốc tế',
    body: [
      'Xây dựng thương hiệu quốc gia không chỉ là việc quảng bá một nhãn hàng, mà là xây dựng niềm tin của người tiêu dùng toàn cầu vào chất lượng và sự tử tế của sản phẩm Việt.',
      'Nhiều doanh nghiệp đã chủ động chuyển đổi mô hình từ gia công thuần túy sang tự chủ thiết kế, áp dụng tiêu chuẩn xanh và chứng chỉ phát thải carbon thấp.',
      'Sự đồng hành của các chương trình xúc tiến thương mại quốc gia đang tạo bệ phóng vững chắc để thương hiệu Việt tự tin cạnh tranh trên sân chơi quốc tế.',
    ],
  },
  {
    slug: 'tri-tue-nhan-tao-trong-san-xuat',
    category: 'khoa-hoc-cong-nghe',
    title: 'Ứng dụng AI và IoT trong nhà máy thông minh: Bước chuyển của công nghiệp Việt',
    excerpt: 'Các doanh nghiệp sản xuất đang tối ưu hóa chuỗi vận hành và tiết kiệm đến 25% chi phí năng lượng nhờ chuyển đổi số toàn diện.',
    author: 'Đức Huy',
    time: '03:30, 18.06.2025',
    read: '4 phút đọc',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    imageLabel: 'Trung tâm điều hành sản xuất tự động hóa',
    body: [
      'Cuộc cách mạng công nghiệp lần thứ tư đang đi vào từng phân xưởng, dây chuyền sản xuất tại Việt Nam. Không còn là lý thuyết xa vời, trí tuệ nhân tạo (AI) và vạn vật kết nối (IoT) đang trực tiếp tạo ra giá trị gia tăng.',
      'Hệ thống cảm biến thông minh giúp dự đoán chính xác thời điểm bảo trì thiết bị, kiểm soát sai sót sản phẩm trong thời gian thực và quản lý tiêu hao nhiên liệu tối ưu.',
      'Đây là chìa khóa để ngành chế biến chế tạo nâng cao năng suất lao động và tham gia sâu hơn vào chuỗi giá trị toàn cầu.',
    ],
  },
  {
    slug: 'xuc-tien-thuong-mai-so-ket-noi-toan-cau',
    category: 'thuong-mai',
    title: 'Xúc tiến thương mại số: Nhịp cầu kết nối nông sản Việt ra thế giới',
    excerpt: 'Các hội chợ trực tuyến và nền tảng thương mại điện tử B2B đang mở ra kênh tiếp cận khách hàng quốc tế nhanh chóng cho doanh nghiệp vừa và nhỏ.',
    author: 'Hải Đăng',
    time: '02:50, 18.06.2025',
    read: '5 phút đọc',
    imageLabel: 'Kết nối cung cầu trên nền tảng thương mại số',
    body: [
      'Thương mại điện tử xuyên biên giới đang mở ra cánh cửa rộng lớn cho các sản phẩm nông sản chế biến, hàng tiêu dùng và thủ công mỹ nghệ của Việt Nam.',
      'Thông qua các nền tảng số hóa, một hợp tác xã ở vùng sâu có thể trực tiếp giới thiệu sản phẩm đến khách mua buôn tại châu Âu mà không qua nhiều khâu trung gian tốn kém.',
      'Cục Xúc tiến Thương mại đang tích cực phối hợp với các đối tác công nghệ để trang bị kỹ năng bán hàng số cho hàng chục nghìn doanh nghiệp trên cả nước.',
    ],
  },
  {
    slug: 'nang-luong-tai-tao-phat-trien-ben-vung',
    category: 'cong-nghiep',
    title: 'Đẩy mạnh phát triển hạ tầng truyền tải giải tỏa công suất điện mặt trời, điện gió',
    excerpt: 'Việc đầu tư các tuyến đường dây 500kV mạch 3 và trạm biến áp thông minh giúp nâng cao độ tin cậy cung cấp điện cho các trung tâm công nghiệp lớn.',
    author: 'Văn Chung',
    time: '02:15, 18.06.2025',
    read: '4 phút đọc',
    imageLabel: 'Thi công đường dây truyền tải điện cao thế',
    body: [
      'Hạ tầng truyền tải điện giữ vai trò huyết mạch trong việc kết nối nguồn năng lượng tái tạo từ các tỉnh miền Trung, miền Nam tới các trung tâm tiêu thụ lớn.',
      'Ngành điện lực đang tập trung mọi nguồn lực, áp dụng công nghệ số và tự động hóa trạm biến áp để vận hành hệ thống điện quốc gia an toàn, tối ưu.',
    ],
  },
  {
    slug: 'cong-nghiep-phu-tro-o-to-viet-nam',
    category: 'cong-nghiep',
    title: 'Công nghiệp phụ trợ: Tăng tỷ lệ nội địa hóa để tham gia chuỗi cung ứng toàn cầu',
    excerpt: 'Nhiều doanh nghiệp cơ khí chính xác trong nước đã đạt chuẩn cung ứng linh kiện cấp 1, cấp 2 cho các hãng sản xuất xe điện hàng đầu.',
    author: 'Quốc Bảo',
    time: '01:45, 18.06.2025',
    read: '6 phút đọc',
    imageLabel: 'Xưởng sản xuất linh kiện cơ khí chính xác',
    body: [
      'Tỷ lệ nội địa hóa trong ngành công nghiệp ô tô và điện tử đang có những bước tiến rõ rệt nhờ sự đầu tư bài bản vào công nghệ khuôn mẫu và robot hàn tự động.',
      'Chính sách hỗ trợ của Bộ Công Thương đang tiếp tục tạo điều kiện để các doanh nghiệp vừa và nhỏ tiếp cận công nghệ chuyển giao từ các tập đoàn đa quốc gia.',
    ],
  },
  {
    slug: 'dau-khi-viet-nam-chuyen-dich-nang-luong',
    category: 'cong-nghiep',
    title: 'Ngành dầu khí chủ động thích ứng với làn sóng chuyển dịch sang năng lượng sạch',
    excerpt: 'Tập trung phát triển khí tự nhiên hóa lỏng (LNG), điện gió ngoài khơi và công nghệ lưu trữ carbon (CCS) là định hướng chiến lược mới.',
    author: 'Thanh Bình',
    time: '01:10, 18.06.2025',
    read: '5 phút đọc',
    imageLabel: 'Kho cảng tiếp nhận khí LNG hiện đại',
    body: [
      'Trước xu thế giảm phát thải toàn cầu, các doanh nghiệp dầu khí quốc gia đang tích cực cơ cấu lại danh mục đầu tư, chuyển hướng mạnh mẽ sang năng lượng carbon thấp.',
      'Khí LNG được xem là nguồn nhiên liệu chuyển tiếp quan trọng đảm bảo an ninh năng lượng cho sản xuất công nghiệp trong giai đoạn 2025 - 2035.',
    ],
  },
  {
    slug: 'binh-on-thi-truong-hang-thiet-yeu',
    category: 'thuong-mai',
    title: 'Chủ động điều hành cung cầu, giữ vững bình ổn giá cả các mặt hàng thiết yếu',
    excerpt: 'Sự phối hợp chặt chẽ giữa hệ thống phân phối hiện đại và mạng lưới chợ truyền thống giúp thị trường luôn dồi dào hàng hóa, không xảy ra biến động giá.',
    author: 'Phương Mai',
    time: '00:40, 18.06.2025',
    read: '4 phút đọc',
    imageLabel: 'Kệ hàng hóa dồi dào tại siêu thị bán lẻ',
    body: [
      'Chương trình bình ổn thị trường đã phát huy hiệu quả rõ nét trong việc kiểm soát lạm phát và bảo đảm an sinh xã hội cho người tiêu dùng.',
      'Lực lượng Quản lý thị trường tăng cường kiểm tra, ngăn chặn tình trạng găm hàng, đầu cơ và gian lận thương mại trên cả thị trường truyền thống lẫn không gian mạng.',
    ],
  },
  {
    slug: 'tan-dung-uu-dai-thue-quan-evfta',
    category: 'hoi-nhap',
    title: 'Tận dụng ưu đãi thuế quan EVFTA: Cú hích cho nông sản và dệt may Việt Nam',
    excerpt: 'Kim ngạch xuất khẩu sang thị trường Liên minh Châu Âu tăng trưởng ấn tượng nhờ tỷ lệ cấp giấy chứng nhận xuất xứ (C/O) tăng cao.',
    author: 'Hoàng Nam',
    time: '23:30, 17.06.2025',
    read: '5 phút đọc',
    imageLabel: 'Kiểm định chất lượng hàng dệt may xuất khẩu EU',
    body: [
      'Hiệp định EVFTA tiếp tục là đòn bẩy quan trọng giúp hàng xuất khẩu Việt Nam nâng cao sức cạnh tranh tại 27 quốc gia thành viên Liên minh Châu Âu.',
      'Bộ Công Thương liên tục tổ chức các khóa tập huấn chuyên sâu về quy tắc xuất xứ và tiêu chuẩn trách nhiệm xã hội để hỗ trợ doanh nghiệp vượt qua các rào cản kỹ thuật mới.',
    ],
  },
  {
    slug: 'smes-viet-nam-vuot-song-hoi-nhap',
    category: 'doanh-nghiep',
    title: 'Cộng đồng doanh nghiệp SMEs Việt Nam: Đổi mới tư duy để bứt phá và vươn xa',
    excerpt: 'Áp dụng quản trị tinh gọn, chuyển đổi xanh và số hóa hoạt động tiếp thị là ba trụ cột giúp các doanh nghiệp vừa và nhỏ đứng vững trước thách thức.',
    author: 'Đặng Tuấn',
    time: '22:50, 17.06.2025',
    read: '5 phút đọc',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    imageLabel: 'Cuộc họp chiến lược của doanh nghiệp trẻ khởi nghiệp',
    body: [
      'Trước những biến động khó lường của thị trường quốc tế, khả năng thích ứng linh hoạt và tinh thần đổi mới sáng tạo là tài sản quý giá nhất của khối doanh nghiệp tư nhân.',
      'Nhiều mô hình hợp tác xã kiểu mới và startup nông nghiệp công nghệ cao đã tìm được chỗ đứng nhờ xây dựng chuỗi giá trị khép kín từ đồng ruộng tới bàn ăn.',
    ],
  },
  {
    slug: 'tin-dung-xanh-tro-luc-doanh-nghiep',
    category: 'doanh-nghiep',
    title: 'Tiếp cận dòng vốn tín dụng xanh: Đòn bẩy tài chính cho chuyển đổi mô hình kinh doanh',
    excerpt: 'Hệ thống ngân hàng thương mại đang mở rộng gói vay ưu đãi cho các dự án giảm phát thải, xử lý nước thải và năng lượng áp mái.',
    author: 'Việt Hưng',
    time: '22:15, 17.06.2025',
    read: '4 phút đọc',
    imageLabel: 'Nhà xưởng lắp đặt pin năng lượng mặt trời áp mái',
    body: [
      'Tín dụng xanh đang trở thành dòng vốn chiến lược được các định chế tài chính ưu tiên giải ngân cho các doanh nghiệp có chiến lược ESG bài bản.',
      'Doanh nghiệp đáp ứng các tiêu chí môi trường không chỉ tiếp cận được nguồn vốn rẻ hơn mà còn dễ dàng ký kết các hợp đồng cung ứng dài hạn với đối tác quốc tế.',
    ],
  },
  {
    slug: 'xuat-khau-hoa-ky-tang-truong-an-tuong',
    category: 'hoi-nhap',
    title: 'Thị trường Hoa Kỳ: Điểm sáng xuất khẩu đồ gỗ và điện tử Việt Nam',
    excerpt: 'Chủ động thích ứng với các quy định truy xuất chuỗi cung ứng và tiêu chuẩn lao động giúp các doanh nghiệp Việt duy trì đà tăng trưởng hai con số.',
    author: 'Thanh Trúc',
    time: '21:40, 17.06.2025',
    read: '5 phút đọc',
    imageLabel: 'Dây chuyền lắp ráp thiết bị điện tử xuất khẩu',
    body: [
      'Hoa Kỳ tiếp tục giữ vững vị thế là thị trường xuất khẩu lớn nhất của Việt Nam với kim ngạch tăng trưởng tích cực ở nhóm hàng chế biến chế tạo.',
      'Sự linh hoạt trong đáp ứng quy chuẩn kỹ thuật và chủ động phòng ngừa rủi ro phòng vệ thương mại là yếu tố quyết định để giữ vững thị phần.',
    ],
  },
  {
    slug: 'ban-dan-vi-mach-co-hoi-vang-viet-nam',
    category: 'khoa-hoc-cong-nghe',
    title: 'Công nghiệp bán dẫn: Cơ hội vàng đưa Việt Nam vào bản đồ công nghệ thế giới',
    excerpt: 'Đào tạo 50.000 kỹ sư bán dẫn và hoàn thiện chính sách ưu đãi vượt trội là chiến lược thu hút các tập đoàn công nghệ hàng đầu.',
    author: 'Minh Triết',
    time: '21:10, 17.06.2025',
    read: '6 phút đọc',
    imageLabel: 'Phòng thí nghiệm thiết kế vi mạch bán dẫn',
    body: [
      'Ngành công nghiệp bán dẫn đang trở thành trọng tâm chiến lược trong định hướng phát triển công nghệ cao của Việt Nam đến năm 2030.',
      'Sự liên kết chặt chẽ giữa trường đại học, viện nghiên cứu và doanh nghiệp công nghệ là chìa khóa đào tạo nguồn nhân lực chất lượng cao sẵn sàng cho chuỗi giá trị toàn cầu.',
    ],
  },
  {
    slug: 'tiet-kiem-nang-luong-nha-may-thong-minh',
    category: 'khoa-hoc-cong-nghe',
    title: 'Kiểm toán năng lượng: Lời giải bài toán cắt giảm chi phí sản xuất công nghiệp',
    excerpt: 'Nhiều nhà máy thép, xi măng và dệt may đã tiết kiệm hàng chục tỷ đồng mỗi năm nhờ lắp đặt hệ thống giám sát năng lượng thông minh.',
    author: 'Khắc Duy',
    time: '20:30, 17.06.2025',
    read: '4 phút đọc',
    imageLabel: 'Hệ thống đo kiểm năng lượng tự động',
    body: [
      'Sử dụng năng lượng tiết kiệm và hiệu quả là giải pháp thiết thực nhất giúp doanh nghiệp vừa giảm phát thải vừa gia tăng biên lợi nhuận.',
      'Bộ Công Thương đang đẩy mạnh các chương trình hỗ trợ kỹ thuật và kiểm toán năng lượng miễn phí cho các cơ sở sử dụng năng lượng trọng điểm.',
    ],
  },
  {
    slug: 'thuong-hieu-quoc-gia-vietnam-value-2025',
    category: 'thuong-hieu',
    title: 'Thương hiệu Quốc gia Việt Nam: Nâng tầm vị thế và giá trị xuất khẩu toàn cầu',
    excerpt: 'Hơn 170 doanh nghiệp đạt Thương hiệu Quốc gia đang đóng vai trò đầu tàu, dẫn dắt các chuỗi cung ứng sản phẩm công nghiệp và tiêu dùng chất lượng cao.',
    author: 'Khánh Linh',
    time: '19:45, 17.06.2025',
    read: '5 phút đọc',
    imageLabel: 'Lễ vinh danh Thương hiệu Quốc gia Việt Nam',
    body: [
      'Chương trình Thương hiệu Quốc gia Việt Nam không ngừng đổi mới tiêu chí, chú trọng vào năng lực đổi mới sáng tạo, chuyển đổi xanh và tính bền vững của sản phẩm.',
      'Sự công nhận này là tấm hộ chiếu uy tín giúp doanh nghiệp Việt tự tin bước vào những thị trường khó tính nhất thế giới.',
    ],
  },
  {
    slug: 'bao-ho-chi-dan-dia-ly-nong-san-viet',
    category: 'thuong-hieu',
    title: 'Bảo hộ chỉ dẫn địa lý: Giữ gìn danh tiếng và giá trị kinh tế cho đặc sản bản địa',
    excerpt: 'Xây dựng nhãn hiệu chứng nhận và đăng ký sở hữu trí tuệ tại nước ngoài giúp các nông sản Việt khẳng định chỗ đứng vững chắc trên trường quốc tế.',
    author: 'Đức Huy',
    time: '18:50, 17.06.2025',
    read: '4 phút đọc',
    imageLabel: 'Vườn chè cổ thụ Shan tuyết Hà Giang',
    body: [
      'Việc bảo hộ quyền sở hữu trí tuệ và chỉ dẫn địa lý đóng vai trò quyết định trong việc ngăn chặn nạn giả mạo xuất xứ và gia tăng giá trị thương mại cho nông sản.',
      'Bộ Công Thương tiếp tục đồng hành cùng các địa phương xây dựng chiến lược truyền thông thương hiệu nông sản xuất khẩu bài bản.',
    ],
  },
  {
    slug: 'thoi-su-cong-thuong-18h30',
    category: 'tin-tuc',
    title: 'Bản tin Thời sự Công Thương: Điểm nóng thị trường năng lượng & xuất khẩu',
    excerpt: 'Toàn cảnh các chính sách điều hành giá xăng dầu, tình hình cung ứng điện và các giải pháp hỗ trợ xúc tiến xuất khẩu những tháng cuối năm.',
    author: 'Truyền Hình Công Thương',
    time: 'Hôm nay',
    read: '18 phút xem',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
    imageLabel: 'Bản tin Thời sự Truyền Hình Công Thương',
    isVideo: true,
    videoDuration: '18:45',
    body: [
      'Bản tin Thời sự Công Thương hôm nay cập nhật toàn diện diễn biến thị trường năng lượng toàn cầu và các giải pháp điều hành trong nước nhằm giữ vững ổn định kinh tế vĩ mô.',
      'Phần tiêu điểm phản ánh nỗ lực của các hiệp hội và doanh nghiệp xuất khẩu trong việc vượt qua các rào cản kỹ thuật mới từ thị trường quốc tế.',
      'Các phóng viên Truyền hình Công Thương trực tiếp ghi nhận từ hiện trường tại các khu công nghiệp trọng điểm phía Bắc và các cảng biển lớn.',
    ],
  },
  {
    slug: 'toan-canh-500kv-mach-3',
    category: 'cong-nghiep',
    title: 'Toàn cảnh dự án Đường dây 500kV mạch 3: Kỳ tích thi công thần tốc',
    excerpt: 'Ghi nhận tinh thần thép của hàng vạn kỹ sư, công nhân ngành điện vượt nắng thắng mưa, hoàn thành đường dây huyết mạch quốc gia đúng tiến độ.',
    author: 'Truyền Hình Công Thương',
    time: 'Hôm qua',
    read: '8 phút xem',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
    imageLabel: 'Đại công trường thi công đường dây 500kV',
    isVideo: true,
    videoDuration: '08:20',
    body: [
      'Dự án đường dây 500kV mạch 3 là công trình trọng điểm quốc gia, giữ vai trò đặc biệt quan trọng trong việc truyền tải điện từ miền Trung ra miền Bắc.',
      'Phóng sự tài liệu ghi lại những hình ảnh chân thực, cảm động về sự đồng lòng của chính quyền các địa phương và tinh thần vượt khó của lực lượng thi công trên các đỉnh đèo hiểm trở.',
    ],
  },
  {
    slug: 'nong-san-viet-xuat-khau',
    category: 'thuong-mai',
    title: 'Phóng sự: Nông sản Việt chinh phục các thị trường khó tính EU và Hoa Kỳ',
    excerpt: 'Hành trình từ vườn trồng đạt chuẩn GlobalGAP tới các kệ siêu thị lớn hàng đầu thế giới của sầu riêng, thanh long và hạt tiêu Việt.',
    author: 'Truyền Hình Công Thương',
    time: '2 ngày trước',
    read: '6 phút xem',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=1200&q=80',
    imageLabel: 'Nông sản chất lượng cao xuất khẩu',
    isVideo: true,
    videoDuration: '06:15',
    body: [
      'Nông sản Việt Nam đang từng bước khẳng định vị thế vững chắc tại các thị trường đòi hỏi tiêu chuẩn khắt khe nhất.',
      'Chìa khóa thành công nằm ở việc minh bạch xuất xứ, áp dụng quy trình canh tác hữu cơ và chế biến sâu để gia tăng giá trị thương phẩm.',
    ],
  },
  {
    slug: 'toa-dam-chuyen-doi-so',
    category: 'khoa-hoc-cong-nghe',
    title: 'Tọa đàm: Doanh nghiệp trước làn sóng chuyển đổi số và ứng dụng AI',
    excerpt: 'Các chuyên gia đầu ngành chia sẻ giải pháp thực chiến giúp doanh nghiệp vừa và nhỏ ứng dụng trí tuệ nhân tạo để tăng năng suất và giảm chi phí.',
    author: 'Truyền Hình Công Thương',
    time: '3 ngày trước',
    read: '12 phút xem',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    imageLabel: 'Tọa đàm chuyển đổi số công nghiệp',
    isVideo: true,
    videoDuration: '12:30',
    body: [
      'Tại tọa đàm, các diễn giả đã phân tích sâu các cơ hội và thách thức của chuyển đổi số trong bối cảnh cuộc cách mạng công nghiệp 4.0 đang diễn ra mạnh mẽ.',
      'Doanh nghiệp không nhất thiết phải đầu tư hạ tầng quá lớn ngay từ đầu, mà có thể áp dụng các giải pháp phần mềm dạng dịch vụ (SaaS) và tự động hóa các quy trình cốt lõi.',
    ],
  },
  {
    slug: 'lang-nghe-nguoi-tho-viet',
    category: 'van-hoa-cong-thuong',
    title: 'Ghé thăm làng nghề dệt lụa trăm năm: Giữ lửa nghề người thợ Việt',
    excerpt: 'Những nghệ nhân cao tuổi cùng thế hệ trẻ tiếp nối dòng chảy tinh hoa lụa truyền thống kết hợp thương mại điện tử hiện đại.',
    author: 'Truyền Hình Công Thương',
    time: '4 ngày trước',
    read: '5 phút xem',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&q=80',
    imageLabel: 'Nghề dệt lụa truyền thống thủ công',
    isVideo: true,
    videoDuration: '05:40',
    body: [
      'Mỗi tấm lụa là kết tinh của sự kiên nhẫn, bàn tay tài hoa và tình yêu sâu sắc với nghề truyền thống của người thợ.',
      'Sự hỗ trợ từ chương trình khuyến công quốc gia đã giúp làng nghề đầu tư cải tiến máy móc, vừa giữ được nét tinh xảo thủ công vừa nâng cao sản lượng cung ứng.',
    ],
  },
  {
    slug: 'tieu-dung-xanh-ben-vung',
    category: 'doanh-nghiep',
    title: 'Xu hướng tiêu dùng xanh: Lựa chọn bền vững cho tương lai',
    excerpt: 'Khảo sát thực tế về sự chuyển dịch thói quen mua sắm ưu tiên sản phẩm tái chế, bao bì thân thiện với môi trường của người tiêu dùng.',
    author: 'Truyền Hình Công Thương',
    time: '5 ngày trước',
    read: '4 phút xem',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    imageLabel: 'Tiêu dùng xanh và sản phẩm tái chế',
    isVideo: true,
    videoDuration: '04:50',
    body: [
      'Tiêu dùng xanh đang dần trở thành xu hướng tất yếu trong xã hội hiện đại. Người tiêu dùng ngày càng quan tâm hơn tới tác động môi trường của các sản phẩm họ lựa chọn.',
      'Doanh nghiệp tiên phong trong cam kết xanh không chỉ thực hiện trách nhiệm xã hội mà còn tạo dựng được lợi thế cạnh tranh lâu dài và bền vững.',
    ],
  },
];

export const categoryFor = (slug: string) => categories.find((category) => category.slug === slug);
export const articleFor = (slug: string) => articles.find((article) => article.slug === slug);