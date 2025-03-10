interface Props {
  showResume: boolean;
  close: () => void;
}

function Resume({ showResume, close }: Props) {
  return (
    <div
      className={`fixed top-0 left-0 w-[100%] h-[100%] bg-black/20 z-20 transition-all duration-150 ease-in-out ${
        showResume ? "opacity-100 visible" : "opacity-0 scale-90 invisible"
      }`}
    >
      <div className="w-[90%] h-[90%] max-w-[1400px] bg-gray-900 rounded-sm mx-auto mt-7">
        <div className="bg-gray-900 font-sans h-30 drop-shadow-sm rounded-sm">
          <div className="flex justify-between align-center p-5">
            <nav className="text-lg md:text-3xl text-white font-semibold text-center">
              My Resume
            </nav>
            <nav>
              <button
                className="bg-sky-500 hover:bg-sky-700 px-4 py-1 mx-2 rounded-sm font-medium text-white drop-shadow-md"
                onClick={close}
              >
                Close
              </button>
            </nav>
          </div>
        </div>

        <div className="h-[600px] md:h-[510px] md:px-7 overflow-hidden text-grey-600 text-lg semi-bold">
          <object
            className="mx-auto"
            data="Abdu-Lateef Lekan-Fadeyi's Resume.pdf"
            width="100%"
            height="100%"
          ></object>
        </div>
      </div>
    </div>
  );
}

export default Resume;
