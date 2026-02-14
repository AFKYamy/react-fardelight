// types
import type { IconType } from "react-icons";

type FeaturesCardProps = {
    Icon: IconType;
    title: string;
    feat: string | number;
}

export default function FeaturesCard({ Icon, title, feat }: FeaturesCardProps) {
    return (
        <div className="flex gap-5">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <p className="text-gray">{title}</p>
                <p className="text-xl font-semibold">{feat}</p>
            </div>
        </div>
    )
}