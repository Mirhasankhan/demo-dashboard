"use client";

import Image from "next/image";
import { useState } from "react";

const Show = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const imageUrls = filesArray.map((file) => URL.createObjectURL(file));

      setSelectedImages(imageUrls);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />

      <div className="flex flex-wrap gap-2 mt-4">
        {selectedImages.map((src, index) => (
          <Image key={index} src={src} alt={`Preview ${index}`} height={200} width={200} />
        ))}
      </div>
    </div>
  );
};

export default Show;
