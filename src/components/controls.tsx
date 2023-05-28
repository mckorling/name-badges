// convert from jsx to tsx (js commented out below)
// right now 'allowJs' in tsconfig is turned on because of this file
// if in a typescript project, this would likely be false, (would maybe be true when migrating an app)
// try not to use docs, just hover over the editor

// standard convention is to make a new type, instead of typing inline
// why type and not interface
// for public facing things that people could extend and use, use interfaces
// for internal could use types
// (people disagree on this), also depends on how a team works
// interfaces can extend other interfaces
// common types/interfaces usually go in a file
type ControlPanelProps = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>; // got this by hovering over onChange property in input element
};

const ControlPanel = ({ name, onChange }: ControlPanelProps) => {
  return (
    <form
      className="bg-primary-10 flex flex-row gap-4 text-white"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <label className="font-bold">Your Name</label>
        <input
          name="name"
          className="w-full"
          type="text"
          value={name}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default ControlPanel;

// import PropTypes from 'prop-types';

// const ControlPanel = ({ name, onChange }) => {
//   return (
//     <form
//       className="flex flex-row gap-4 text-white bg-primary-10"
//       onSubmit={(event) => event.preventDefault()}
//     >
//       <div>
//         <label className="font-bold">Your Name</label>
//         <input
//           name="name"
//           className="w-full"
//           type="text"
//           value={name}
//           onChange={onChange}
//         />
//       </div>
//     </form>
//   );
// };

// ControlPanel.propTypes = {
//   name: PropTypes.string,
//   onChange: PropTypes.func,
// };

// export default ControlPanel;
