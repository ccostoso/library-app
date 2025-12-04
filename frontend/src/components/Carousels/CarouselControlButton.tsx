type CarouselControlButtonProps = {
    direction: 'prev' | 'next';
    targetId: string;
};

export const CarouselControlButton = ({
    direction,
    targetId,
}: CarouselControlButtonProps) => {
    return (
        <button
            className={`carousel-control-${direction}`}
            type="button"
            data-bs-target={`#${targetId}`}
            data-bs-slide={direction}
        >
            <span
                className={`carousel-control-${direction}-icon`}
                aria-hidden="true"
            ></span>
            <span className="visually-hidden">
                {direction === 'prev' ? 'Previous' : 'Next'}
            </span>
        </button>
    );
};
