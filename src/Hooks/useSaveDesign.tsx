import { useCallback, RefObject, useContext } from 'react';
import { saveAs } from 'file-saver';
import { Context } from '../Context';

interface DownloadOptions {
  scale?: number;
  backgroundColor?: string;
  quality?: number;
}

const useSaveDesign = () => {
  const { selectedDesign, svgRef } = useContext(Context);

  const download = useCallback(
    async (
      svgRef: RefObject<SVGSVGElement>,
      options: DownloadOptions = {}
    ): Promise<void> => {
      const {
        scale = 1,
        backgroundColor = 'transparent',
        quality = 0.92,
      } = options;

      if (!svgRef.current) {
        throw new Error('SVG ref is not attached to an element');
      }

      const svg = svgRef.current;

      try {
        // Serialize SVG
        const serializer = new XMLSerializer();
        const svgStr = serializer.serializeToString(svg);

        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) alert('Could not get canvas context');

        // Set canvas dimensions
        const { width, height } = svg.getBBox();
        canvas.width = width * scale;
        canvas.height = height * scale;

        // Create image blob
        const svgBlob = new Blob([svgStr], {
          type: 'image/svg+xml;charset=utf-8',
        });
        const url = URL.createObjectURL(svgBlob);
        if (!ctx) {
          alert('there is an error on your canvas');
          return;
        }

        // Load SVG image
        const img = new Image();
        await new Promise<void>((resolve, reject) => {
          img.onload = () => {
            try {
              // Fill background if specified
              if (backgroundColor) {
                ctx.fillStyle = backgroundColor;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
              }

              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              URL.revokeObjectURL(url);
              resolve();
            } catch (error) {
              reject(error);
            }
          };

          img.onerror = () => {
            URL.revokeObjectURL(url);
            reject(new Error('Failed to load SVG image'));
          };

          img.src = url;
        });

        // Convert to blob and save
        const blob = await new Promise<Blob | null>((resolve) =>
          canvas.toBlob(resolve, 'image/png', quality)
        );

        if (!blob) {
          throw new Error('Canvas to Blob conversion failed');
        }

        saveAs(blob, `${selectedDesign}.png`);
      } catch (error) {
        console.error('Error downloading SVG as PNG:', error);
        throw error;
      }
    },
    [selectedDesign]
  );

  const handleDownload = async () => {
    try {
      if (svgRef) {
        await download(svgRef);
      } else {
        alert(`Download failed:, please try again`);
      }
    } catch (error) {
      alert(`Download failed:, ${error}`);
    }
  };

  return { download, handleDownload };
};

export default useSaveDesign;
