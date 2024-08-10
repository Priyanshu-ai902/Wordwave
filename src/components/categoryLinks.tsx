import {
    Briefcase,
    Heart,
    Lightbulb,
    Pencil,
    School,
    Smile
} from "lucide-react"
import React from "react"

const categories = [
    { icon: Briefcase, label: "Business" },
    { icon: Lightbulb, label: "Education" },
    { icon: School, label: "Creative" },
    { icon: Pencil, label: "Health" },
    { icon: Smile, label: "Journaling" },
    { icon: Heart, label: "Communication" },
]

const CategoryLinks: React.FC = () => {
    return (
        <div className="mt-10 sm:mt-20">
            {categories.map(({ icon: Icon, label }) => (
                <div key={label}
                    className="m-1 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg">

                    <Icon size={40} />
                    <p className="text-2xl">{label}</p>
                </div>
            ))
            }
        </div>
    )
}

export default CategoryLinks