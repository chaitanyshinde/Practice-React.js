const Card = (props) => {
  const renderButton = () => {
    if (!props.getData) return null;
    return (
      <button
        className="active:scale-90 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={props.getData}
      >
        Get Data
      </button>
    );
  };

  return (
    <div>
      {renderButton()}

      {props.image && (
        <div className="bg-gray-50 text-black flex items-center rounded w-full p-2 shadow mt-4">
          <img
            className="h-40 w-40 object-cover rounded mr-4"
            src={props.image}
            alt=""
          />
          <h1 className="text-sm font-semibold">{props.author}</h1>
        </div>
      )}
    </div>
  );
};

export default Card;

// 1:
//  {props.getData && (
//   <button onClick={props.getData}>Get Data</button>
// )}
// Means:
// If props.getData exists (i.e., is not undefined, null, or false)
// Then render the <button>
// Else render nothing.
// This works because JavaScript’s && operator evaluates the second part only if the first part is truthy.

//2. Ternary Operator:
// {props.getData ? (
//   <button onClick={props.getData}>Get Data</button>
// ) : null}

//3. Using Function: this what we used above
