import { useNavigate } from 'react-router-dom';

interface Props {
  image: string;
  title: string;
  properties: string;
  to: string;
  className?: string;
}

const SuggCard: React.FC<Props> = ({ image, title, properties, to, className }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(to);
  };

  return (
    <div>
      <div className="bg-transparent border-none outline-none">
        <div className= {className} >
          <div className="relative flex cursor-pointer" onClick={handleNavigation}>
            {/* La div superposée à l'image qui devient visible au survol */}
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 hover:opacity-15 transition-opacity duration-300 rounded-[20px]"></div>
            <img src={image} alt={title} className="rounded-[20px]" />
          </div>
          <h4 className="text-[1.9rem] dark:text-white font-semibold" onClick={handleNavigation}>
            {title}
          </h4>
          <h6 className="text-[#6B7280] text-[1.4rem]" onClick={handleNavigation}>
            {properties}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default SuggCard;
