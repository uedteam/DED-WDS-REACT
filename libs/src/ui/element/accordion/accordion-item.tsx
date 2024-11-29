import { useEffect, useState } from 'react';
import { ArrowDownIcon } from '@src/assets';

export interface AccordionProps {
  label: string;
  content: string;
  isOpenAll?: boolean;
  className?: string;
}

export const AccordionItem: React.FC<AccordionProps> = ({
  label,
  content,
  isOpenAll,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(isOpenAll);

  useEffect(() => {
    setIsOpen(isOpenAll);
  }, [isOpenAll]);

  return (
    <details
      onToggle={(e) => {
        setIsOpen((e.target as HTMLDetailsElement).open);
      }}
      open={isOpen}
      className={`accordion-item ${className}`}
    >
      <summary>
        <span>{label}</span>
        <div
          className={`${
            isOpen ? 'accordion-item-open' : 'accordion-item-close'
          }`}
        >
          <ArrowDownIcon width={20} height={20} />
        </div>
      </summary>
      <p>{content}</p>
    </details>
  );
};
export default AccordionItem;
