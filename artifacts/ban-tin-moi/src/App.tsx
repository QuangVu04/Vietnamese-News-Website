import { useEffect, useState } from 'react';
import { Link, Route, Switch, useLocation, useParams } from 'wouter';
import { ArrowDownRight, ArrowLeft, ArrowRight, Bookmark, Clock3, Menu, Search, X } from 'lucide-react';
import { articleFor, articles, categories, categoryFor, type Article } from './data';

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} — Bản Tin Mới`;
    const setMeta = (key: string, value: string, property = false) => {
      const selector = property ? `meta[property="${key}"]` : `meta[name="${key}"]`;
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        if (property) element.setAttribute('property', key);
        else element.name = key;
        document.head.appendChild(element);
      }
      element.content = value;
    };
    setMeta('description', description);
    setMeta('og:title', `${title} — Bản Tin Mới`, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
  }, [title, description]);
}

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const matches = query.trim()
    ? articles.filter((article) => `${article.title} ${article.excerpt}`.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : [];
  const [location] = useLocation();
  useEffect(() => { setMenuOpen(false); setSearchOpen(false); setQuery(''); }, [location]);

  return (
    <header className="masthead relative z-20">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="flex h-[46px] items-center justify-between border-b hairline text-[10px] md:text-[11px]">
          <div className="eyebrow flex items-center gap-2 text-[#52606b]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#28754c]" />
            Thứ Tư, 18 tháng 6, 2025
          </div>
          <div className="hidden items-center gap-5 text-[#52606b] md:flex">
            <span className="eyebrow">Tin tức, không nhiễu</span>
            <span className="h-3 w-px bg-[#d6d0c4]" />
            <span className="eyebrow">Ấn bản số 024</span>
          </div>
          <button className="flex items-center gap-2 text-[#183951] transition-colors hover:text-[#b92923]" onClick={() => setSearchOpen(!searchOpen)} aria-label={searchOpen ? 'Đóng tìm kiếm' : 'Mở tìm kiếm'} data-testid="button-toggle-search">
            {searchOpen ? <X size={14} /> : <Search size={14} />} <span className="eyebrow hidden sm:inline">Tìm kiếm</span>
          </button>
        </div>
        <div className="flex min-h-[102px] items-center justify-between py-4 md:min-h-[118px]">
          <Link href="/" className="group flex items-center gap-3" data-testid="link-home-brand">
            <span className="brand-wordmark relative text-[40px] font-bold leading-none text-[#b92923] md:text-[54px]">
              Bản Tin<span className="text-[#17647b]"> Mới</span>
              <span className="absolute -right-2 top-0 h-[8px] w-[8px] rounded-full bg-[#28754c]" />
            </span>
            <span className="hidden border-l border-[#d6d0c4] pl-3 text-[9px] leading-[1.5] text-[#59636a] sm:block">ĐỌC ĐỂ HIỂU<br />THẾ GIỚI QUANH MÌNH</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="hidden text-right text-[11px] leading-relaxed text-[#667078] md:block">Báo chí độc lập.<br />Góc nhìn gần gũi.</span>
            <button className="ml-2 flex h-10 w-10 items-center justify-center border hairline text-[#183951] transition-colors hover:bg-[#eae5da] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Đóng danh mục' : 'Mở danh mục'} data-testid="button-toggle-menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} -mx-5 flex-col border-y hairline bg-[#f7f4ec] px-5 py-3 md:mx-0 md:flex md:flex-row md:items-center md:justify-between md:border-y md:px-0 md:py-0`} aria-label="Danh mục chính">
          <div className="flex flex-col gap-0 md:flex-row md:items-center md:gap-8">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`} className="eyebrow border-b border-[#e8e2d8] py-3 text-[10px] text-[#263b49] transition-colors hover:text-[#b92923] md:border-0 md:py-[15px]" data-testid={`link-nav-${category.slug}`}>{category.name}</Link>
            ))}
          </div>
          <Link href="/category/goc-nhin" className="eyebrow hidden items-center gap-2 py-[15px] text-[10px] text-[#b92923] md:flex" data-testid="link-nav-opinion">Đọc góc nhìn <ArrowRight size={13} /></Link>
        </nav>
        {searchOpen && <div className="absolute left-0 right-0 top-full border-y border-[#d6d0c4] bg-[#f7f4ec] shadow-lg">
          <div className="mx-auto max-w-[1320px] px-5 py-5 md:px-10">
            <label className="eyebrow mb-2 block text-[9px] text-[#65717a]" htmlFor="site-search">Tìm trong Bản Tin Mới</label>
            <input id="site-search" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Thử tìm một chủ đề…" className="w-full border-b border-[#183951] bg-transparent py-2 font-serif text-2xl outline-none placeholder:text-[#aaa49a] md:text-3xl" data-testid="input-search" />
            {query && <div className="mt-3 grid gap-2 md:grid-cols-2">
              {matches.length ? matches.map((article) => <Link key={article.slug} href={`/article/${article.slug}`} className="border-b hairline py-2 text-[14px] story-link" data-testid={`link-search-${article.slug}`}>{article.title}</Link>) : <p className="py-3 text-sm text-[#68737a]">Chưa tìm thấy bài viết phù hợp. Thử một từ khóa khác.</p>}
            </div>}
          </div>
        </div>}
      </div>
    </header>
  );
}

function CategoryTag({ slug }: { slug: string }) {
  const category = categoryFor(slug);
  if (!category) return null;
  const color = category.color === 'red' ? 'text-[#b92923]' : category.color === 'green' ? 'text-[#28754c]' : 'text-[#17647b]';
  return <Link href={`/category/${slug}`} className={`eyebrow inline-block text-[9px] font-medium ${color} hover:underline`} data-testid={`link-category-${slug}`}>{category.name}</Link>;
}

function StoryCard({ article, compact = false, imageOnly = false }: { article: Article; compact?: boolean; imageOnly?: boolean }) {
  return (
    <article className="group">
      {!compact && <Link href={`/article/${article.slug}`} className={`image-frame relative mb-4 block overflow-hidden bg-[#e5ded0] ${article.lead ? 'aspect-[1.58]' : 'aspect-[1.55]'}`} aria-label={article.imageLabel} data-testid={`link-image-${article.slug}`}>
        {article.image ? <img src={article.image} alt={article.imageLabel} className="h-full w-full object-cover" /> : <div className={`absolute inset-0 flex items-center justify-center ${article.category === 'the-gioi' ? 'bg-[#23586a]' : article.category === 'kinh-te' ? 'bg-[#286b60]' : article.category === 'van-hoa' ? 'bg-[#d8b785]' : article.category === 'doi-song' ? 'bg-[#92a884]' : 'bg-[#b98772]'}`}>
          <div className="relative h-full w-full overflow-hidden opacity-80">
            <div className="absolute -right-[4%] top-[18%] h-[80%] w-[58%] rounded-t-[50%] bg-[#f0d9ad]/50" />
            <div className="absolute bottom-0 left-[6%] h-[63%] w-[42%] -skew-x-[12deg] bg-[#173e50]/70" />
            <div className="absolute bottom-0 right-[8%] h-[47%] w-[20%] bg-[#c73d32]/75" />
            <div className="absolute left-[10%] top-[18%] text-[9px] uppercase tracking-[.3em] text-white/75">{article.imageLabel}</div>
          </div>
        </div>}
      </Link>}
      {!imageOnly && <>
        <div className="flex items-center gap-3"><CategoryTag slug={article.category} /><span className="h-px w-5 bg-[#c8c1b5]" /><span className="eyebrow text-[9px] text-[#7c817f]">{article.time.split(',')[0]}</span></div>
        <Link href={`/article/${article.slug}`} className={`headline story-link mt-2 block font-bold ${article.lead ? 'text-[29px] md:text-[38px]' : compact ? 'text-[19px]' : 'text-[21px] md:text-[23px]'}`} data-testid={`link-story-${article.slug}`}>{article.title}</Link>
        {!compact && <p className="mt-2 max-w-2xl text-[13px] leading-[1.7] text-[#616b70]">{article.excerpt}</p>}
        <div className="mt-3 flex items-center gap-2 text-[10px] text-[#758087]"><span>{article.author}</span><span>·</span><span className="flex items-center gap-1"><Clock3 size={11} />{article.read}</span></div>
      </>}
    </article>
  );
}

