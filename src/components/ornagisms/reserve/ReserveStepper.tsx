import {
    Box,
    Heading,
    Stack,
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    Text,
    useSteps,
} from '@chakra-ui/react';
import React from 'react';

const steps = [
    { title: 'First', description: '座席予約' },
    { title: 'Second', description: '券種選択' },
    { title: 'Third', description: '支払方法選択' },
    { title: 'Fourth', description: '予約確認' },
];
type Props = {
    index: number;
};

export const ReserveStepper = ({ index }: Props) => {
    const activeStep = index;

    return (
        <Stack>
            <Heading>
                Step {activeStep + 1}: <b>{steps[activeStep].description}</b>
            </Heading>
            <Stepper index={activeStep}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
                        </StepIndicator>
                        <Box>
                            <StepTitle>{step.description}</StepTitle>
                        </Box>
                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
        </Stack>
    );
};
