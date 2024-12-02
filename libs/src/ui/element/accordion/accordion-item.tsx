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

  useEffect(() => {
    document.querySelectorAll('details').forEach((details) => {
      details.addEventListener('toggle', () => {
        const content = details.querySelector('summary + p');
        if (details.open && content) {
          content.animate(
            [
              { opacity: 0, height: 0 },
              {
                opacity: 1,
                height: content.scrollHeight + 'px',
              },
            ],
            {
              duration: 500,
              easing: 'ease-in-out',
            }
          );
        }
      });
    });
    return () => {
      document.querySelectorAll('details').forEach((details) => {
        details.removeEventListener('toggle', () => {
          const content = details.querySelector('summary + p');
          if (details.open && content) {
            content.animate(
              [
                { opacity: 0, height: 0 },
                { opacity: 1, height: content.scrollHeight + 'px' },
              ],
              {
                duration: 500,
                easing: 'ease-in-out',
              }
            );
          }
        });
      });
    };
  }, []);

  return (
    <li className="accordion-item">
      <details
        onToggle={(e) => {
          setIsOpen((e.target as HTMLDetailsElement).open);
        }}
        open={isOpen}
        className={className}
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
    </li>
  );
};
export default AccordionItem;
