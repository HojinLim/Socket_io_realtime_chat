const ModalButton = ({
  onClick,
  handleNameChange,
  handleClose,
  name,
}: {
  onClick: () => void;
  handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
  name: string;
}) => {
  return (
    <div className="modal-btn">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        className="mt-3 p-2 border border-gray-300 rounded"
      />

      <button
        className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-5/6"
        onClick={onClick}
      >
        Go to Chat
      </button>

      <button
        className="mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClose}
      >
        Close
      </button>
    </div>
  );
};
export default ModalButton;
