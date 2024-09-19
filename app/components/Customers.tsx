import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Shabbir Ahmed Khan",
        username: "@shabbir",
        body: "I have been using Shahkar Security Services for a while now, and their guards are highly professional and vigilant. Their attention to detail is unmatched. I feel secure knowing my premises are well-protected.",
        img: "https://avatar.vercel.sh/shabbir",
    },
    {
        name: "Rashid Mahmood",
        username: "@rashid",
        body: "The level of service provided by Shahkar Security is exemplary. Their guards are always on time, well-trained, and maintain a strong presence. I highly recommend their services for anyone looking for reliable security.",
        img: "https://avatar.vercel.sh/rashid",
    },
    {
        name: "Tariq Ali Siddiqui",
        username: "@tariq",
        body: "Shahkar Security Services has proven to be the best in private security. Their guards are extremely professional and well-trained. I have peace of mind knowing my home and business are in safe hands.",
        img: "https://avatar.vercel.sh/tariq",
    },
    {
        name: "Javed Iqbal",
        username: "@javed",
        body: "I've hired Shahkar Security for my business premises, and their guarding services are impeccable. The guards are courteous, alert, and handle every situation with expertise. I trust Shahkar Security completely.",
        img: "https://avatar.vercel.sh/javed",
    },
    {
        name: "Naseeruddin Shah",
        username: "@naseeruddin",
        body: "Shahkar Security Services stands out for their professionalism. The guards are well-disciplined and always alert. I’ve never felt safer with their team protecting my family and property. Highly recommended for anyone in need of private security.",
        img: "https://avatar.vercel.sh/naseeruddin",
    },
    {
        name: "Munir Ahmad Qureshi",
        username: "@munir",
        body: "I’ve been very impressed with the quality of Shahkar Security’s guarding services. Their staff is well-trained and always professional. It’s rare to find such a reliable and efficient security team. I wholeheartedly recommend their services.",
        img: "https://avatar.vercel.sh/munir",
    },
    {
        name: "Imran Saeed",
        username: "@imran",
        body: "Shahkar Security has been amazing. Their guards are always on time and maintain a high level of professionalism. They really go above and beyond to ensure our safety. Highly satisfied with their service.",
        img: "https://avatar.vercel.sh/imran",
    },
    {
        name: "Farooq Ahmed",
        username: "@farooq",
        body: "I’ve been working with Shahkar Security for over a year, and their guards are excellent. They are vigilant, courteous, and always alert. I feel completely secure with them protecting my property.",
        img: "https://avatar.vercel.sh/farooq",
    },
    {
        name: "Zafarullah Khan",
        username: "@zafarullah",
        body: "The guards at Shahkar Security are well-trained and very professional. They’ve always responded promptly and efficiently in every situation. I trust their service for my home and business.",
        img: "https://avatar.vercel.sh/zafarullah",
    },
    {
        name: "Kashif Anwar",
        username: "@kashif",
        body: "Shahkar Security Services has exceeded my expectations. Their guards are always attentive and provide a strong sense of security. I would definitely recommend them to anyone needing top-notch security services.",
        img: "https://avatar.vercel.sh/kashif",
    },
    {
        name: "Shoaib Hassan",
        username: "@shoaib",
        body: "I hired Shahkar Security for my warehouse, and their guards have been phenomenal. They patrol the premises regularly and handle everything with care. I appreciate their hard work and dedication.",
        img: "https://avatar.vercel.sh/shoaib",
    },
    {
        name: "Akhtar Ali",
        username: "@akhtar",
        body: "The guards provided by Shahkar Security are always professional, alert, and respectful. Their presence has made a significant difference in our peace of mind. I trust them fully with our security needs.",
        img: "https://avatar.vercel.sh/akhtar",
    },
    {
        name: "Yasir Abbas",
        username: "@yasir",
        body: "Shahkar Security's guards are excellent. They always maintain a strong presence and are extremely professional in their duties. I couldn’t ask for better protection for my family and home.",
        img: "https://avatar.vercel.sh/yasir",
    },
    {
        name: "Asif Raza",
        username: "@asif",
        body: "I’ve been using Shahkar Security for my office, and their guards are always vigilant and well-mannered. I am extremely satisfied with their service and will continue to rely on them for security.",
        img: "https://avatar.vercel.sh/asif",
    },
    {
        name: "Tanveer Ahmed",
        username: "@tanveer",
        body: "The security guards from Shahkar Security are professional and reliable. Their attention to detail and commitment to protecting our building has been outstanding. I highly recommend their services.",
        img: "https://avatar.vercel.sh/tanveer",
    },
    {
        name: "Sultan Mehmood",
        username: "@sultan",
        body: "Shahkar Security's guards are always courteous and very well-trained. Their presence makes a huge difference, and we’ve had no issues since they’ve been securing our property. Excellent service overall.",
        img: "https://avatar.vercel.sh/sultan",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

const Customers = () => {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background py-20 space-y-10">
            <h2 className="text-4xl font-medium tracking-tight">What Our Customers Say About Us?</h2>
            <div>
                <Marquee pauseOnHover className="[--duration60s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:60s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
            </div>
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
        </div>
    );
}


export default Customers;