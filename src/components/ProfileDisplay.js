import { useEffect, useState } from "react"

export default function ProfileDisplay() {
 const [image, setImage] = useState(null);
 const [formData, setFormData] = useState({});
 const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const imageResponse = await fetch("http://example.com/api/image");
          const imageData = await imageResponse.json();
          setImage(imageData.url);

          const formResponse = await fetch("http://example.com/api/form");
          const formData = await formResponse.json();
          setFormData(formData);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

     if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={image} alt="Profile" />
      <form>
        {Object.entries(formData).map(([field, value]) => (
          <div key={field}>
            <label htmlFor={field}>{field}:</label>
            <input type="text" id={field} value={value} />
          </div>
        ))}
      </form>
    </div>
  );
};
  
