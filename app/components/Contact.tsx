import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-primary">Contact Us</h2>
                <div className="flex flex-wrap -mx-4">
                    {/* Contact Information */}
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-4 text-secondary">Our Offices</h3>
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-primary">Head Office:</h4>
                            <p className="text-gray-700">
                                Fatima Commercial Center, Yazman Road, Bahawalpur
                            </p>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> 0300-7050123
                            </p>
                        </div>
                        <div className="mb-6">
                            <h4 className="text-xl font-semibold text-primary">Sub Office (Islamabad):</h4>
                            <p className="text-gray-700">
                                108-C, Mehar Plaza, 1st Floor, H-13, Islamabad
                            </p>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> 0300-7050123
                            </p>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold text-primary">Sub Office (Lahore):</h4>
                            <p className="text-gray-700">
                                95-Broadway Road Paragon, 2nd Floor, Barqi Road, Lahore
                            </p>
                            <p className="text-gray-700">
                                <strong>Phone:</strong> 0300-7050123
                            </p>
                        </div>
                    </div>
                    {/* Contact Form */}
                    <div className="w-full md:w-1/2 px-4">
                        <form className="bg-gray-100 p-8 rounded shadow-md">
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 mb-2">Message</label>
                                <textarea
                                    className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your Message"
                                    rows={5}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-secondary text-white px-6 py-3 rounded hover:bg-red-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;