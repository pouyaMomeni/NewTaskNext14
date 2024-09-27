import CustomRadio from './radio';
import IntegerStep from './slider';

interface funcType {
  onClick: () => void;
}

const Filter: React.FC<funcType> = ({ onClick }) => {
  return (
    <div className="rounded-3xl shadow bg-gray-800">
      <div className="w-full md:w-[90%] mx-auto max-w-screen-xl p-3 flex flex-col md:flex-row items-center  justify-evenly gap-5">
        <div className="flex flex-row justify-around w-[100%] md:w-[60%]">
          <IntegerStep />
          <CustomRadio />
        </div>
        <button
          onClick={() => onClick()}
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Change
        </button>
      </div>
    </div>
  );
};

export default Filter;
