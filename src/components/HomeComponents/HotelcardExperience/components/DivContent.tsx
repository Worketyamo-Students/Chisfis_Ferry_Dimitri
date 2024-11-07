import {
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ContentProps {
  content: ReactElement;
  style: string;
}

const Content: React.FC<ContentProps> = ({
  content,
  style,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleDivClick = () => {
    setIsClicked(true); // Active le mode cliqué lors du clic
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Vérifie si le clic se produit en dehors de la div
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsClicked(false); // Désactive si clic en dehors
      }
    };

    // Ajoute l'écouteur d'événements
    document.addEventListener('mousedown', handleClickOutside);

    // Nettoyage de l'écouteur d'événements lors de la suppression du composant
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={divRef}
      onClick={handleDivClick}
      className={`${style} ${isClicked ? 'rounded-full shadow-2xl py-[2rem] border-none' : 'my-[2rem]'}`}
    >
      {content}
    </div>
  );
};

export default Content;
