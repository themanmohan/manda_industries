"use client"
import { NextPage } from 'next';
import { PDFDocument, rgb } from 'pdf-lib';
import { useState } from 'react';

// Define the product type
interface Product {
  id: number;
  name: string;
  image: string;
}

// Sample product data with type annotations
const products: Product[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  image: `https://picsum.photos/seed/${i + 1}/200/300`, // Random image from picsum.photos
}));

const Blog: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Helper function to fetch the image data as a Uint8Array
  const fetchImageAsUint8Array = async (url: string): Promise<Uint8Array> => {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  };

  const generatePDF = async () => {
    setIsLoading(true);

    try {
      // Create a new PDF document
      const pdfDoc = await PDFDocument.create();
      let page = pdfDoc.addPage([600, 800]); // Declare with 'let' so we can reassign later

      // Center the title
      const title = 'Product Catalog';
      const titleFontSize = 24;
      const titleWidth = page.getWidth() / 2 - (title.length * titleFontSize) / 4; // Rough centering
      page.drawText(title, {
        x: titleWidth,
        y: 750,
        size: titleFontSize,
        color: rgb(0, 0.53, 0.71),
      });

      // Initialize positions for the grid
      const cardWidth = 150;
      const cardHeight = 200;
      const xPadding = 50;
      const marginBetweenCards = 20;
      let xPosition = xPadding;
      let yPosition = 700;

      // Add product data in a grid format (3 per row)
      for (let index = 0; index < products.length; index++) {
        const product = products[index];

        // Fetch and embed the product image
        const imageBytes = await fetchImageAsUint8Array(product.image);
        const embeddedImage = await pdfDoc.embedJpg(imageBytes);
        const imageDims = embeddedImage.scale(0.2); // Scale image

        // Draw the product image within the card
        page.drawImage(embeddedImage, {
          x: xPosition + (cardWidth - imageDims.width) / 2, // Center image in the card
          y: yPosition - imageDims.height - 10, // Position image in the card
          width: imageDims.width,
          height: imageDims.height,
        });

        // Draw product name below the image
        page.drawText(product.name, {
          x: xPosition + 10, // Adjust for padding inside the card
          y: yPosition - imageDims.height - 30,
          size: 12,
          color: rgb(0, 0, 0),
        });

        // Draw card boundary (optional, for visual clarity)
        page.drawRectangle({
          x: xPosition,
          y: yPosition - cardHeight,
          width: cardWidth,
          height: cardHeight,
          borderWidth: 1,
          borderColor: rgb(0.75, 0.75, 0.75),
        });

        // Adjust position for the next card
        xPosition += cardWidth + marginBetweenCards;

        // Move to the next row if 3 cards are filled in a row
        if ((index + 1) % 3 === 0) {
          xPosition = xPadding;
          yPosition -= cardHeight + marginBetweenCards;
        }

        // Add a new page if the yPosition goes below the page limit
        if (yPosition - cardHeight < 50) {
          page.drawText(`Page ${pdfDoc.getPageCount()}`, {
            x: page.getWidth() / 2 - 20,
            y: 30,
            size: 12,
            color: rgb(0, 0, 0),
          });
          yPosition = 700;
          xPosition = xPadding;
          page = pdfDoc.addPage([600, 800]); // Reassign the 'page' variable here
        }
      }

      // Save the PDF and trigger download
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'product-list.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: '20px' }}>
            <img src={product.image} alt={product.name} width={100} height={150} />
            <p>{product.name}</p>
          </li>
        ))}
      </ul>
      <button onClick={generatePDF} disabled={isLoading}>
        {isLoading ? 'Generating PDF...' : 'Download Product List as PDF'}
      </button>
    </div>
  );
};

export default Blog;
