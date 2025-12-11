import React from 'react';

const WhoWeServe = () => {

    const data = [
        {
            title: 'Community',
            description: 'Human Health Project (HHP) is a growing community of patients, caregivers, health advocates, donors, and volunteers. HHP was created "of the people, by the people, and for the people." Listening to the community is central to our mission, and we value communication and the exchange of information in all that we do.',
            imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/08/Community-e1539922397469.webp',
        },
        {
            title: 'Stakeholders',
            description: 'Our primary stakeholders are individuals struggling with health issues and seeking unbiased information, education, and support for themselves and those in their care.',
            imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Stakeholders.webp',
        },
        {
            title: 'Local & Global',
            description: 'We realize achieving long-term success requires sacrifice, innovation, and sustained effort. To maximize our impact, we hold ourselves accountable to our local communities with whom we strive to achieve meaningful and measurable outcomes.',
            imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2023/09/Local-and-Global-1.webp',
        },
        {
            title: 'Equality',
            description: 'HHP provides health information, education, and support to people around the world, regardless of financial status or geographic location, with a special focus on the underserved. Through our programs, our goal is to advance fairness, inclusion, and opportunity for all.',
            imageUrl: 'https://humanhealthproject.org/wp-content/uploads/2021/07/Equality.webp',
        },
    ]

    return (
        <div className="section">
            <div className="container">
                <section>
                    <div className="relative text-center py-8 ">
                        <img src="https://humanhealthproject.org/wp-content/uploads/2023/09/Who-We-Serve-Cover-2.webp" alt="Who We Serve Cover" />
                        <h1 className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-light text-gray-900 tracking-tight ">
                            WHO WE SERVE
                        </h1>
                    </div>
                </section>

                {/* Who We Serve Section */}
                <section>
                    <div>
                        {data.map((item, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center my-12 ${index % 2 === 0 ? 'md:flex-row-reverse bg-[#c8d448]' : 'bg-[#7cc2e6]'}`}>
                                <div className="md:w-1/2">
                                    <img src={item.imageUrl} alt={item.title} className="w-full h-auto rounded shadow-md" />
                                </div>
                                <div className="md:w-1/2 px-12">
                                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">{item.title}</h2>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Countries Section */}
                <section>
                    <div className="text-center py-8">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                            Countries Served
                        </h2>
                    </div>
                </section>


                {/* Support HHP Section */}
                <section>
                    <div className="text-center py-8">
                        <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
                            Support HHP
                        </h2>
                    </div>
                    <div>
                        <div className="flex flex-col lg:flex-row overflow-hidden">
                        {/* Left - Donate Content */}
                        <div className="lg:w-1/2 bg-linear-to-b from-slate-100 to-blue-50 px-8 md:px-16 py-16 flex flex-col items-center justify-center text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-widest mb-6">
                            DONATE TODAY
                            </h2>
                            <p className="text-gray-600 leading-relaxed max-w-md mb-8">
                            We rely on your donations to pay for servers, bandwidth, maintenance,
                            and development of the Human Health Project platform including
                            salaries. We need a small paid staff of 5 to work with a volunteer team of
                            80 people. Your financial gift will help people across the globe.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-200 shadow-md hover:shadow-lg">
                            GIVE NOW
                            </button>
                        </div>
                        {/*  */}

                        {/* Right - Heart Image */}
                        <div className="lg:w-1/2">
                            <img
                            src="https://humanhealthproject.org/wp-content/uploads/2023/09/donate-giving-heart.webp"
                            alt="Hands holding a red heart"
                            className="w-full h-64 lg:h-full object-cover"
                            />
                        </div>
                        </div>
                    </div>
                    <div className="bg-gray-200 py-10 px-8">
                        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <p className="text-gray-700 text-lg">
                            Our project is growing and we want you to be a part of it.
                            </p>
                            <p className="text-gray-600 italic text-lg">
                            More People. More Information. Better Health.
                            </p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap">
                            JOIN US!
                        </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default React.memo(WhoWeServe);
