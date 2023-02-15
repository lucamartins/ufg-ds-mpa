export const useFiles = () => {
  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64 = reader.result?.toString().split(",")[1];
        return resolve(String(base64));
      };
      reader.onerror = (error) => reject(error);
    });
  };

  return {
    getBase64,
  };
};