function NewsTicker() {
  return <div className="border-y border-[#d6d0c4] bg-[#f1ede4]">
    <div className="mx-auto flex max-w-[1320px] items-center gap-4 overflow-hidden px-5 py-[11px] md:px-10">
      <span className="eyebrow shrink-0 bg-[#b92923] px-2 py-1 text-[9px] text-white">ĐANG ĐƯỢC QUAN TÂM</span>
      <Link href="/article/xuat-khau-viet-nam-thang-moi" className="truncate text-[12px] text-[#334751] story-link" data-testid="link-ticker-story">Xuất khẩu Việt Nam mở thêm cửa vào thị trường mới</Link>
      <span className="hidden text-[#a9a294] md:inline">/</span>
      <Link href="/article/mot-thanh-pho-can-lang-nghe" className="hidden truncate text-[12px] text-[#334751] story-link md:block" data-testid="link-ticker-opinion">Một thành phố đáng sống phải biết lắng nghe người đi bộ</Link>
      <span className="ml-auto hidden shrink-0 text-[10px] text-[#758087] md:block">Cập nhật 08:12</span>
    </div>
  </div>;
}

function HomePage() {
  usePageMeta('Tin tức Việt Nam và thế giới hôm nay', 'Bản Tin Mới — những câu chuyện đáng tin cậy, gần gũi về Việt Nam và thế giới.');
  const lead = articles[0];
  const secondary = articles.slice(1, 4);
  return <main className="reveal">
    <NewsTicker />
    <div className="mx-auto max-w-[1320px] px-5 py-8 md:px-10 md:py-11">
      <div className="mb-5 flex items-end justify-between">
        <div><p className="eyebrow mb-2 text-[10px] text-[#28754c]">BẢN TIN BUỔI SÁNG <span className="mx-1 text-[#b92923]">/</span> THỨ TƯ, 18.06.2025</p><h1 className="headline text-[25px] font-semibold text-[#183951] md:text-[32px]">Điều đáng đọc hôm nay.</h1></div>
        <span className="eyebrow hidden text-[9px] text-[#82857f] sm:block">Mỗi ngày, một góc nhìn rộng hơn</span>
      </div>
      <div className="grid gap-8 border-t border-[#183951] pt-6 lg:grid-cols-[1.42fr_.8fr] lg:gap-10">
        <div className="grid gap-4 md:grid-cols-[1.12fr_.88fr] md:gap-7">
          <StoryCard article={lead} imageOnly />
          <div className="flex flex-col justify-between gap-6 border-t border-[#d6d0c4] pt-5 md:border-l md:border-t-0 md:pl-7 md:pt-0">
            <div>
              <p className="eyebrow mb-4 text-[9px] text-[#17647b]">CÂU CHUYỆN TRỌNG TÂM</p>
              <Link href={`/article/${lead.slug}`} className="headline story-link block text-[27px] font-bold leading-[1.13] text-[#183951] md:text-[31px]" data-testid="link-lead-headline">{lead.title}</Link>
              <p className="mt-4 text-[14px] leading-[1.8] text-[#5f696d]">{lead.excerpt}</p>
              <Link href={`/article/${lead.slug}`} className="eyebrow mt-5 inline-flex items-center gap-2 text-[9px] text-[#b92923] transition-transform hover:translate-x-1" data-testid="link-read-lead">Đọc bài viết <ArrowRight size={13} /></Link>
            </div>
            <div className="flex items-center justify-between border-t border-[#d6d0c4] pt-3 text-[10px] text-[#737e82]"><span>Bài viết của <strong className="font-semibold text-[#273f4d]">{lead.author}</strong></span><span className="flex items-center gap-1"><Clock3 size={12} /> {lead.read}</span></div>
          </div>
        </div>
        <aside className="border-t border-[#d6d0c4] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="mb-4 flex items-center justify-between"><h2 className="eyebrow text-[10px] text-[#183951]">MỚI NHẤT</h2><span className="text-[10px] text-[#818580]">03 câu chuyện</span></div>
          <div className="divide-y divide-[#d6d0c4]">
            {secondary.map((article, index) => <div key={article.slug} className="grid grid-cols-[31px_1fr] gap-3 py-4 first:pt-1 last:pb-1">
              <span className="headline text-[23px] text-[#c6bfb2]">0{index + 1}</span>
              <StoryCard article={article} compact />
            </div>)}
          </div>
        </aside>
      </div>
      <section className="mt-11 border-t border-[#183951] pt-5">
        <div className="mb-5 flex items-center justify-between"><div><p className="eyebrow text-[9px] text-[#28754c]">ĐỌC THÊM</p><h2 className="headline mt-1 text-[25px] font-semibold text-[#183951]">Chuyện quanh ta.</h2></div><Link href="/category/doi-song" className="eyebrow flex items-center gap-2 text-[9px] text-[#17647b] hover:text-[#b92923]" data-testid="link-more-stories">Tất cả bài viết <ArrowRight size={13} /></Link></div>
        <div className="grid gap-8 border-t border-[#d6d0c4] pt-5 md:grid-cols-3">
          {articles.slice(3, 6).map((article) => <StoryCard key={article.slug} article={article} />)}
        </div>
      </section>
    </div>
  </main>;
}

function CategoryPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const category = categoryFor(slug);
  const stories = articles.filter((article) => article.category === slug);
  usePageMeta(category ? `${category.name} — Tin mới nhất` : 'Không tìm thấy danh mục', category ? `Tin tức, phân tích và câu chuyện mới nhất trong mục ${category.name}.` : 'Danh mục bạn đang tìm không tồn tại.');
  if (!category) return <NotFound />;
  return <main className="reveal mx-auto min-h-[65vh] max-w-[1320px] px-5 py-9 md:px-10 md:py-14">
    <div className="eyebrow mb-3 flex items-center gap-2 text-[10px] text-[#68747a]"><Link href="/" data-testid="link-category-home">Trang chủ</Link><span>/</span><span className="text-[#b92923]">{category.name}</span></div>
    <div className="flex flex-col justify-between gap-5 border-y border-[#183951] py-6 md:flex-row md:items-end md:py-9">
      <div><p className="eyebrow mb-2 text-[10px] text-[#28754c]">CHUYÊN MỤC</p><h1 className="headline text-[48px] font-bold text-[#183951] md:text-[70px]">{category.name}<span className="text-[#b92923]">.</span></h1></div>
      <p className="max-w-sm text-[13px] leading-[1.75] text-[#647075]">Những tin tức, phân tích và câu chuyện mới nhất được biên tập kỹ lưỡng để bạn theo dõi điều đang diễn ra.</p>
    </div>
    <div className="grid gap-x-8 gap-y-9 pt-8 md:grid-cols-2 lg:grid-cols-3">
      {stories.map((article) => <StoryCard key={article.slug} article={article} />)}
    </div>
    {!stories.length && <div className="py-20 text-center"><p className="headline text-3xl text-[#183951]">Chúng tôi đang chuẩn bị câu chuyện mới.</p><p className="mt-3 text-sm text-[#647075]">Hãy quay lại trong ít phút hoặc khám phá các chuyên mục khác.</p></div>}
    <div className="mt-12 flex flex-wrap gap-2 border-t border-[#d6d0c4] pt-5">{categories.filter((item) => item.slug !== slug).map((item) => <Link key={item.slug} href={`/category/${item.slug}`} className="eyebrow border border-[#d6d0c4] px-3 py-2 text-[9px] text-[#36505d] transition-colors hover:border-[#17647b] hover:text-[#17647b]" data-testid={`link-related-${item.slug}`}>{item.name}</Link>)}</div>
  </main>;
}

