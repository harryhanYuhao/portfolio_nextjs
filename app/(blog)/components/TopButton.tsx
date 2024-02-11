"use client";

const TopButton = () => {
  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      Top
    </button>
  );
};

export default TopButton;
