import FlickeringGrid from '@/components/magicui/flickering-grid';
import React from 'react';
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { AnimatedSubscribeButton } from '@/components/magicui/animated-subscribe-button';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="bg-white md:h-screen overflow-hidden pt-10">
            <h2 className="text-4xl font-medium tracking-tight text-center mb-12 text-blue">Contact Us</h2>
            <div className="flex flex-col md:flex-row h-full">
                {/* Contact Information */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 px-12">
                    <h3 className="text-2xl font-medium tracking-tight mb-4 text-blue">Our Offices</h3>
                    <div className="mb-6">
                        <h4 className="text-xl font-medium tracking-tight text-blue">Head Office:</h4>
                        <p className="text-gray-700 tracking-tight">
                            Fatima Commercial Center, Yazman Road, Bahawalpur
                        </p>
                        <p className="text-gray-700 tracking-tight">
                            <strong className='font-medium'>Phone:</strong> 0300-7050123
                        </p>
                    </div>
                    <div className="mb-6">
                        <h4 className="text-xl font-medium tracking-tight text-blue">Sub Office (Islamabad):</h4>
                        <p className="text-gray-700 tracking-tight">
                            108-C, Mehar Plaza, 1st Floor, H-13, Islamabad
                        </p>
                        <p className="text-gray-700 tracking-tight">
                            <strong className='font-medium'>Phone:</strong> 0300-7050123
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-medium tracking-tight text-blue">Sub Office (Lahore):</h4>
                        <p className="text-gray-700 tracking-tight">
                            95-Broadway Road Paragon, 2nd Floor, Barqi Road, Lahore
                        </p>
                        <p className="text-gray-700 tracking-tight">
                            <strong className='font-medium'>Phone:</strong> 0300-7050123
                        </p>
                    </div>
                    {/* <ContactDock /> */}
                </div>
                <div className='relative w-full md:w-1/2 h-full flex items-center justify-center'>
                    {/* Contact Form */}
                    <form className="p-8 border rounded-xl shadow-md bg-white z-10 w-3/4 h-[90%]">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2">Message</label>
                            <textarea
                                className="w-full resize-none p-3 border rounded focus:outline-none focus:ring-2 focus:ring-red"
                                placeholder="Your Message"
                                rows={3}
                            ></textarea>
                        </div>
                        {/* <button
                                type="submit"
                                className="bg-secondary text-white px-6 py-3 rounded hover:bg-red-700 transition"
                            >
                                Send Message
                            </button> */}
                        <AnimatedSubscribeButton
                            buttonColor="#135f96"
                            buttonTextColor="#ffffff"
                            subscribeStatus={false}
                            initialText={
                                <span className="group inline-flex items-center">
                                    Send Message{" "}
                                    <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            }
                            changeText={
                                <span className="group inline-flex items-center">
                                    <CheckIcon className="mr-2 h-4 w-4" />
                                    Sent{" "}
                                </span>
                            }
                        />
                    </form>
                    <FlickeringGrid
                        className="z-0 absolute inset-0 size-full"
                        squareSize={4}
                        gridGap={6}
                        color="#6B7280"
                        maxOpacity={0.5}
                        flickerChance={0.1}
                        height={800}
                        width={800}
                    />
                </div>


                {/* <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "[mask-image:radial-gradient(50dvw_circle_at_center,white,transparent)]",
                            "inset-x-0 h-[200%] skew-y-12",
                        )}
                    /> */}
            </div>
        </section>
    );
};

export default Contact;