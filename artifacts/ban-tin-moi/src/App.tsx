import { useEffect, useRef, useState } from 'react';
import { Link, Route, Switch, useLocation, useParams } from 'wouter';
import { ArrowDownRight, ArrowLeft, ArrowRight, Bookmark, ChevronDown, Clock3, Menu, Search, X, Tv, MapPin, Phone, Mail, Play, ChevronLeft, ChevronRight, Share2, Copy, Check, MessageSquare, ThumbsUp, Printer } from 'lucide-react';
import { articleFor, articles, categories, categoryFor, type Article } from './data';
import logoImg from './assets/logo.png';
import vnEuBanner from './assets/vn-eu-banner.jpg';

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} — Truyền Hình Công Thương`;
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
    setMeta('og:title', `${title} — Truyền Hình Công Thương`, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
  }, [title, description]);
}

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const matches = query.trim()
    ? articles.filter((article) => `${article.title} ${article.excerpt}`.toLowerCase().includes(query.toLowerCase())).slice(0, 4)
    : [];
  const [location] = useLocation();
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setQuery('');
    setHoveredCategory(null);
  }, [location]);

  const handleCategoryMouseEnter = (slug: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredCategory(slug);
  };

  const handleCategoryMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 200);
  };

  const handleMenuMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const handleMenuMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 150);
  };

  const activeCat = categories.find((c) => c.slug === hoveredCategory);
  const featuredArticle = activeCat?.featuredSlug
    ? articleFor(activeCat.featuredSlug)
    : articles.find((a) => a.category === activeCat?.slug);

  return (
    <header className="masthead relative z-20">
      <div className="mx-auto max-w-[1540px] px-5 md:px-10">
        {/* <div className="flex h-[46px] items-center justify-between border-b hairline text-[10px] md:text-[11px]">
          <div className="eyebrow flex items-center gap-2 text-[#52606b]">
            <span className="inline-block h-2 w-2 rounded-full bg-[#28754c]" />
            Thứ Tư, 18 tháng 6, 2025
          </div>
          <div className="hidden items-center gap-5 text-[#52606b] md:flex">
            <span className="eyebrow">Tin tức, không nhiễu</span>
            <span className="h-3 w-px bg-[#d6d0c4]" />
            <span className="eyebrow">Ấn bản số 024</span>
          </div>
        </div> */}
        <div className="flex min-h-[96px] items-center justify-between py-3">
          <Link href="/" className="group flex items-center gap-3 sm:gap-4.5" data-testid="link-home-brand">
            <img
              src={logoImg}
              alt="Truyền hình Công Thương"
              className="h-14 sm:h-16 md:h-18 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="text-[20px] sm:text-[26px] md:text-[34px] font-black leading-none text-[#d60000] uppercase tracking-normal font-serif drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
                TRUYỀN HÌNH CÔNG THƯƠNG
              </span>
              <span className="text-[8.5px] sm:text-[10.5px] md:text-[12px] font-bold tracking-wider text-[#0852b5] uppercase mt-1 leading-tight font-serif">
                TRUNG TÂM TRUYỀN THÔNG - TRUYỀN HÌNH CÔNG THƯƠNG
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-2">

            <button className="ml-2 flex h-10 w-10 items-center justify-center border hairline text-[#183951] transition-colors hover:bg-[#eae5da] md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Đóng danh mục' : 'Mở danh mục'} data-testid="button-toggle-menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <nav className={`${menuOpen ? 'flex' : 'hidden'} -mx-5 flex-col border-y hairline bg-[#f7f4ec] px-5 py-3 md:mx-0 md:flex md:flex-row md:items-center md:justify-between md:border-y md:px-0 md:py-0`} aria-label="Danh mục chính">
          <div className="flex flex-col gap-0 md:flex-row md:items-center md:gap-7">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="relative"
                onMouseEnter={() => handleCategoryMouseEnter(category.slug)}
                onMouseLeave={handleCategoryMouseLeave}
              >
                <div className="flex items-center justify-between border-b border-[#e8e2d8] md:border-0">
                  <Link
                    href={`/category/${category.slug}`}
                    className={`eyebrow flex items-center gap-1.5 py-3 text-[10px] transition-colors md:py-[15px] ${hoveredCategory === category.slug
                        ? 'text-[#b92923]'
                        : 'text-[#263b49] hover:text-[#b92923]'
                      }`}
                    data-testid={`link-nav-${category.slug}`}
                  >
                    <span>{category.name}</span>
                    <ChevronDown
                      size={10}
                      className={`hidden md:inline transition-transform duration-200 ${hoveredCategory === category.slug ? 'rotate-180 text-[#b92923]' : 'opacity-50'
                        }`}
                    />
                  </Link>
                  {/* Mobile toggle button */}
                  <button
                    className="p-2 text-[#68737a] md:hidden"
                    onClick={() => setMobileExpanded(mobileExpanded === category.slug ? null : category.slug)}
                    aria-label="Xem chuyên mục con"
                  >
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileExpanded === category.slug ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Mobile subcategories accordion */}
                {mobileExpanded === category.slug && (
                  <div className="bg-[#eee8dc] px-3 py-2.5 space-y-2.5 md:hidden">
                    {category.subgroups.map((grp, gIdx) => (
                      <div key={gIdx} className="space-y-1">
                        <span className="text-[9px] font-bold text-[#758085] uppercase tracking-wide">{grp.groupTitle}</span>
                        <div className="grid grid-cols-2 gap-1 pl-2">
                          {grp.items.map((sub, sIdx) => (
                            <Link key={sIdx} href={`/category/${category.slug}`} className="text-[12px] text-[#263b49] py-1 hover:text-[#b92923]">
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <button
            className="eyebrow flex items-center gap-2 py-3 text-[10px] text-[#183951] transition-colors hover:text-[#b92923] md:py-[15px] cursor-pointer"
            onClick={() => {
              setHoveredCategory(null);
              setSearchOpen(!searchOpen);
            }}
            aria-label={searchOpen ? 'Đóng tìm kiếm' : 'Mở tìm kiếm'}
            data-testid="button-toggle-search"
          >
            {searchOpen ? <X size={14} /> : <Search size={14} />}
            <span>Tìm kiếm</span>
          </button>
        </nav>

        {/* Desktop Mega Menu Dropdown (New York Times style with Featured Article) */}
        {activeCat && !menuOpen && (
          <div
            className="absolute left-0 right-0 top-full z-40 border-b border-[#d6d0c4] bg-[#f7f4ec] transition-all duration-200"
            onMouseEnter={handleMenuMouseEnter}
            onMouseLeave={handleMenuMouseLeave}
          >
            <div className="mx-auto max-w-[1540px] px-5 md:px-10 py-7 md:py-8">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
                {/* Column 1: Category title, description & view all link */}
                <div className="md:col-span-3 border-b md:border-b-0 md:border-r border-[#e8e2d8] pr-0 md:pr-6 pb-4 md:pb-0">
                  <Link
                    href={`/category/${activeCat.slug}`}
                    className="group inline-block"
                  >
                    <h3 className="font-serif text-2xl md:text-[28px] font-bold text-[#183951] group-hover:text-[#b92923] transition-colors leading-tight">
                      {activeCat.name}
                    </h3>
                  </Link>
                  <p className="mt-2.5 text-[12px] text-[#636f75] leading-relaxed">
                    {activeCat.description}
                  </p>
                  <Link
                    href={`/category/${activeCat.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#b92923] hover:underline uppercase tracking-wide"
                  >
                    Toàn bộ chuyên mục <ArrowRight size={13} />
                  </Link>
                </div>

                {/* Column 2 & 3: Subgroups */}
                <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {activeCat.subgroups.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-2.5">
                      <h4 className="eyebrow text-[9.5px] font-bold text-[#869299] tracking-wider border-b border-[#ece7de] pb-1.5">
                        {group.groupTitle}
                      </h4>
                      <ul className="space-y-2">
                        {group.items.map((sub, sIdx) => (
                          <li key={sIdx}>
                            <Link
                              href={`/category/${activeCat.slug}`}
                              className="text-[13px] text-[#243744] hover:text-[#b92923] hover:translate-x-1 transition-all inline-block font-medium"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Column 4: Featured Story */}
                <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-[#e8e2d8] pl-0 md:pl-6 pt-4 md:pt-0">
                  <h4 className="eyebrow text-[9.5px] font-bold text-[#869299] tracking-wider mb-3">
                    TIÊU ĐIỂM NỔI BẬT
                  </h4>
                  {featuredArticle ? (
                    <Link
                      href={`/article/${featuredArticle.slug}`}
                      className="group block space-y-2.5"
                    >
                      {featuredArticle.image && (
                        <div className="aspect-[1.65] overflow-hidden rounded bg-[#e8e2d8]">
                          <img
                            src={featuredArticle.image}
                            alt={featuredArticle.imageLabel}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <h5 className="font-serif text-[14px] font-bold text-[#183951] group-hover:text-[#b92923] transition-colors leading-snug line-clamp-2">
                        {featuredArticle.title}
                      </h5>
                      <p className="text-[11.5px] text-[#6b777d] line-clamp-2 leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center gap-1.5 text-[10px] text-[#869299]">
                        <Clock3 size={11} />
                        <span>{featuredArticle.read}</span>
                      </div>
                    </Link>
                  ) : (
                    <div className="py-4 text-xs text-[#869299]">
                      Đang cập nhật các bài viết mới...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {searchOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-y border-[#d6d0c4] bg-[#f7f4ec] shadow-xl">
            <div className="mx-auto max-w-[1540px] px-5 py-5 md:px-10">
              <label className="eyebrow mb-2 block text-[9px] text-[#65717a]" htmlFor="site-search">Tìm trong Bản Tin Mới</label>
              <input id="site-search" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Thử tìm một chủ đề…" className="w-full border-b border-[#183951] bg-transparent py-2 font-serif text-2xl outline-none placeholder:text-[#aaa49a] md:text-3xl" data-testid="input-search" />
              {query && (
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {matches.length ? matches.map((article) => (
                    <Link key={article.slug} href={`/article/${article.slug}`} className="border-b hairline py-2 text-[14px] story-link" data-testid={`link-search-${article.slug}`}>
                      {article.title}
                    </Link>
                  )) : <p className="py-3 text-sm text-[#68737a]">Chưa tìm thấy bài viết phù hợp. Thử một từ khóa khác.</p>}
                </div>
              )}
            </div>
          </div>
        )}
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
        <div className="flex flex-wrap items-center gap-2 text-[9px]">
          <CategoryTag slug={article.category} />
          <span className="h-px w-4 bg-[#c8c1b5]" />
          <span className="eyebrow text-[#7c817f]">{article.time.split(',')[0]}</span>
          <span className="text-[#a8a297]">·</span>
          <span className="font-medium text-[#55636a]">{article.author}</span>
        </div>
        <Link href={`/article/${article.slug}`} className={`headline story-link mt-2 block font-bold ${article.lead ? 'text-[29px] md:text-[38px]' : compact ? 'text-[19px]' : 'text-[21px] md:text-[23px]'}`} data-testid={`link-story-${article.slug}`}>{article.title}</Link>
        {!compact && <p className="mt-2 max-w-2xl text-[13px] leading-[1.7] text-[#616b70]">{article.excerpt}</p>}
      </>}
    </article>
  );
}

function NewsTicker() {
  return <div className="border-y border-[#d6d0c4] bg-[#f1ede4]">
    <div className="mx-auto flex max-w-[1540px] items-center gap-4 overflow-hidden px-5 py-[11px] md:px-10">
      <span className="eyebrow shrink-0 bg-[#b92923] px-2 py-1 text-[9px] text-white">ĐANG ĐƯỢC QUAN TÂM</span>
      <Link href="/article/xuat-khau-viet-nam-thang-moi" className="truncate text-[12px] text-[#334751] story-link" data-testid="link-ticker-story">Xuất khẩu Việt Nam mở thêm cửa vào thị trường mới</Link>
      <span className="hidden text-[#a9a294] md:inline">/</span>
      <Link href="/article/mot-thanh-pho-can-lang-nghe" className="hidden truncate text-[12px] text-[#334751] story-link md:block" data-testid="link-ticker-opinion">Một thành phố đáng sống phải biết lắng nghe người đi bộ</Link>
      {/* <span className="ml-auto hidden shrink-0 text-[10px] text-[#758087] md:block">Cập nhật 08:12</span> */}
    </div>
  </div>;
}

function CategoryShowcaseBlock({
  categorySlug,
  accentColor = '#b92923',
}: {
  categorySlug: string;
  accentColor?: string;
}) {
  const category = categoryFor(categorySlug);
  if (!category) return null;

  const categoryArticles = articles.filter((a) => a.category === categorySlug);
  if (!categoryArticles.length) return null;

  const mainStory = categoryArticles[0];
  const sideStories = categoryArticles.slice(1, 4);

  return (
    <section className="mt-14 border-t-2 border-[#183951] pt-6">
      {/* Category Header Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#d6d0c4] pb-3">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Link
            href={`/category/${category.slug}`}
            className="group inline-flex items-center gap-2.5"
            data-testid={`link-showcase-title-${category.slug}`}
          >
            <span
              className="h-5 w-1.5 rounded-sm"
              style={{ backgroundColor: accentColor }}
            />
            <h2 className="font-serif text-[22px] sm:text-[25px] font-bold text-[#183951] uppercase tracking-normal group-hover:text-[#b92923] transition-colors leading-none">
              {category.name}
            </h2>
          </Link>

          {/* Subcategory quick tags */}
          {category.subgroups?.[0]?.items && (
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-[#d6d0c4]">
              {category.subgroups[0].items.slice(0, 4).map((sub, sIdx) => (
                <Link
                  key={sIdx}
                  href={`/category/${category.slug}`}
                  className="text-[11.5px] font-medium text-[#647178] hover:text-[#b92923] hover:underline transition-colors"
                >
                  {sub.name}
                  {sIdx < Math.min(3, category.subgroups[0].items.length - 1) && (
                    <span className="ml-2 text-[#ccc]">·</span>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href={`/category/${category.slug}`}
          className="eyebrow flex items-center gap-1.5 text-[10px] text-[#17647b] hover:text-[#b92923] font-semibold transition-colors"
          data-testid={`link-showcase-more-${category.slug}`}
        >
          <span>Xem tất cả</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* 1 Lead Article + 3 Side Articles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Featured Article (7 cols) */}
        <div className="lg:col-span-7 space-y-3.5">
          <Link
            href={`/article/${mainStory.slug}`}
            className="image-frame relative block aspect-[1.65] overflow-hidden rounded bg-[#e5ded0] group"
            data-testid={`link-showcase-lead-img-${mainStory.slug}`}
          >
            {mainStory.image ? (
              <img
                src={mainStory.image}
                alt={mainStory.imageLabel}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[#173e50]/80">
                <div className="relative h-full w-full overflow-hidden opacity-85">
                  <div className="absolute -right-[4%] top-[18%] h-[80%] w-[58%] rounded-t-[50%] bg-[#f0d9ad]/40" />
                  <div className="absolute bottom-0 left-[6%] h-[63%] w-[42%] -skew-x-[12deg] bg-[#173e50]/90" />
                  <div className="absolute bottom-0 right-[8%] h-[47%] w-[20%] bg-[#c73d32]/75" />
                  <div className="absolute left-[8%] top-[18%] text-[10px] uppercase tracking-[.25em] text-white/80">
                    {mainStory.imageLabel}
                  </div>
                </div>
              </div>
            )}
          </Link>

          <div>
            <div className="flex items-center gap-2 text-[10px] text-[#758087] mb-1.5">
              <span className="font-semibold text-[#b92923] uppercase tracking-wider">{category.name}</span>
              <span>·</span>
              <span>{mainStory.time.split(',')[0]}</span>
            </div>
            <Link
              href={`/article/${mainStory.slug}`}
              className="headline story-link block font-serif text-[22px] sm:text-[25px] font-bold text-[#183951] leading-snug hover:text-[#b92923]"
              data-testid={`link-showcase-lead-title-${mainStory.slug}`}
            >
              {mainStory.title}
            </Link>
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#5f696d] line-clamp-3">
              {mainStory.excerpt}
            </p>
            <div className="mt-3 flex items-center gap-2 text-[10.5px] text-[#758087]">
              <span className="font-medium text-[#273f4d]">{mainStory.author}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock3 size={11} /> {mainStory.read}
              </span>
            </div>
          </div>
        </div>

        {/* Side Articles (5 cols) */}
        <div className="lg:col-span-5 divide-y divide-[#e2ded6]">
          {sideStories.map((story) => (
            <article key={story.slug} className="py-4 first:pt-0 last:pb-0 group">
              <div className="flex gap-4 items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[9.5px] text-[#758087] mb-1">
                    <span>{story.time.split(',')[0]}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock3 size={10} /> {story.read}
                    </span>
                  </div>
                  <Link
                    href={`/article/${story.slug}`}
                    className="headline story-link block font-serif text-[15px] sm:text-[16px] font-bold text-[#183951] leading-snug line-clamp-2 hover:text-[#b92923]"
                    data-testid={`link-showcase-side-title-${story.slug}`}
                  >
                    {story.title}
                  </Link>
                  <p className="mt-1.5 text-[12px] text-[#6b777d] line-clamp-2 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
                <Link
                  href={`/article/${story.slug}`}
                  className="w-[100px] h-[72px] shrink-0 rounded overflow-hidden bg-[#e5ded0] relative group block"
                  data-testid={`link-showcase-side-img-${story.slug}`}
                >
                  {story.image ? (
                    <img
                      src={story.image}
                      alt={story.imageLabel}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="h-full w-full bg-[#27485e]/80 flex items-center justify-center p-2 text-center text-[8px] text-white/80 uppercase tracking-wider">
                      {story.imageLabel}
                    </div>
                  )}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const FEATURED_CATEGORY_SLUGS = [
  'cong-nghiep',
  'thuong-mai',
  'hoi-nhap',
  'khoa-hoc-cong-nghe',
  'doanh-nghiep',
  'thuong-hieu',
];

const TRENDING_STORIES = [
  {
    title: 'Hà Nội trên hành trình xanh: khi những dòng sông được gọi tên',
    author: 'Ngọc Hà',
    slug: 'ha-noi-tren-hanh-trinh-xanh',
  },
  {
    title: 'Quy hoạch Điện VIII: Khơi thông nguồn lực cho chuyển dịch năng lượng xanh',
    author: 'Trần Tuấn',
    slug: 'quy-hoach-dien-viii-chuyen-dich-xanh',
  },
  {
    title: 'Xuất khẩu Việt Nam mở thêm cửa vào thị trường mới',
    author: 'Minh Quân',
    slug: 'xuat-khau-viet-nam-thang-moi',
  },
  {
    title: 'Ứng dụng AI và IoT trong nhà máy thông minh: Bước chuyển của công nghiệp Việt',
    author: 'Đức Huy',
    slug: 'tri-tue-nhan-tao-trong-san-xuat',
  },
  {
    title: 'Thương hiệu quốc gia Việt Nam: Hành trình vươn tầm các thị trường khó tính',
    author: 'Khánh Linh',
    slug: 'thuong-hieu-quoc-gia-vuon-tam-toan-cau',
  },
];

function CategoryGridCard({ categorySlug }: { categorySlug: string }) {
  const category = categoryFor(categorySlug);
  if (!category) return null;

  const categoryArticles = articles.filter((a) => a.category === categorySlug);
  if (!categoryArticles.length) return null;

  const mainStory =
    (category.featuredSlug ? categoryArticles.find((a) => a.slug === category.featuredSlug) : null) ||
    categoryArticles[0];

  const subStories = categoryArticles.filter((a) => a.slug !== mainStory.slug).slice(0, 2);

  return (
    <div className="flex flex-col">
      {/* Category Tag Header (Solid badge matching reference image & theme) */}
      <div>
        <Link
          href={`/category/${category.slug}`}
          className="inline-block bg-[#b92923] px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white transition-colors hover:bg-[#183951]"
          data-testid={`category-badge-${category.slug}`}
        >
          {category.name}
        </Link>
      </div>

      {/* Main Story: Large Featured Image + Bold Headline */}
      <div className="group">
        <Link
          href={`/article/${mainStory.slug}`}
          className="image-frame relative block aspect-[16/10] overflow-hidden bg-[#e5ded0]"
          data-testid={`category-main-img-${mainStory.slug}`}
        >
          {mainStory.image ? (
            <img
              src={mainStory.image}
              alt={mainStory.imageLabel}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#173e50]/85">
              <div className="relative h-full w-full overflow-hidden opacity-85">
                <div className="absolute -right-[4%] top-[18%] h-[80%] w-[58%] rounded-t-[50%] bg-[#f0d9ad]/40" />
                <div className="absolute bottom-0 left-[6%] h-[63%] w-[42%] -skew-x-[12deg] bg-[#173e50]/90" />
                <div className="absolute bottom-0 right-[8%] h-[47%] w-[20%] bg-[#c73d32]/75" />
                <div className="absolute left-[8%] top-[18%] text-[9px] uppercase tracking-[.2em] text-white/80">
                  {mainStory.imageLabel}
                </div>
              </div>
            </div>
          )}
        </Link>

        <Link
          href={`/article/${mainStory.slug}`}
          className="headline story-link mt-3.5 block font-serif text-[17px] font-bold leading-[1.3] text-[#183951] transition-colors hover:text-[#b92923] md:text-[18px]"
          data-testid={`category-main-title-${mainStory.slug}`}
        >
          {mainStory.title}
        </Link>
      </div>

      {/* Sub Stories (Separated by horizontal lines, pure text headlines like reference image) */}
      {subStories.length > 0 && (
        <div className="mt-3.5 divide-y divide-[#d6d0c4] border-t border-[#d6d0c4]">
          {subStories.map((story) => (
            <div key={story.slug} className="py-3.5 first:pt-3.5 last:pb-0">
              <Link
                href={`/article/${story.slug}`}
                className="headline story-link block font-serif text-[14px] font-medium leading-[1.35] text-[#243744] transition-colors hover:text-[#b92923] md:text-[14.5px]"
                data-testid={`category-sub-title-${story.slug}`}
              >
                {story.title}
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const MOCK_VIDEOS = [
  {
    id: 1,
    title: 'Bản tin Thời sự Công Thương: Điểm nóng thị trường năng lượng & xuất khẩu',
    duration: '18:45',
    category: 'THỜI SỰ',
    time: 'Hôm nay',
    views: '3.8k lượt xem',
    image: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80',
    slug: 'thoi-su-cong-thuong-18h30',
  },
  {
    id: 2,
    title: 'Toàn cảnh dự án Đường dây 500kV mạch 3: Kỳ tích thi công thần tốc',
    duration: '08:20',
    category: 'TIÊU ĐIỂM',
    time: 'Hôm qua',
    views: '5.2k lượt xem',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    slug: 'toan-canh-500kv-mach-3',
  },
  {
    id: 3,
    title: 'Phóng sự: Nông sản Việt chinh phục các thị trường khó tính EU và Hoa Kỳ',
    duration: '06:15',
    category: 'PHÓNG SỰ',
    time: '2 ngày trước',
    views: '2.1k lượt xem',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=80',
    slug: 'nong-san-viet-xuat-khau',
  },
  {
    id: 4,
    title: 'Tọa đàm: Doanh nghiệp trước làn sóng chuyển đổi số và ứng dụng AI',
    duration: '12:30',
    category: 'TỌA ĐÀM',
    time: '3 ngày trước',
    views: '1.9k lượt xem',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    slug: 'toa-dam-chuyen-doi-so',
  },
  {
    id: 5,
    title: 'Ghé thăm làng nghề dệt lụa trăm năm: Giữ lửa nghề người thợ Việt',
    duration: '05:40',
    category: 'VĂN HÓA',
    time: '4 ngày trước',
    views: '4.5k lượt xem',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    slug: 'lang-nghe-nguoi-tho-viet',
  },
  {
    id: 6,
    title: 'Xu hướng tiêu dùng xanh: Lựa chọn bền vững cho tương lai',
    duration: '04:50',
    category: 'XU HƯỚNG',
    time: '5 ngày trước',
    views: '1.4k lượt xem',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    slug: 'tieu-dung-xanh-ben-vung',
  },
];

function VideoSliderSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const step = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: dir === 'left' ? -step : step,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="mt-12 border-t-2 border-[#183951] pt-6" data-testid="section-video-slider">
      {/* Header bar */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="headline text-[25px] font-semibold text-[#183951]">
          Video
        </h2>
      </div>

      {/* Slider Container with Arrows on 2 Sides */}
      <div className="relative">
        {/* Nút lùi bên trái */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute -left-3 md:-left-5 top-[38%] -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#d6d0c4] bg-[#f7f4ec]/95 text-[#183951] shadow-lg transition-all hover:border-[#b92923] hover:bg-[#b92923] hover:text-white hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Video trước"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Nút tiến bên phải */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute -right-3 md:-right-5 top-[38%] -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#d6d0c4] bg-[#f7f4ec]/95 text-[#183951] shadow-lg transition-all hover:border-[#b92923] hover:bg-[#b92923] hover:text-white hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Video tiếp theo"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide List */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {MOCK_VIDEOS.map((video) => (
            <Link
              key={video.id}
              href={`/article/${video.slug}`}
              className="group flex w-[280px] shrink-0 flex-col sm:w-[320px] md:w-[340px] block cursor-pointer"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-[16/10] overflow-hidden rounded bg-[#183951]">
                <img
                  src={video.image}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b92923]/90 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#b92923]">
                    <Play size={20} className="ml-0.5 fill-current" />
                  </span>
                </div>

                {/* Duration badge */}
                <span className="absolute bottom-2.5 right-2.5 rounded bg-black/80 px-2 py-0.5 text-[10px] font-semibold text-white">
                  {video.duration}
                </span>
              </div>

              {/* Title & Meta */}
              <div className="mt-3 flex flex-col">
                <div className="flex items-center gap-2 text-[9.5px]">
                  <span className="font-bold text-[#b92923]">{video.category}</span>
                  <span className="text-[#a8a297]">·</span>
                  <span className="text-[#758087]">{video.time}</span>
                  <span className="text-[#a8a297]">·</span>
                  <span className="text-[#758087]">{video.views}</span>
                </div>
                <h3 className="headline story-link mt-1.5 font-serif text-[15px] font-bold leading-snug text-[#183951] group-hover:text-[#b92923] transition-colors line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  usePageMeta('Tin tức Việt Nam và thế giới hôm nay', 'Bản Tin Mới — những câu chuyện đáng tin cậy, gần gũi về Việt Nam và thế giới.');
  const lead = articles[0];
  const secondary = articles.slice(1, 5);
  return <main className="reveal">
    <NewsTicker />
    <div className="mx-auto max-w-[1540px] px-5 py-8 md:px-10 md:py-11">
      <div className="mb-5 flex items-end justify-between">
        <div><p className="eyebrow mb-2 text-[10px] text-[#28754c]">BẢN TIN BUỔI SÁNG <span className="mx-1 text-[#b92923]">/</span> THỨ TƯ, 18.06.2025</p><h1 className="headline text-[25px] font-semibold text-[#183951] md:text-[32px]">Bài viết nổi bật trong ngày.</h1></div>

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
            <div className="flex items-center justify-between border-t border-[#d6d0c4] pt-3 text-[10px] text-[#737e82]"><span>Bài viết của <strong className="font-semibold text-[#273f4d]">{lead.author}</strong></span>
              {/* <span className="flex items-center gap-1"><Clock3 size={12} /> {lead.read}</span> */}
            </div>
          </div>
        </div>
        <aside className="border-t border-[#d6d0c4] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="mb-4 flex items-center justify-between"><h2 className="eyebrow text-[10px] text-[#183951]">MỚI NHẤT</h2><span className="text-[10px] text-[#818580]">04 câu chuyện</span></div>
          <div className="divide-y divide-[#d6d0c4]">
            {secondary.map((article, index) => <div key={article.slug} className="grid grid-cols-[31px_1fr] gap-3 py-4 first:pt-1 last:pb-1">
              <span className="headline text-[23px] text-[#c6bfb2]">0{index + 1}</span>
              <StoryCard article={article} compact />
            </div>)}
          </div>
        </aside>
      </div>
      <section className="mt-11 border-t border-[#183951] pt-5">
        <div className="mb-5 flex items-center justify-between"><h2 className="headline mt-1 text-[25px] font-semibold text-[#183951]">Bài viết đang được quan tâm</h2><Link href="/category/van-hoa-cong-thuong" className="eyebrow flex items-center gap-2 text-[9px] text-[#17647b] hover:text-[#b92923]" data-testid="link-more-stories">Tất cả bài viết <ArrowRight size={13} /></Link></div>
        <div className="grid gap-8 md:grid-cols-3">
          {articles.slice(3, 6).map((article) => <StoryCard key={article.slug} article={article} />)}
        </div>
      </section>

      {/* Category Matrix Section (Theo layout ảnh tham khảo và theme của web) */}
      <section className="mt-11 border-t-2 border-[#183951] pt-5" data-testid="section-category-matrix">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="headline mt-1 text-[25px] font-semibold text-[#183951]">
            Khám phá theo chuyên mục
          </h2>
          <Link
            href="/category/cong-nghiep"
            className="eyebrow flex items-center gap-2 text-[9px] text-[#17647b] transition-colors hover:text-[#b92923]"
            data-testid="link-all-categories"
          >
            <span>Tất cả chuyên mục</span>
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10">
          {/* Cột trái: Category Grid (3 cols on xl, 2 cols on lg) */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {FEATURED_CATEGORY_SLUGS.map((slug) => (
                <CategoryGridCard key={slug} categorySlug={slug} />
              ))}
            </div>
          </div>

          {/* Cột phải: Trending Stories + Sticky Ad Banner */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-7 border-t lg:border-t-0 lg:border-l border-[#d6d0c4] pt-8 lg:pt-0 lg:pl-7">
            {/* Trending Stories Block (Chuẩn theo ảnh tham khảo) */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-black px-2.5 py-1 text-[11px] font-black uppercase tracking-wider text-white">
                  TRENDING STORIES
                </span>
              </div>
              <div className="divide-y divide-[#d6d0c4]">
                {TRENDING_STORIES.map((story) => (
                  <article key={story.slug} className="py-3.5 first:pt-0 last:pb-0 group">
                    <Link
                      href={`/article/${story.slug}`}
                      className="headline story-link block font-serif text-[16px] font-bold leading-snug text-[#183951] transition-colors hover:text-[#b92923]"
                    >
                      {story.title}
                    </Link>
                    <p className="mt-1.5 text-[9.5px] font-bold uppercase tracking-wider text-[#737e82]">
                      BỞI {story.author.toUpperCase()}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Sticky Banner Ad */}
            <div className="sticky top-20 pt-4 border-t border-[#d6d0c4]">
              <span className="eyebrow mb-2 block text-[8.5px] uppercase tracking-wider text-[#8b959b]">
                QUẢNG CÁO / TÀI TRỢ
              </span>
              <div className="overflow-hidden rounded border border-[#d6d0c4] bg-[#f4efe6] shadow-sm transition-shadow hover:shadow-md">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#183951]">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80"
                    alt="VIETNAM EXPO 2025"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-[#b92923] px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                    SỰ KIỆN QUỐC TẾ
                  </span>
                </div>
                <div className="p-4">
                  <h4 className="font-serif text-[15px] font-bold leading-snug text-[#183951]">
                    VIETNAM EXPO 2025: Hội chợ Thương mại Quốc tế
                  </h4>
                  <p className="mt-2 text-[12px] leading-relaxed text-[#616b70]">
                    Quy tụ hơn 600 doanh nghiệp xuất khẩu hàng đầu và đối tác thương mại toàn cầu.
                  </p>
                  <a
                    href="#register"
                    className="mt-3.5 inline-block w-full rounded bg-[#183951] py-2 text-center text-[10.5px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#b92923]"
                  >
                    Đăng ký tham quan
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Video Slider Section (Mockup cuối trang chủ) */}
      <VideoSliderSection />

    </div>
  </main>;
}

function CategoryPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const category = categoryFor(slug);
  const stories = articles.filter((article) => article.category === slug);
  usePageMeta(category ? `${category.name} — Tin mới nhất` : 'Không tìm thấy danh mục', category ? `Tin tức, phân tích và câu chuyện mới nhất trong mục ${category.name}.` : 'Danh mục bạn đang tìm không tồn tại.');
  if (!category) return <NotFound />;
  return <main className="reveal mx-auto min-h-[65vh] max-w-[1540px] px-5 py-9 md:px-10 md:py-14">
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

function ShareToolbar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 border-y border-[#d6d0c4] py-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="eyebrow flex items-center gap-1.5 text-[10px] font-bold text-[#183951] uppercase tracking-wider">
            <Share2 size={13} className="text-[#b92923]" /> Chia sẻ bài viết:
          </span>
          <div className="flex flex-wrap items-center gap-1.5">
            <a
              href="https://www.facebook.com/sharer/sharer.php"
              target="_blank"
              rel="noreferrer"
              className="flex h-7 items-center gap-1 rounded bg-[#1877f2] px-2.5 text-[11px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Facebook
            </a>
            <a
              href="https://zalo.me"
              target="_blank"
              rel="noreferrer"
              className="flex h-7 items-center gap-1 rounded bg-[#0068ff] px-2.5 text-[11px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Zalo
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-7 items-center gap-1 rounded bg-[#000] px-2.5 text-[11px] font-medium text-white transition-opacity hover:opacity-90"
            >
              X / Twitter
            </a>
            <button
              onClick={handleCopy}
              className="flex h-7 items-center gap-1.5 rounded border border-[#d6d0c4] bg-[#f7f4ec] px-2.5 text-[11px] font-medium text-[#183951] transition-colors hover:border-[#b92923] hover:text-[#b92923] cursor-pointer"
            >
              {copied ? <Check size={12} className="text-[#28754c]" /> : <Copy size={12} />}
              <span>{copied ? 'Đã sao chép' : 'Sao chép link'}</span>
            </button>
          </div>
        </div>

        <button
          onClick={() => window.print()}
          className="eyebrow flex items-center gap-1.5 text-[10px] text-[#68747a] transition-colors hover:text-[#b92923] cursor-pointer"
        >
          <Printer size={13} />
          <span>In bài viết</span>
        </button>
      </div>
    </div>
  );
}

function ArticleComments() {
  const [commentText, setCommentText] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const mockComments = [
    {
      id: 1,
      name: 'Nguyễn Văn Hùng',
      role: 'Độc giả',
      time: '35 phút trước',
      content: 'Bài viết phân tích rất xác đáng và kịp thời. Mong ban biên tập tiếp tục có thêm các bài viết chuyên sâu về chuyển dịch năng lượng và thị trường xuất khẩu.',
      likes: 14,
    },
    {
      id: 2,
      name: 'Trần Thu Trang',
      role: 'Doanh nghiệp FDI',
      time: '2 giờ trước',
      content: 'Thông tin quy chuẩn kỹ thuật và các chính sách ưu đãi thuế quan FTA được tổng hợp rất rõ ràng, giúp ích nhiều cho chiến lược kinh doanh của công ty.',
      likes: 9,
    },
    {
      id: 3,
      name: 'Lê Hoàng Quân',
      role: 'Chuyên gia kinh tế',
      time: '5 giờ trước',
      content: 'Rất đồng tình với quan điểm phát triển bền vững đi đôi với chuyển đổi số toàn diện. Cần thúc đẩy mạnh hơn nữa sự liên kết giữa viện nghiên cứu và nhà sản xuất.',
      likes: 6,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setSubmitted(true);
    setCommentText('');
    setName('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="mt-12 border-t-2 border-[#183951] pt-7">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          
          <h3 className="headline text-[22px] font-bold text-[#183951]">
            Ý kiến bạn đọc <span className="text-[16px] font-normal text-[#758087]">({mockComments.length})</span>
          </h3>
        </div>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 rounded border border-[#d6d0c4] bg-[#f8f5ee] p-4 sm:p-5">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Chia sẻ ý kiến hoặc phản hồi của bạn về bài viết này..."
          rows={3}
          className="w-full rounded border border-[#d6d0c4] bg-white p-3 text-[14px] text-[#243744] placeholder:text-[#97a1a6] outline-none focus:border-[#183951]"
          required
        />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 flex-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Họ và tên của bạn"
              className="rounded border border-[#d6d0c4] bg-white px-3 py-1.5 text-[13px] text-[#243744] placeholder:text-[#97a1a6] outline-none focus:border-[#183951] w-full sm:w-auto"
              required
            />
            <input
              type="email"
              placeholder="Email (không công khai)"
              className="rounded border border-[#d6d0c4] bg-white px-3 py-1.5 text-[13px] text-[#243744] placeholder:text-[#97a1a6] outline-none focus:border-[#183951] w-full sm:w-auto"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-[#b92923] px-5 py-2 text-[12px] font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#96201b] cursor-pointer"
          >
            Gửi ý kiến
          </button>
        </div>
        {submitted && (
          <p className="mt-3 text-[12px] font-semibold text-[#28754c]">
            ✓ Cảm ơn bạn! Bình luận của bạn đã được gửi tới ban biên tập kiểm duyệt.
          </p>
        )}
      </form>

      {/* Existing Comments List */}
      <div className="space-y-4">
        {mockComments.map((c) => (
          <div key={c.id} className="rounded border border-[#e5dfd5] bg-white/70 p-4">
            <div className="flex items-center justify-between text-[11px] text-[#737e82] mb-1.5">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#183951] text-[13px]">{c.name}</span>
                <span className="rounded bg-[#ece7dd] px-1.5 py-0.5 text-[9px] font-medium text-[#657177]">{c.role}</span>
              </div>
              <span>{c.time}</span>
            </div>
            <p className="text-[13.5px] leading-relaxed text-[#334651]">
              {c.content}
            </p>
            <div className="mt-2.5 flex items-center gap-4 text-[11px] text-[#778084]">
              <button type="button" className="flex items-center gap-1 hover:text-[#b92923] transition-colors cursor-pointer">
                <ThumbsUp size={12} />
                <span>Thích ({c.likes})</span>
              </button>
              <button type="button" className="hover:text-[#b92923] transition-colors cursor-pointer">
                Trả lời
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticlePage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const article = articleFor(slug);
  usePageMeta(article?.title ?? 'Không tìm thấy bài viết', article?.excerpt ?? 'Bài viết bạn đang tìm không tồn tại.');
  if (!article) return <NotFound />;
  const related = articles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 3);
  const recentArticles = articles.filter((item) => item.slug !== article.slug).slice(0, 5);

  return (
    <main className="reveal">
      <article className="mx-auto max-w-[1540px] px-5 py-7 md:px-10 md:py-10">
        {/* Breadcrumb */}
        <div className="eyebrow mb-6 flex items-center gap-2 text-[9px] text-[#778084]">
          <Link href="/" data-testid="link-article-home">Trang chủ</Link>
          <span>/</span>
          <Link href={`/category/${article.category}`} className="text-[#17647b]" data-testid="link-article-category">
            {categoryFor(article.category)?.name}
          </Link>
          <span>/</span>
          <span>Bài viết</span>
        </div>

        {/* 2-Column Grid: Left Main Article (8 cols) + Right Recent Articles Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Cột trái: Nội dung bài viết + Share + Tin liên quan + Comment */}
          <div className="lg:col-span-8 xl:col-span-8">
            <CategoryTag slug={article.category} />
            <h1 className="headline mt-3 text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[#183951] leading-tight">
              {article.title}
            </h1>
            <p className="mt-4 text-[16px] md:text-[18px] leading-[1.65] text-[#5e6b70]">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-y border-[#d6d0c4] py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#17647b] font-serif text-sm text-white">
                  {article.author.split(' ').map((part) => part[0]).slice(-2).join('')}
                </div>
                <div>
                  <p className="text-[12px] font-semibold text-[#283e4a]">{article.author}</p>
                  <p className="mt-0.5 text-[10px] text-[#778084]">Phóng viên Truyền Hình Công Thương · {article.time}</p>
                </div>
              </div>
              <div className="eyebrow flex items-center gap-2 text-[9px] text-[#68747a]">
                <Clock3 size={12} /> {article.read}
              </div>
            </div>

            {/* Media: Video Player Mockup or Photo */}
            {article.isVideo ? (
              <div className="relative mt-7 overflow-hidden rounded bg-black shadow-2xl">
                {/* Video Screen */}
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.imageLabel}
                    className="h-full w-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                  {/* Central Big Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      className="group flex h-20 w-20 items-center justify-center rounded-full bg-[#b92923] text-white shadow-2xl transition-all hover:scale-110 hover:bg-[#d60000] cursor-pointer"
                      aria-label="Phát video"
                    >
                      <Play size={36} className="ml-1 fill-white" />
                    </button>
                  </div>

                  {/* Bottom Video Controls Mockup */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-white/30 cursor-pointer">
                      <div className="h-full w-[35%] rounded-full bg-[#b92923]" />
                    </div>
                    <div className="flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 cursor-pointer">
                          <Play size={13} className="ml-0.5 fill-white" />
                        </span>
                        <span className="font-mono text-[11px] text-white/90">
                          02:45 / {article.videoDuration || '08:20'}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-[11px]">
                        <span className="rounded bg-[#b92923] px-1.5 py-0.5 font-bold text-[9px] uppercase tracking-wider text-white">
                          Full HD 1080p
                        </span>
                        <span className="text-white/80 font-medium">Truyền Hình Công Thương</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#122632] px-4 py-2 text-[11px] text-[#93a2ab]">
                  {article.imageLabel} · Video phóng sự của Truyền Hình Công Thương
                </div>
              </div>
            ) : (
              <figure className="image-frame relative mt-7 aspect-[1.9] overflow-hidden bg-[#e5ded0]">
                {article.image ? (
                  <img src={article.image} alt={article.imageLabel} className="h-full w-full object-cover" />
                ) : (
                  <div className={`absolute inset-0 flex items-center justify-center ${article.category === 'the-gioi' ? 'bg-[#23586a]' : article.category === 'kinh-te' ? 'bg-[#286b60]' : article.category === 'van-hoa' ? 'bg-[#d8b785]' : article.category === 'doi-song' ? 'bg-[#92a884]' : 'bg-[#b98772]'}`}>
                    <div className="absolute -right-[4%] top-[18%] h-[90%] w-[52%] rounded-t-[50%] bg-[#f0d9ad]/50" />
                    <div className="absolute bottom-0 left-[12%] h-[66%] w-[42%] -skew-x-[12deg] bg-[#173e50]/70" />
                    <div className="absolute bottom-0 right-[12%] h-[42%] w-[19%] bg-[#c73d32]/75" />
                  </div>
                )}
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#122632]/80 to-transparent px-5 pb-4 pt-10 text-[10px] text-white/90">
                  {article.imageLabel} · Ảnh: Bản Tin Mới
                </figcaption>
              </figure>
            )}

            {/* Article Text Body */}
            <div id="article-body" className="article-copy space-y-5 pt-8 text-[18px] leading-[1.85] text-[#2f414a]">
              <p className="first-letter:float-left first-letter:mr-2 first-letter:font-serif first-letter:text-[64px] first-letter:leading-[.8] first-letter:text-[#b92923]">
                {article.body[0]}
              </p>
              {article.body.slice(1).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <blockquote className="my-8 border-l-[3px] border-[#28754c] py-1 pl-5 text-[22px] italic leading-[1.55] text-[#17647b]">
                “Thành phố tốt hơn bắt đầu từ những điều gần gũi nhất với người dân.”
              </blockquote>
              <p>{article.body[0]}</p>
              <div className="border-t border-[#d6d0c4] pt-5 font-sans text-[12px] text-[#758087]">
                Từ khóa: <span className="text-[#17647b]">{categoryFor(article.category)?.name}</span>, Việt Nam, phát triển bền vững
              </div>
            </div>

            {/* 1. Phần Share Toolbar (trên tin liên quan) */}
            <ShareToolbar title={article.title} />

            {/* 2. Tin liên quan (dưới phần share) */}
            <div className="mt-10">
              <div className="mb-5 flex items-center justify-between border-b border-[#d6d0c4] pb-2.5">
                <h3 className="headline text-[22px] font-bold text-[#183951]">
                  Tin liên quan
                </h3>
                <Link
                  href={`/category/${article.category}`}
                  className="eyebrow flex items-center gap-1 text-[10px] text-[#17647b] hover:text-[#b92923] font-semibold"
                >
                  <span>Xem thêm</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {related.map((item) => (
                  <article key={item.slug} className="group flex flex-col">
                    <Link
                      href={`/article/${item.slug}`}
                      className="aspect-[16/10] overflow-hidden rounded bg-[#e5ded0] block relative mb-2.5"
                    >
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.imageLabel}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full bg-[#183951]/80 flex items-center justify-center p-2 text-center text-[9px] text-white/80">
                          {item.imageLabel}
                        </div>
                      )}
                    </Link>
                    <div className="flex items-center gap-1.5 text-[9px] text-[#758087] mb-1">
                      <span className="font-semibold text-[#b92923] uppercase">
                        {categoryFor(item.category)?.name}
                      </span>
                      <span>·</span>
                      <span>{item.time.split(',')[0]}</span>
                    </div>
                    <Link
                      href={`/article/${item.slug}`}
                      className="headline story-link font-serif text-[15px] font-bold leading-snug text-[#183951] group-hover:text-[#b92923] transition-colors line-clamp-2"
                    >
                      {item.title}
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            {/* 3. Phần Comment (dưới tin liên quan) */}
            <ArticleComments />
          </div>

          {/* Cột phải: Danh sách bài viết gần nhất (Recent Articles Sidebar) */}
          <aside className="lg:col-span-4 xl:col-span-4 space-y-7 border-t lg:border-t-0 lg:border-l border-[#d6d0c4] pt-8 lg:pt-0 lg:pl-8">
            <div>
              <div className="mb-4 flex items-center justify-between border-b border-[#d6d0c4] pb-2.5">
                <h3 className="eyebrow text-[11px] font-bold text-[#183951] tracking-wider uppercase">
                  BÀI VIẾT MỚI NHẤT
                </h3>
               
              </div>

              <div className="divide-y divide-[#d6d0c4]">
                {recentArticles.map((item, idx) => (
                  <article key={item.slug} className="py-3.5 first:pt-1 last:pb-0 group">
                    <div className="flex gap-3.5 items-start">
                      <span className="headline text-[22px] font-bold text-[#c6bfb2] group-hover:text-[#b92923] transition-colors leading-none w-6 shrink-0 pt-0.5">
                        0{idx + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-[9px] text-[#758087] mb-1">
                          <span className="font-semibold text-[#b92923] uppercase">
                            {categoryFor(item.category)?.name}
                          </span>
                          <span>·</span>
                          <span>{item.time.split(',')[0]}</span>
                        </div>
                        <Link
                          href={`/article/${item.slug}`}
                          className="headline story-link block font-serif text-[15px] font-bold leading-snug text-[#183951] group-hover:text-[#b92923] transition-colors line-clamp-2"
                        >
                          {item.title}
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sticky Banner Ad */}
            <div className="sticky top-20 pt-5 border-t border-[#d6d0c4]">
              <span className="eyebrow mb-2 block text-[8.5px] uppercase tracking-wider text-[#8b959b]">
                QUẢNG CÁO / LIÊN KẾT
              </span>
              <a
                href="#banner-vn-eu"
                className="block overflow-hidden rounded border border-[#d6d0c4] bg-white transition-opacity hover:opacity-90 shadow-sm"
              >
                <img
                  src={vnEuBanner}
                  alt="Hiệp định Thương mại Tự do Việt Nam - EU"
                  className="w-full h-auto object-cover block"
                />
              </a>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
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
  return (
    <footer className="bg-[#183951] text-[#f3efe5]">
      {/* Main Footer Container */}
      <div className="mx-auto max-w-[1540px] px-5 py-10 md:px-10 md:py-14">
        <div className="grid grid-cols-1 gap-9 md:grid-cols-12 lg:gap-12 items-start">

          {/* Column 1: Organization & Logo */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3.5 group" data-testid="link-footer-brand">
              <div className="bg-white p-2 rounded shadow-sm shrink-0">
                <img
                  src={logoImg}
                  alt="Truyền hình Công Thương"
                  className="h-11 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[18px] sm:text-[20px] font-bold text-white tracking-normal leading-tight group-hover:text-[#ffd280] transition-colors">
                  TRUYỀN HÌNH CÔNG THƯƠNG
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#8eb5d0] uppercase tracking-wider leading-tight mt-0.5">
                  BỘ CÔNG THƯƠNG VIỆT NAM
                </span>
              </div>
            </Link>

            <div className="space-y-1 pt-1">
              <p className="font-bold text-white text-[13.5px] leading-snug">
                TRUNG TÂM TRUYỀN THÔNG - TRUYỀN HÌNH CÔNG THƯƠNG
              </p>
              <p className="text-[12px] font-medium text-[#9fc1d8] uppercase tracking-wide">
                CỤC XÚC TIẾN THƯƠNG MẠI - BỘ CÔNG THƯƠNG
              </p>
            </div>

            <p className="text-[12px] leading-relaxed text-[#a2b5c0] max-w-md">
              Kênh thông tin báo chí đa phương tiện phản ánh toàn diện, chính xác và kịp thời các chủ trương, chính sách và hoạt động kinh tế, công nghiệp, thương mại, hội nhập quốc tế.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="md:col-span-6 lg:col-span-4 space-y-3.5">
            <h4 className="eyebrow text-[10.5px] font-bold tracking-wider text-[#ffd280]">
              THÔNG TIN LIÊN HỆ & TÒA SOẠN
            </h4>

            <ul className="space-y-2.5 text-[12.5px] text-[#d3dfe6]">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#8eb5d0] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  <strong className="text-white font-medium">Địa chỉ:</strong> 20 Lý Thường Kiệt - Hoàn Kiếm - Hà Nội.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#8eb5d0] shrink-0" />
                <span>
                  <strong className="text-white font-medium">Tel:</strong>{' '}
                  <a href="tel:02438245959" className="hover:text-white hover:underline transition-colors text-white font-semibold">
                    024.38245959
                  </a>
                  <span className="mx-2 text-white/30">|</span>
                  <strong className="text-white font-medium">Fax:</strong> 024 39361311
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#8eb5d0] shrink-0" />
                <span>
                  <strong className="text-white font-medium">Email:</strong>{' '}
                  <a
                    href="mailto:truyenhinhcongthuong@gmail.com"
                    className="hover:underline text-[#ffd280] font-medium transition-colors"
                  >
                    truyenhinhcongthuong@gmail.com
                  </a>
                </span>
              </li>
            </ul>
          </div>

         

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#122c40]">
        <div className="mx-auto flex max-w-[1540px] flex-col justify-between items-center gap-2 px-5 py-4 text-[11px] text-[#93a6b2] md:flex-row md:px-10">
          <p className="text-center md:text-left leading-relaxed">
            © Ghi rõ nguồn <span className="text-white font-medium">"Truyền hình Công Thương"</span> khi phát hành lại thông tin từ Website này.
          </p>
          <p className="shrink-0 text-center md:text-right text-[10.5px] text-[#7d92a0]">
            Bản quyền thuộc Cục Xúc tiến Thương mại - Bộ Công Thương
          </p>
        </div>
      </div>
    </footer>
  );
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