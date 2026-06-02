import twstyles from "./playpageStyles";
import Image from 'next/image';

export default function PlayroomPage({ image , title, subtitle }: 
    { image: string, title: string, subtitle: string }) {

    return (
        <div className={twstyles.playcard}>
            <div className={twstyles.wrapper}>
                <Image src={image} alt="img" width={80} height={80} />
                <h2 className={twstyles.title}>{title}</h2>
                <p className={twstyles.subtitle}>{subtitle}</p>
            </div>
        </div>
    )
}
