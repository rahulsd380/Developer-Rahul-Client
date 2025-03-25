import Image from 'next/image';
import Ripples from 'react-ripples';
import { ICONS } from '../../../../public';

const DownloadResumeButton = () => {
    return (
        <Ripples className="" during={1500} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <a
                href="/src/assets/Resume_of_Rahul Sutradhar.pdf"
                download
                className="hidden md:flex items-center gap-2 bg-gradient-to-br from-blue-500 to-indigo-800 font-Poppins py-3 sm:text-base text-white rounded sm:rounded-[10px] px-4">
                <span className="text-xs mobileLg:text-base xl:text-base">Download Resume</span>
                <Image className="w-5 animate-pulse" src={ICONS.downloadIcon} alt="" />
            </a>
        </Ripples>
    );
};

export default DownloadResumeButton;