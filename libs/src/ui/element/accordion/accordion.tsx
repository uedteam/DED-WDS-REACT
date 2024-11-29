import { AccordionItem } from './accordion-item';

export interface AccordionProps {
  dataSource: { id: string; label: string; detail: string }[];
  isOpenAll?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  dataSource,
  isOpenAll = false,
  className = '',
}) => {
  return (
    <ul className={`accordion ${className}`}>
      {dataSource.map((item) => (
        <li key={item.id}>
          <AccordionItem
            label={item.label}
            content={item.detail}
            isOpenAll={isOpenAll}
          />
        </li>
      ))}
    </ul>
  );
};
export default Accordion;
