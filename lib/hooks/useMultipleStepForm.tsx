import { ReactElement, useState } from "react";
import * as React from "react";


     

export function useMultipleStepForm(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = React.useState(0);

    
    function nextStep() {
        setCurrentStep((prev) => prev + 1);
    }
    
    function previousStep() {
        setCurrentStep((prev) => prev - 1);
    }

    return {
        isFirstStep: currentStep === 0,
        step: steps[currentStep],
        currentStep,
        nextStep,
        previousStep,


    };
}
