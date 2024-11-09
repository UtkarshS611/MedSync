"use client";

import { Star } from "lucide-react";


import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";


import About from "@/components/About/About";
import Heading from "@/components/Heading/Heading";
import Footer from "@/components/Footer/Footer";

const Home = () => {
    return (
        <>
        <section className="py-32 h-screen grid place-items-center text-black">
        <Heading/>
        <div className="container text-center">
            <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
            <h1 className="text-3xl font-extrabold lg:text-6xl">
                <div className="bg-gradient-to-r from-[#ccff33] via-[#00b4d8] to-[#38b000] bg-clip-text text-transparent py-4">
                    Empowering Women’s Health:
                </div>
                Personalized Care,
                Anytime,
                Anywhere
            </h1>
            <p className="text-balance text-muted-foreground lg:text-lg">
                Thoughtfully designed features tailored for women’s health, built with care and precision. Easily accessible tools to support wellness, empower choices, and enhance well-being.
            </p>
            </div>
            <Button size="lg" className="mt-10">
                Get Started
            </Button>
            <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <span className="mx-4 inline-flex items-center -space-x-4">
                <Avatar className="size-14 border">
                <AvatarImage
                    src="https://www.shadcnblocks.com/images/block/avatar-1.webp"
                    alt="placeholder"
                />
                </Avatar>
                <Avatar className="size-14 border">
                <AvatarImage
                    src="https://www.shadcnblocks.com/images/block/avatar-2.webp"
                    alt="placeholder"
                />
                </Avatar>
                <Avatar className="size-14 border">
                <AvatarImage
                    src="https://www.shadcnblocks.com/images/block/avatar-3.webp"
                    alt="placeholder"
                />
                </Avatar>
                <Avatar className="size-14 border">
                <AvatarImage
                    src="https://www.shadcnblocks.com/images/block/avatar-4.webp"
                    alt="placeholder"
                />
                </Avatar>
                <Avatar className="size-14 border">
                <AvatarImage
                    src="https://www.shadcnblocks.com/images/block/avatar-5.webp"
                    alt="placeholder"
                />
                </Avatar>
            </span>
            <div>
                <div className="flex items-center gap-1">
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <Star className="size-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0</span>
                </div>
                <p className="text-left font-medium text-muted-foreground">
                from 200+ reviews
                </p>
            </div>
            </div>
        </div>
        <div className="rounded-md w-full overflow-hidden absolute z-[-1] h-[50vh]">
            <Vortex
                backgroundColor="transparent"
                rangeY={800}
                particleCount={600}
                baseHue={0}
                baseRadius={1}
                baseSpeed={-1}
                className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
            >
            </Vortex>
        </div>
        </section>
        <About/>
        <Footer/>
        </>
    );
};

export default Home;
