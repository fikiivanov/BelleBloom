export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

export const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
};

export const framerVariantTitle = {
    hidden: { y: -100, opacity: 0 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
        },
    },
};
