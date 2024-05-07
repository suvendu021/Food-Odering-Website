const FAQ = ({ showItems, toggleShowItems, title, description }) => {
  return (
    <div className="border rounded-lg mb-4">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleShowItems}
      >
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className={`transform ${showItems ? "rotate-180" : "rotate-0"}`}>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      {showItems && (
        <div className="p-4">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
