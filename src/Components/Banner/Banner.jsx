import { Carousel, Typography } from "@material-tailwind/react";

const Banner = () => {

    return (
        <div>
            <Carousel className="rounded-xl h-[50vh] md:h-[70vh]">
                <div className="relative h-[50vh] md:h-[70vh] w-full">
                    <img
                       
                        src="https://i.ibb.co/qJkyF9Q/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-backg.webp"
                        alt="image 1"
                        className="h-full w-full "

                    />
                    <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                        <div className="w-3/4 text-center md:w-2/4">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                <p>Looks brings <br /><span className="text-deep-orange-900">Happiness</span></p>
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                Express yourself through style. fashion speaks louder than words ever could.
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className="relative h-[50vh] md:h-[70vh] w-full">
                    <div  className="flex h-[50vh] md:h-[70vh]">
                        <img
                            src="https://i.ibb.co/6PWjkpN/gucci-shoes-nm.jpg"
                            alt="image 2"
                            className="h-full w-1/2"
                        />
                        <img
                            src="https://i.ibb.co/qWwtZGs/nego-adidas-originals-supersta-1645893838-7e64dc7f-progressive.jpg"
                            alt="image 2"
                            className="h-full w-1/2"
                        />
                    </div>

                    <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
                        <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-base md:text-4xl lg:text-5xl"
                            >
                                Quality without Com<span className="text-yellow-900">promise</span>
                            </Typography>
                            <Typography
                                variant="md:lead"
                                color="white"
                                className="mb-4 md:mb-12 opacity-80"
                            >
                                Unwavering commitment to excellence ensures quality without compromise in every product, setting the highest standard.
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-4 md:mb-12 opacity-80"
                            >
                                <span className="md:text-2xl md:font-bold">BIG SALE</span> upto 30% OFF
                            </Typography>

                        </div>
                    </div>
                </div>
                <div className="relative h-[50vh] md:h-[70vh] w-full">
                    <div  className="flex h-[50vh] md:h-[70vh]">
                        <img
                            src="https://i.ibb.co/TYmWVys/1x.jpg"
                            alt="image 2"
                            className="h-full w-1/2"
                        />
                        <img
                            src="https://i.ibb.co/kMXGJhr/3x.webp"
                            alt="image 2"
                            className="h-full w-1/2"
                        />
                    </div>
                    <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
                        <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-lg md:text-4xl lg:text-5xl"
                            >
                                Elegance Unleashed: <span className="text-yellow-900">The Latest Trends</span>
                            </Typography>
                            <Typography
                                variant="md:lead"
                                color="white"
                                className="md:mb-12 mb-4 opacity-80"
                            >
                                Discover the Pinnacle of Fashion Trends, Embrace Unique Styles, and Redefine Your Fashion Journey.
                            </Typography>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}
export default Banner;