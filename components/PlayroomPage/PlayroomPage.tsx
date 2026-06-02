import twstyles from "./playpageStyles";
import Image from 'next/image';

interface PageProps {
    image: string,
    title: string,
    subtitle: string,
    link?: string
}

export default function PlayroomPage({ image , title, subtitle, link }: PageProps) {

    return (
        <div className={twstyles.playcard}>
            <a href={link}>
                <div className={twstyles.wrapper}>
                    <Image src={image} alt="img" width={80} height={80} />
                    <h2 className={twstyles.title}>{title}</h2>
                    <p className={twstyles.subtitle}>{subtitle}</p>
                </div>
            </a>
        </div>
    )
}
