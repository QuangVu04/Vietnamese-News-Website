import leadImage from './assets/hanoi-dawn.jpg';

export type Category = { slug: string; name: string; color: string };

export const categories: Category[] = [
  { slug: 'thoi-su', name: 'Thời sự', color: 'red' },
  { slug: 'the-gioi', name: 'Thế giới', color: 'blue' },
  { slug: 'kinh-te', name: 'Kinh tế', color: 'green' },
  { slug: 'van-hoa', name: 'Văn hóa', color: 'blue' },
  { slug: 'doi-song', name: 'Đời sống', color: 'green' },
  { slug: 'goc-nhin', name: 'Góc nhìn', color: 'red' },
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
  body: string[];
};

export const articles: Article[] = [
  {
    slug: 'ha-noi-tren-hanh-trinh-xanh',
    category: 'thoi-su',
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
    category: 'kinh-te',
    title: 'Xuất khẩu Việt Nam mở thêm cửa vào thị trường mới',
    excerpt: 'Doanh nghiệp chuyển từ lợi thế chi phí sang câu chuyện chất lượng, truy xuất và năng lực giao hàng bền vững.',
    author: 'Minh Quân',
    time: '07:40, 18.06.2025',
    read: '5 phút đọc',
    imageLabel: 'Nhịp hàng hóa tại cảng biển',
    body: ['Những tín hiệu phục hồi của thương mại toàn cầu đang mở ra cơ hội mới cho hàng Việt. Cơ hội ấy không còn chỉ đến từ giá cạnh tranh, mà ngày càng phụ thuộc vào khả năng đáp ứng tiêu chuẩn và kể được nguồn gốc của sản phẩm.', 'Tại các doanh nghiệp vừa và nhỏ, đầu tư vào dữ liệu chuỗi cung ứng đang trở thành ưu tiên thực tế. Một lô hàng được theo dõi minh bạch giúp nhà sản xuất chủ động hơn trước biến động và tạo niềm tin với đối tác dài hạn.', 'Bài toán phía trước là làm sao để chuyển đổi xanh không trở thành gánh nặng riêng của từng doanh nghiệp. Chia sẻ hạ tầng, tín dụng phù hợp và tiêu chuẩn rõ ràng sẽ quyết định tốc độ đi xa của hàng Việt.'],
  },
  {
    slug: 'bien-dong-va-can-bang-khu-vuc',
    category: 'the-gioi',
    title: 'Đông Nam Á tìm tiếng nói chung trước những chuyển động lớn',
    excerpt: 'Đối thoại và hợp tác khu vực đang được đặt ở vị trí trung tâm trong một thế giới nhiều biến động.',
    author: 'Thảo Vy',
    time: '06:55, 18.06.2025',
    read: '4 phút đọc',
    imageLabel: 'Đường chân trời khu vực lúc chiều muộn',
    body: ['Những chuyển động của kinh tế và an ninh quốc tế đang đặt các nước Đông Nam Á trước yêu cầu phối hợp chặt chẽ hơn. Từ thương mại đến ứng phó thiên tai, thách thức ngày càng vượt qua biên giới quốc gia.', 'Các nhà ngoại giao nhấn mạnh giá trị của đối thoại liên tục và những cơ chế hợp tác thực chất. Một khu vực ổn định không được tạo nên bằng những tuyên bố lớn, mà bằng sự tin cậy tích lũy qua từng thỏa thuận nhỏ.', 'Với Việt Nam, giữ vai trò chủ động và kết nối là cách để cùng các đối tác bảo vệ môi trường hòa bình, đồng thời mở thêm không gian phát triển.'],
  },
  {
    slug: 'nhung-nghe-nhan-giu-nhip-pho-co',
    category: 'van-hoa',
    title: 'Người giữ nhịp phố cổ: ký ức được làm mới bằng đôi tay',
    excerpt: 'Trong những căn nhà nhỏ, nghề thủ công truyền thống vẫn tìm thấy chỗ đứng giữa nhịp sống hiện đại.',
    author: 'Lan Chi',
    time: '06:20, 18.06.2025',
    read: '7 phút đọc',
    imageLabel: 'Nghề thủ công trong một căn nhà phố cổ',
    body: ['Âm thanh trong xưởng nhỏ bắt đầu từ rất sớm. Nhịp búa gõ, tiếng giấy sột soạt và những câu chuyện được kể lại qua nhiều thế hệ tạo nên một bản nhạc riêng của phố.', 'Người trẻ đang tìm đến nghề thủ công bằng những cách mới: đưa sản phẩm lên nền tảng số, kết hợp thiết kế đương đại và mở cửa xưởng cho khách tham quan. Điều cũ không đứng yên; nó được tiếp nối bằng một ngôn ngữ mới.', 'Giữ nghề cũng là giữ một phần ký ức của thành phố. Và ký ức ấy chỉ sống khi có người muốn lắng nghe, học hỏi và trao lại.'],
  },
  {
    slug: 'mot-bua-com-it-lang-phi',
    category: 'doi-song',
    title: 'Một bữa cơm ít lãng phí bắt đầu từ chiếc giỏ đi chợ',
    excerpt: 'Những thay đổi nhỏ trong căn bếp đang giúp nhiều gia đình sống nhẹ nhàng hơn với môi trường.',
    author: 'Thu An',
    time: '05:48, 18.06.2025',
    read: '3 phút đọc',
    imageLabel: 'Mâm cơm gia đình với nguyên liệu theo mùa',
    body: ['Trong chiếc giỏ vải của chị Mai luôn có một cuốn sổ nhỏ. Trước khi ra chợ, chị ghi lại những gì còn trong tủ lạnh và lên thực đơn vừa đủ cho vài ngày.', 'Thói quen ấy giúp gia đình giảm đáng kể thực phẩm bỏ đi, nhưng lợi ích không chỉ nằm ở con số. Việc chọn rau theo mùa, mua từ những quầy quen thuộc và tận dụng phần nguyên liệu còn lại cũng khiến bữa cơm gần với nhịp tự nhiên hơn.', 'Sống bền vững không cần khởi đầu bằng điều gì lớn lao. Đôi khi, đó chỉ là một kế hoạch bữa ăn và chiếc giỏ được dùng lại mỗi ngày.'],
  },
  {
    slug: 'mot-thanh-pho-can-lang-nghe',
    category: 'goc-nhin',
    title: 'Một thành phố đáng sống phải biết lắng nghe người đi bộ',
    excerpt: 'Vỉa hè không chỉ là lối đi. Đó là nơi thành phố thể hiện sự tôn trọng với những bước chân bình thường nhất.',
    author: 'Hoàng Minh',
    time: '05:15, 18.06.2025',
    read: '5 phút đọc',
    imageLabel: 'Người đi bộ trên con phố rợp bóng cây',
    body: ['Chúng ta thường đo tốc độ của một thành phố bằng thời gian di chuyển. Nhưng đôi khi, thước đo đáng tin cậy hơn là cảm giác của một người đi bộ khi băng qua đường.', 'Một vỉa hè thông thoáng, bóng cây đúng chỗ và lối sang đường dễ tiếp cận không phải tiện ích xa xỉ. Đó là hạ tầng cơ bản để trẻ em, người cao tuổi và người khuyết tật có thể cùng tham gia vào đời sống đô thị.', 'Lắng nghe người đi bộ là lắng nghe những nhu cầu dễ bị bỏ qua nhất. Và khi những nhu cầu ấy được đưa vào quy hoạch, thành phố trở nên tử tế hơn với tất cả mọi người.'],
  },
];

export const categoryFor = (slug: string) => categories.find((category) => category.slug === slug);
export const articleFor = (slug: string) => articles.find((article) => article.slug === slug);