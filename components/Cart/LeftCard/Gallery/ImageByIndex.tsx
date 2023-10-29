export const images: string[] = [
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_01_2-1000x1000.jpg",
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_02_1-1000x1000.jpg",
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_03_2-1000x1000.jpg",
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_04_2-1000x1000.jpg",
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_05_2-1000x1000.jpg",
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_06_2-1000x1000.jpg",
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_07_2-1000x1000.jpg",
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_08_2-1000x1000.jpg",
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_09_2-1000x1000.jpg",
  "https://miniture.novaworks.net/wp-content/uploads/2023/10/f_p_10_2-1000x1000.jpg",
];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
