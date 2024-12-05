import React from 'react';

export interface StepperProps {
  steps: {
    title: string;
    desc?: string;
    content?: React.ReactNode;
  }[];
  currentStep: number; // 當前步驟（從 0 開始）
  direction?: 'horizontal' | 'vertical'; // 方向
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  direction = 'horizontal',
}) => {
  return (
    <div className={`stepper ${direction}`}>
      <div className="stepper-header">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`stepper-step ${
              index === currentStep
                ? 'active'
                : index < currentStep
                ? 'completed'
                : ''
            }`}
          >
            <div className="step-circle">{index + 1}</div>
            <div className="step-group">
              <div className="step-title">{step.title}</div>
              <div className="step-description">{step.desc}</div>
            </div>
            {direction === 'vertical' && index !== steps.length - 1 && (
              <div className="step-connector" />
            )}
          </div>
        ))}
      </div>
      <div className="stepper-content">
        {steps[currentStep]?.content || 'No content available for this step.'}
      </div>
    </div>
  );
};

export default Stepper;