function ArticlePage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const article = articleFor(slug);
  usePageMeta(article?.title ?? 'Không tìm thấy bài viết', article?.excerpt ?? 'Bài viết bạn đang tìm không tồn tại.');
  if (!article) return <NotFound />;
  const related = articles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 2);
  return <main className="reveal">
    <article className="mx-auto max-w-[1320px] px-5 py-7 md:px-10 md:py-10">
      <div className="eyebrow mb-6 flex items-center gap-2 text-[9px] text-[#778084]"><Link href="/" data-testid="link-article-home">Trang chủ</Link><span>/</span><Link href={`/category/${article.category}`} className="text-[#17647b]" data-testid="link-article-category">{categoryFor(article.category)?.name}</Link><span>/</span><span>Bài viết</span></div>
      <div className="mx-auto max-w-[980px]">
        <CategoryTag slug={article.category} />
        <h1 className="headline mt-3 max-w-[960px] text-[37px] font-bold text-[#183951] md:text-[62px]">{article.title}</h1>
        <p className="mt-5 max-w-[780px] text-[17px] leading-[1.7] text-[#5e6b70] md:text-[20px]">{article.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-[#d6d0c4] py-4">
          <div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17647b] font-serif text-sm text-white">{article.author.split(' ').map((part) => part[0]).slice(-2).join('')}</div><div><p className="text-[12px] font-semibold text-[#283e4a]">{article.author}</p><p className="mt-1 text-[10px] text-[#778084]">Phóng viên Bản Tin Mới · {article.time}</p></div></div>
          <div className="eyebrow flex items-center gap-2 text-[9px] text-[#68747a]"><Clock3 size={12} /> {article.read}</div>
        </div>
        <figure className="image-frame relative mt-7 aspect-[1.9] overflow-hidden bg-[#e5ded0]">
          {article.image ? <img src={article.image} alt={article.imageLabel} className="h-full w-full object-cover" /> : <div className={`absolute inset-0 flex items-center justify-center ${article.category === 'the-gioi' ? 'bg-[#23586a]' : article.category === 'kinh-te' ? 'bg-[#286b60]' : article.category === 'van-hoa' ? 'bg-[#d8b785]' : article.category === 'doi-song' ? 'bg-[#92a884]' : 'bg-[#b98772]'}`}><div className="absolute -right-[4%] top-[18%] h-[90%] w-[52%] rounded-t-[50%] bg-[#f0d9ad]/50" /><div className="absolute bottom-0 left-[12%] h-[66%] w-[42%] -skew-x-[12deg] bg-[#173e50]/70" /><div className="absolute bottom-0 right-[12%] h-[42%] w-[19%] bg-[#c73d32]/75" /></div>}
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#122632]/80 to-transparent px-5 pb-4 pt-10 text-[10px] text-white/90">{article.imageLabel} · Ảnh: Bản Tin Mới</figcaption>
        </figure>
        <div className="mx-auto grid max-w-[860px] gap-9 pt-8 md:grid-cols-[minmax(0,1fr)_145px] md:gap-12">
          <div id="article-body" className="article-copy space-y-5 text-[19px] leading-[1.85] text-[#2f414a]">
            <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-[64px] first-letter:leading-[.8] first-letter:text-[#b92923]">{article.body[0]}</p>
            {article.body.slice(1).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            <blockquote className="my-8 border-l-[3px] border-[#28754c] py-1 pl-5 text-[22px] italic leading-[1.55] text-[#17647b]">“Thành phố tốt hơn bắt đầu từ những điều gần gũi nhất với người dân.”</blockquote>
            <p>{article.body[0]}</p>
            <div className="border-t border-[#d6d0c4] pt-5 font-sans text-[12px] text-[#758087]">Từ khóa: <span className="text-[#17647b]">{categoryFor(article.category)?.name}</span>, Việt Nam, phát triển bền vững</div>
          </div>
          <aside className="hidden md:block">
            <div className="sticky top-6 border-t-2 border-[#183951] pt-3">
              <p className="eyebrow mb-4 text-[9px] text-[#68747a]">TRONG BÀI NÀY</p>
              <a href="#article-body" className="eyebrow text-[9px] leading-[1.7] text-[#17647b]">Một góc nhìn gần hơn <ArrowDownRight size={12} className="inline" /></a>
              <button onClick={() => window.print()} className="eyebrow mt-8 flex items-center gap-2 border-t border-[#d6d0c4] pt-3 text-[9px] text-[#68747a] hover:text-[#b92923]" data-testid="button-print-article"><Bookmark size={12} /> Lưu / In bài</button>
            </div>
          </aside>
        </div>
      </div>
    </article>
    <section className="border-t border-[#d6d0c4] bg-[#f1ede4]">
      <div className="mx-auto max-w-[1050px] px-5 py-9 md:px-10">
        <div className="mb-6 flex items-center justify-between"><h2 className="headline text-[25px] font-bold text-[#183951]">Đọc tiếp</h2><Link href={`/category/${article.category}`} className="eyebrow text-[9px] text-[#17647b]" data-testid="link-article-more">Xem chuyên mục <ArrowRight size={12} className="inline" /></Link></div>
        <div className="grid gap-7 border-t border-[#d6d0c4] pt-5 md:grid-cols-2">{(related.length ? related : articles.filter((item) => item.slug !== article.slug).slice(0, 2)).map((item) => <StoryCard key={item.slug} article={item} compact />)}</div>
      </div>
    </section>
  </main>;
}

function NotFound() {
  usePageMeta('Không tìm thấy trang', 'Trang bạn đang tìm không tồn tại trên Bản Tin Mới.');
  return <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
    <p className="eyebrow text-[10px] text-[#b92923]">404 / LẠC MẤT TRANG</p>
    <h1 className="headline mt-3 text-5xl font-bold text-[#183951]">Chuyện này<br />chưa được kể.</h1>
    <p className="mt-4 max-w-md text-sm leading-relaxed text-[#657179]">Có thể đường dẫn đã cũ hoặc bài viết được chuyển đi. Trở về trang đầu để tiếp tục khám phá.</p>
    <Link href="/" className="eyebrow mt-6 inline-flex items-center gap-2 bg-[#b92923] px-4 py-3 text-[10px] text-white transition-colors hover:bg-[#92241f]" data-testid="link-back-home"><ArrowLeft size={13} /> Về trang chủ</Link>
  </main>;
}

function Footer() {
  return <footer className="bg-[#183951] text-[#f3efe5]">
    <div className="mx-auto grid max-w-[1320px] gap-8 px-5 py-9 md:grid-cols-[1.2fr_1fr] md:px-10 md:py-12">
      <div><Link href="/" className="brand-wordmark text-[32px] font-bold tracking-tight text-[#f3efe5]" data-testid="link-footer-brand">Bản Tin<span className="text-[#77b39a]"> Mới</span></Link><p className="mt-3 max-w-sm text-[12px] leading-[1.7] text-[#b8c5c6]">Tin tức có chọn lọc. Góc nhìn có chiều sâu. Một bản tin mỗi ngày để hiểu rõ hơn thế giới quanh mình.</p></div>
      <div className="flex flex-wrap content-start gap-x-6 gap-y-3 md:justify-end">{categories.map((category) => <Link key={category.slug} href={`/category/${category.slug}`} className="eyebrow text-[9px] text-[#d5ddd8] transition-colors hover:text-white" data-testid={`link-footer-${category.slug}`}>{category.name}</Link>)}</div>
    </div>
    <div className="border-t border-white/15"><div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-2 px-5 py-4 text-[10px] text-[#a9b8ba] sm:flex-row md:px-10"><span>© 2025 Bản Tin Mới · Đọc để hiểu thế giới quanh mình.</span><span className="eyebrow">Hà Nội · Việt Nam</span></div></div>
  </footer>;
}

function App() {
  return <div className="site-shell">
    <Header />
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/category/:slug" component={CategoryPage} />
      <Route path="/article/:slug" component={ArticlePage} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>;
}

export default App;