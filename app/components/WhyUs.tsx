import React from 'react';

const reasons = [
    {
        title: 'Prevent Crime',
        content:
            'Our security officers serve as a physical deterrent, preventing crimes and responding to any suspicious activity immediately.',
    },
    {
        title: 'Improve Customer Service',
        content:
            'Our security guards enhance customer service by engaging with clients, answering questions, and creating a welcoming environment.',
    },
    {
        title: 'Heightened Awareness',
        content:
            'Security personnel provide extra eyes and ears, ensuring quick action in any situation and guiding a positive, safe environment.',
    },
    {
        title: 'Quick Response Time',
        content:
            'Immediate action in emergencies prevents escalation, ensuring safety while waiting for law enforcement or emergency services.',
    },
    {
        title: 'Efficient Issue Handling',
        content:
            'We use clear judgment to handle security matters effectively, minimizing risks and preventing escalation.',
    },
    {
        title: 'Create a Safe Environment',
        content:
            'Our presence promotes a sense of safety and security in any business setting, offering peace of mind to employees and customers.',
    },
    {
        title: 'Handle Security Matters',
        content:
            'Our trained security personnel can coordinate with law enforcement and emergency teams to manage complex situations efficiently.',
    },
    {
        title: 'Promote Order',
        content:
            'Our officers maintain order in crowded or tense situations, preventing misconduct, riots, or conflicts.',
    },
    {
        title: 'Reduce Stress Levels',
        content:
            'Our presence allows you to focus on your business, knowing your safety and security are handled professionally.',
    },
];

const WhyShahkarSecurityGuards: React.FC = () => {
    return (
        <section id="why-us" className="py-20 bg-[#333333]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-secondary">
                    Why Shahkar Security Guards
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-[#f2f2f2] shadow-lg p-6 rounded-2xl hover:shadow-xl transition-shadow duration-300">
                            <div className="flex flex-col mb-4">
                                <div className="text-secondary text-2xl font-bold mr-4 opacity-50">
                                    0{index + 1}
                                </div>
                                <h3 className="text-xl font-semibold text-secondary">
                                    {reason.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">
                                {reason.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyShahkarSecurityGuards;
