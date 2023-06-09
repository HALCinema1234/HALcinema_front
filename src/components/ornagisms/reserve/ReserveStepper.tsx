import {
    Box,
    Step,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react';
import React from 'react';

const steps = [
    { title: 'First', description: '座席予約' },
    { title: 'Second', description: '券種選択' },
    { title: 'Third', description: '支払方法選択' },
    { title: 'Fourth', description: '予約確認' },
];

export const ReserveStepper = () => {
    const { activeStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    return (
        <Stepper index={activeStep}>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
                    </StepIndicator>
                    <Box>
                        <StepTitle>{step.title}</StepTitle>
                    </Box>
                </Step>
            ))}
        </Stepper>
    );
};
