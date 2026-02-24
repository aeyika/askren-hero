import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="flex pt-20 flex-col justify-center items-center h-screen bg-[#111111] gap-8">
            <h1 className="text-[52px] font-sora font-semibold text-[#F2F2F7] text-center max-w-157.5 leading-tight">
                Build AI Support System From Your Docs
            </h1>
            <p className="text-[#d9d9d9] text-center max-w-105 text-[16px]">
                Upload PDFs, Notion pages or links and get a chatbot+help center, ready in minutes
            </p>
            <div className="flex flex-row gap-8">
                <Link href={"/"} className="flex items-center">
                    <Image src="/button-small.png" alt="cta button" className="block drop-shadow-[0_4px_20px_rgba(129,75,222,0.51)]" width={162} height={52}/>
                </Link>
                <Link href={"/"} className="flex items-center">
                    <Image src="/button-small-2.png" alt="see live demo button" className="block drop-shadow-[0_4px_20px_rgba(129,75,222,0.51)]" width={162} height={52}/>
                </Link>
            </div>
            <Image src="/hero-png.png" alt="hero image" width={720} height={480}/>
        </div>
    );
}