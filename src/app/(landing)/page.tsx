"use client";
import LandingDivider from "@/components/common/landing-divider";
import LandingSection from "@/components/common/landing-section";
import LandingSkillBarChart from "@/components/common/landing-skill-bar-chart";
import LandingPieChart from "@/components/common/landing-skill-piechart";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, GraduationCap, Mail, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Menu, X } from "lucide-react"; // 햄버거 & 닫기 아이콘
export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleScrollTo = (id: string) => {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // 모바일 메뉴 닫기
      }
    };
    return (
        <main className="font-sans">
            {/* Header */}
            <header
      className={cn(
        "fixed top-0 left-0 w-full z-[999] h-[80px] transition-all duration-300",
        menuOpen?"bg-black": scrolled ? "bg-white/30 backdrop-blur-md shadow" : "bg-transparent"
      )}
    >
      <nav
        className={cn(
          "max-w-6xl mx-auto flex justify-between items-center px-4 py-3 h-full transition-all",
          menuOpen?"text-white": scrolled ? "text-[#ff6600]" : "text-white"
        )}
      >
        <h1 className="font-bold text-xl">WONHEE LEE</h1>

        {/* PC 메뉴 */}
        <ul className="hidden md:flex gap-10 text-m font-semibold">
          {["ABOUT ME", "SKILLS", "BLOG", "PROJECTS"].map((label) => (
            <li key={label}>
              <button
                onClick={() =>
                  handleScrollTo(label.replace(/\s+/g, "").toLowerCase())
                }
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 모바일 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-black/60 backdrop-blur-md text-white absolute top-[80px] left-0 w-full z-[998] px-6 py-4">
          <ul className="flex flex-col gap-4 font-medium text-[20px]">
            {["ABOUT ME", "SKILLS", "BLOG", "PROJECTS"].map((label,index) => (
              <li key={label} className={`border-${index==3?"none":"b"} border-gray-300 h-[50px]`}>
                <button
                  className="w-full text-left"
                  onClick={() =>
                    handleScrollTo(label.replace(/\s+/g, "").toLowerCase())
                  }
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>

            {/* Hero Section */}
            <section className="relative min-h-[50vh] bg-[url('/hero.jpg')] bg-cover bg-center text-black flex flex-col justify-center items-center text-center px-4 pt-24">
                <div className="absolute inset-0 bg-[#3d3029] opacity-70 "></div>

                <p className="text-3xl md:text-[52px] mb-6 h-[90px] whitespace-pre-wrap text-white font-bold z-[900] text-center">
                    <Typewriter
                        words={["섬세한 프론트 개발자 이원희입니다."]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={30}
                        delaySpeed={1000}
                    // cursorBlinking={true}
                    />
                </p>

            </section>

            {/* About Me */}
            <LandingSection title="ABOUT ME" >
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Avatar className="w-60 h-60 md:w-80 md:h-80 mx-auto">
                        <AvatarImage src="/me2.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* text-2xl 기본 글씨 */}
                    <div className="flex flex-col justify-start items-start gap-3">
                        <div className="flex flex-row gap-6 items-center"><User /><span className="text-2xl">이원희</span></div>
                        <div className="flex flex-row gap-6 items-center"><Calendar /><span className="text-2xl">96.01.14</span></div>
                        <div className="flex flex-row gap-6 items-center"><MapPin /><span className="text-2xl">경기도 수원시</span></div>
                        <div className="flex flex-row gap-6 items-center"><Phone /><span className="text-2xl">010-7596-6578</span></div>
                        <div className="flex flex-row gap-6 items-center"><Mail /><span className="text-2xl">lwh961212@gmail.com</span></div>
                        <div className="flex flex-row gap-6 items-center"><GraduationCap /><span className="text-2xl">명지대학교 자연캠퍼스</span></div>




                    </div>
                </div>
            </LandingSection>

            {/* Skills */}
            {/* <section id="skills" className="py-16 bg-yellow-400 text-black text-center">
                <h2 className="text-3xl font-extrabold mb-8">🔗 SKILLS</h2>
                <div className="bg-cream p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div><p className="font-semibold">Language</p><div className="flex flex-wrap gap-2 justify-center mt-2"><span className="badge">TypeScript</span><span className="badge">JavaScript</span><span className="badge">Python</span></div></div>
                        <div><p className="font-semibold">Frontend</p><div className="flex flex-wrap gap-2 justify-center mt-2"><span className="badge">Next.js (React)</span><span className="badge">Zustand</span><span className="badge">Recoil</span><span className="badge">Tailwind CSS</span></div></div>
                        <div><p className="font-semibold">Backend</p><div className="flex flex-wrap gap-2 justify-center mt-2"><span className="badge">Django</span><span className="badge">Firebase</span><span className="badge">Supabase</span></div></div>
                        <div><p className="font-semibold">DevOps</p><div className="flex flex-wrap gap-2 justify-center mt-2"><span className="badge">AWS</span><span className="badge">Vercel</span><span className="badge">Docker</span></div></div>
                    </div>
                </div>
            </section> */}
            <LandingDivider />
            <LandingSection title="SKILLS" widthSize="5">
                <LandingSkillBarChart data={[
                    { name: "TypeScript", level: 80, color: "#1677C7" },
                    { name: "React", level: 80, color: "#60DAFA" },
                    { name: "Next.js", level: 60, color: "#000000" },
                    { name: "Tailwind CSS", level: 100, color: "#06B6D4" },
                    { name: "Dart", level: 80, color: "#39CEFD" },
                    { name: "Firebase", level: 70, color: "#F88601" },
                    { name: "Node.js", level: 50, color: "#8BC500" },
                    { name: "Mysql", level: 50, color: "#00758F" },
                    { name: "Prisma", level: 50, color: "#0C354B" },
                ]} />
            </LandingSection>
            {/* CONTACT */}

            <LandingSection title="CONTACT" bgColor="bg-[#281b14]" titleColor="text-[#ffffff]">
                {/* Archiving */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <Card  className="w-full h-[300px] md:h-[400px] shadow-lg md:rounded-lg">
                        <CardHeader className="flex flex-col items-center gap-6">
                            <Image src={"/github.png"} width={50} height={50} alt="github" />
                            <CardTitle>깃허브</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Link href={"https://github.com/eejoy1212"} className="text-blue-500 text-2xl">github.com/eejoy1212</Link>
                        </CardContent>
                        <CardFooter className="mx-auto">
                            <p className="text-gray-600">이원희의 코드 모음</p>
                        </CardFooter>
                    </Card>
                    <Card  className="w-full h-[300px] md:h-[400px] shadow-lg rounded-lg">
                        <CardHeader className="flex flex-col items-center gap-6">
                            <Image src={"/linkedin.png"} width={50} height={50} alt="linkedin" />
                            <CardTitle>링크드인</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Link href={"https://www.linkedin.com/in/원희-이-4370a1253"} className="text-blue-500 text-2xl">linkedin.com/wonheelee</Link>
                        </CardContent>
                        <CardFooter className="mx-auto">
                            <p className="text-gray-600">이원희의 링크드인 프로필</p>
                        </CardFooter>
                    </Card>

                </div>
            </LandingSection>
            {/* Projects */}
            {/* <section id="projects" className="py-16 bg-gray-100 text-black text-center">
                <h2 className="text-3xl font-extrabold mb-8">🔗 PROJECTS</h2>
                <p className="mb-8 text-gray-600">주요 프로젝트만 보기</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-full">react-bulk-form</span>
                        <p className="text-sm text-gray-500 mt-2">2025.03</p>
                        <p className="font-bold mt-2">Form 상태의 일괄 관리를 위한 간단한 React 라이브러리</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <span className="text-sm bg-pink-500 text-white px-3 py-1 rounded-full">IT 엘도라도 (블로그)</span>
                        <p className="text-sm text-gray-500 mt-2">2024.09 (1인 개인 프로젝트)</p>
                        <p className="font-bold mt-2">Notion API/DB와 연동하여 개발한 개인 블로그</p>
                    </div>
                </div>
            </section> */}
            <LandingSection title="PROJECTS" bgColor="bg-[#FDF8F5FF]" widthSize="5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {/* <div className="bg-white p-6 rounded-lg shadow">
                        <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-full">react-bulk-form</span>
                        <p className="text-sm text-gray-500 mt-2">2025.03</p>
                        <p className="font-bold mt-2">Form 상태의 일괄 관리를 위한 간단한 React 라이브러리</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <span className="text-sm bg-pink-500 text-white px-3 py-1 rounded-full">IT 엘도라도 (블로그)</span>
                        <p className="text-sm text-gray-500 mt-2">2024.09 (1인 개인 프로젝트)</p>
                        <p className="font-bold mt-2">Notion API/DB와 연동하여 개발한 개인 블로그</p>
                    </div> */}
                    <Card className="w-full h-[400px] shadow-lg rounded-lg" >
                        <CardContent className="p-0 m-0">
                            <Link href={""} className="text-blue-500 text-2xl">
                                <div className="relative w-auto h-[300px] m-[20px] ">
                                    <Image
                                        src="/naksi_p.png"
                                        alt="naksi"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                     <Card className="w-full h-[400px] shadow-lg rounded-lg" >
                        <CardContent className="p-0 m-0">
                            <Link href={""} className="text-blue-500 text-2xl">
                                <div className="relative w-auto h-[300px] m-[20px] ">
                                    <Image
                                        src="/flatmusic_p.png"
                                        alt="flatmusic"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-[400px] shadow-lg rounded-lg" >
                        <CardContent className="p-0 m-0">
                            <Link href={""} className="text-blue-500 text-2xl">
                                <div className="relative w-auto h-[300px] m-[20px] ">
                                    <Image
                                        src="/catchmong_p.png"
                                        alt="catchmong"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-[400px] shadow-lg rounded-lg" >
                        <CardContent className="p-0 m-0">
                            <Link href={"https://nettle-eyeliner-eeb.notion.site/143fc43a156481a38ad4ce9cf94c6346?pvs=4"} className="text-blue-500 text-2xl">
                                <div className="relative w-auto h-[300px] m-[20px] ">
                                    <Image
                                        src="/carsix_p.png"
                                        alt="carsix"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-[400px] shadow-lg rounded-lg" >
                        <CardContent className="p-0 m-0">
                            <Link href={"http://misodak-admin.s3-website.ap-northeast-2.amazonaws.com/hospital"} className="text-blue-500 text-2xl">
                                <div className="relative w-auto h-[300px] m-[20px] ">
                                    <Image
                                        src="/misodak_p.png"
                                        alt="misodak"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                    <Card className="w-full h-[400px] shadow-lg rounded-lg" >
                        <CardContent className="p-0 m-0">
                            <Link href={"https://www.sellian.kr/"} className="text-blue-500 text-2xl">
                                <div className="relative w-auto h-[300px] m-[20px] ">
                                    <Image
                                        src="/sellian_p.png"
                                        alt="Sellian"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                   
                    <Card className="w-full h-[400px] shadow-lg rounded-lg" >
                        <CardContent className="p-0 m-0">
                            <Link href={"http://misodak-admin.s3-website.ap-northeast-2.amazonaws.com/hospital"} className="text-blue-500 text-2xl">
                                <div className="relative w-auto h-[300px] m-[20px] ">
                                    <Image
                                        src="/photomong_p.png"
                                        alt="photomong"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </LandingSection>
            {/* Career */}
            {/* <section id="career" className="py-16 bg-gray-50 text-black text-center">
                <h2 className="text-3xl font-extrabold mb-8">🔗 CAREER</h2>
                <div className="max-w-4xl mx-auto text-left space-y-6">
                    <div>
                        <h3 className="text-xl font-bold">(주) 당근마켓</h3>
                        <p className="text-gray-600">2024.11 ~ (재직 중)</p>
                        <p className="text-sm mt-1">지역 동네 업체 정보(비즈프로필) 관련 개발</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">(주) 오픈갤러리</h3>
                        <p className="text-gray-600">2021년 상반기 ~ 퇴사</p>
                        <ul className="list-disc ml-5 text-sm mt-1">
                            <li>작가 개인용 웹사이트 전체 리뉴얼</li>
                            <li>서버 배포 환경 변경 (AWS ECS)</li>
                            <li>대규모 서버 정리 작업 리드</li>
                            <li>기타 개발 업무 담당</li>
                            <li>백 오피스 전반 관리 기능 개발/기획</li>
                        </ul>
                    </div>
                </div>
                <p className="text-xs text-gray-400 mt-12">© 2021. WONHEE LEE. All rights reserved.</p>
            </section> */}
           <footer className="w-full bg-[#121212] text-[#ffffff] py-6 px-4 text-center text-sm md:text-base">
  <span>© 2025. WON HEE LEE. All rights reserved.</span>
</footer>

        </main>
    );
}
