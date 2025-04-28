import type { Meta, StoryObj } from '@storybook/angular';
import { InputSizesComponent } from './input-sizes.component';

const meta: Meta<InputSizesComponent> = {
  title: 'Testing/Input-sizes',
  component: InputSizesComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An input field with adjustable class and background color, used in forms and dialogs.',
      },
    },
  },
  argTypes: {
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<InputSizesComponent>;

export const VerySmall: Story = {
  args: {
    label: 'very small',
    inputClass: 'very-small',
    height:28,
    borderRadius:4,
  },
};


export const Small: Story = {
  args: {
    label: 'Small',
    inputClass: 'small',
    height:32,
    borderRadius:4,
  },
};

export const Medium: Story = {
  args: {
    label: 'Medium',
    inputClass: 'medium',
    height:38,
    borderRadius:4,
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    inputClass: 'large',
    height:42,
    borderRadius:4,
  },
};

export const Extra_Large: Story = {
  args: {
    label: 'Extra Large',
    inputClass: 'extra-large',
    height:48,
    borderRadius:4,
   
  },
};

export const Double_Extra_Large: Story = {
    args: {
      label: 'Double Extra Large',
      inputClass: 'xxl',
      height:54,
      borderRadius:4,
    },
  };