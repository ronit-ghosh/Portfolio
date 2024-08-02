import React from 'react'

const SkillsCard = (props) => {
    const { icon, text } = props
    return (
        <div key={text} className="p-4 md:w-1/6 sm:w-1/2 w-1/2">
            <div className="flex flex-col justify-center items-center border-2 border-gray-200 p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-150">
                {icon}
                <p className="leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

export default SkillsCard
