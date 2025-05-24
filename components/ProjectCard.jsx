const ProjectCard = ({ title, description, technologies, link }) => {
    return (
        <div className="bg-white rounded-3xl shadow-lg p-10 m-4 w-full max-w-[64.46rem]">
            <div className="flex items-center mb-12">
                <div className="bg-purple-200 p-3 rounded-lg mr-6">
                    Icon
                </div>
                <h2 className="text-3xl font-bold text-[#383f5c]">{title}</h2>
            </div>
            <p className="text-[#6671A3] text-left mb-12 font-medium">{description}</p>
            <div className="flex flex-wrap mb-12">
                {technologies.map((tech, index) => (
                    <span key={index} className={`${index === 0 ? "bg-blue-100 text-blue-700" : index === 1 ? "bg-purple-100 text-purple-700" : "bg-green-100 text-green-700"} px-5 py-2 rounded-full select-none text-2xl mr-2 mb-2`}>
                        {tech}
                    </span>
                ))}
            </div>
            <a href={link} className="text-green-500 hover:text-green-700 font-bold flex items-center greenIcon gap-4">
                <span>Live Preview</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1 1H11V11" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </div>
    );
};

export default ProjectCard;
