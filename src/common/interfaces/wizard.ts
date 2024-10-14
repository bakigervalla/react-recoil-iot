import {
  Dispatch,
  MutableRefObject,
  ReactElement,
  SetStateAction,
} from 'react';

export interface WizardComponentProps<T> {
  prevStep: () => void;
  nextStep: () => void;
  wizardState: T;
  stepRef?: MutableRefObject<any>;
  setStepRef: Dispatch<SetStateAction<MutableRefObject<T> | undefined>>;
  setWizardState: (newState: T) => void;
}

export interface Step<T> {
  index: number;
  label: string;
  Component: ({
    prevStep,
    nextStep,
    stepRef,
    setStepRef,
    wizardState,
    setWizardState,
  }: WizardComponentProps<T>) => ReactElement;
  title?: string;
  description?: string;
  isCompleted?: (state: T) => boolean;
}

export interface WizardProps<T> extends WizardComponentProps<T> {
  steps: Step<T>[];
  activeStep: Step<T>;
  activeStepIndex: number;
  visitedSteps: Set<number>;
  isStepClickEnabled: boolean;
  Component: ({
    prevStep,
    nextStep,
    stepRef,
    setStepRef,
    wizardState,
    setWizardState,
  }: WizardComponentProps<T>) => ReactElement;
  setActiveStep: (newStep: Step<T>) => void;
  resetWizardState: (newState: T) => void;
}
