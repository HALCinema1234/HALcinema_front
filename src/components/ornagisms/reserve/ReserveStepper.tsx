import {
    AbsoluteCenter,
    Box,
    Divider,
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
    { title: '座席予約', description: '座席を選択してください' },
    { title: '支払方法選択', description: '支払方法を選択してください' },
    { title: '予約確認', description: '以上で予約を確定しますか？' },
    { title: '予約完了', description: '予約完了しました' },
];
type Props = {
    index: number;
};

export const ReserveStepper = ({ index }: Props) => {
    const activeStep = index;

    return (
        <Stack spacing={8}>
            <Heading fontSize='3xl'>
                Step {activeStep + 1}: <b>{steps[activeStep].title}</b>
            </Heading>
            <Stepper index={activeStep}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
                        </StepIndicator>
                        <Box>
                            <StepTitle>{step.title}</StepTitle>
                        </Box>
                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
            <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='4' fontSize='3xl'>
                    {steps[activeStep].description}
                </AbsoluteCenter>
            </Box>
        </Stack>
    );
};
