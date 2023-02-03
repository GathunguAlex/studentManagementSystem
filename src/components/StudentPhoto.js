import React, { useState } from 'react';

export default function StudentPhoto() {
     const [image, setImage] = useState(null);
     const [saved, setSaved] = useState(false);

     const handleChange = (event) => {
       setImage(URL.createObjectURL(event.target.files[0]));
     };

     const handleSave = () => {
       // Perform the save operation
       setSaved(true);
     };

     const handleDelete = () => {
       setImage(null);
       setSaved(false);
     };
  return (
    <div>
      {!image && <input type="file" onChange={handleChange} />}
      {image && (
        <div>
          <img src={image} alt="Profile" />
          <button onClick={handleSave} disabled={saved}>
            Save
          </button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
