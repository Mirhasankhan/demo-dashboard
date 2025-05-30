// "use client"
// import { useState } from "react";

// export default function SelectComponent() {
//   const options = ["Apple", "Banana", "Cherry", "Date", "Grape"];
//   const [selectedItems, setSelectedItems] = useState([]);

//   const handleSelect = (event) => {
//     const value = event.target.value;
//     if (value && !selectedItems.includes(value)) {
//       setSelectedItems([...selectedItems, value]);
//     }
//   };

//   const removeItem = (item:string) => {
//     setSelectedItems(selectedItems.filter(i => i !== item));
//   };

//   const filteredOptions = options.filter((option) => !selectedItems.includes(option));

//   return (
//     <div className="p-4 space-y-4">
//       <select onChange={handleSelect} className="w-[200px] p-2 border rounded">
//         <option value="">Select an option</option>
//         {filteredOptions.map((option) => (
//           <option key={option} value={option}>{option}</option>
//         ))}
//       </select>

//       <div>
//         <h2 className="text-lg font-semibold">Selected Items:</h2>
//         <div className="flex gap-2 flex-wrap">
//           {selectedItems.map((item) => (
//             <button key={item} className="p-2 border rounded" onClick={() => removeItem(item)}>
//               {item} ✕
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client"
import { useState } from "react";

export default function FreeInputComponent() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const value = inputValue.trim();

    if (!value) return;
    if (selectedItems.includes(value)) return;

    setSelectedItems([...selectedItems, value]);
    setInputValue("");
  };

  const removeItem = (item: string) => {
    setSelectedItems(selectedItems.filter(i => i !== item));
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
          className="w-[200px] p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Added Items:</h2>
        <div className="flex gap-2 flex-wrap">
          {selectedItems.map((item) => (
            <button
              key={item}           
              className="p-2 border rounded"              
            >
              {item} <span onClick={() => removeItem(item)}>✕</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

