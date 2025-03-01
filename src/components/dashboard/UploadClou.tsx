import axios from "axios";
import { useState } from "react";

const UploadFile = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (!file) {
  //     alert("Please select a file!");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("files", file);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:5009/api/v1/campsite/uploadImage",
  //       formData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //     console.log("Upload Success:", response.data);
  //   } catch (error) {
  //     console.error("Upload Error:", error);
  //   }
  //   const campsiteData = {
  //     id: "67c29acd04ca85b9d5ed0e0d",
  //     name: "Padma Lak88",
  //     description: "A peaceful campsite near a beautiful lake, perfect for fishing and kayaking.",
  //     location: "Lakeview National Park, California",
  //     latitude: 36.7783,
  //     longitude: -119.4179,
  //     capacity: 50,
  //     available: true,
  //     category: "cabin",
  //     pricePerNight: 35.99,
  //     amenities: ["good care"],
  //     images: [
  //       "https://res.cloudinary.com/dddrm7ep8/image/upload/v1740719586/kjovzqohps9ux4x88s7q.jpg",
  //       "https://res.cloudinary.com/dddrm7ep8/image/upload/v1740719586/kjovzqohps9ux4x88s7q.jpg"
  //     ],
  //     createdAt: new Date("2025-06-01T05:27:41.855Z"),
  //     updatedAt: new Date("2025-08-01T05:27:41.855Z"),
  //   };

  //   console.log(campsiteData);

  // };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!file) {
      alert("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("files", file);

    try {
      const response = await axios.post(
        "http://localhost:5009/api/v1/campsite/uploadImage",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("Upload Success:", response);

      // Assuming the response contains an array of image URLs
      const uploadedImages = response.data?.result?.media || [];

      // Now create the campsite data with the uploaded images
      const campsiteData = {
        name: "Padma Lak889",
        description:
          "A peaceful campsite near a beautiful lake, perfect for fishing and kayaking.",
        location: "Lakeview National Park, California",
        latitude: 36.7783,
        longitude: -119.4179,
        capacity: 50,
        available: true,
        category: "cabin",
        pricePerNight: 35.99,
        amenities: ["good care"],
        images: uploadedImages,
        createdAt: new Date("2025-10-01T05:27:41.855Z"),
        updatedAt: new Date("2025-12-01T05:27:41.855Z"),
      };
      console.log(campsiteData)
      if (uploadedImages.length > 0) {
        const campsite = await axios.post(
          "http://localhost:5009/api/v1/campsite/create/sdfdsf",
          campsiteData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Campsite Created:", campsite.data);
      }
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow-md space-y-4"
    >
      <input type="file" onChange={handleFileChange} />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
        Upload
      </button>
    </form>
  );
};

export default UploadFile;
