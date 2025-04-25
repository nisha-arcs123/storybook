import type { Meta, StoryObj } from '@storybook/angular';
import { InputsComponent } from './inputs.component';

const meta: Meta<InputsComponent> = {
  title: 'Testing/Input',
  component: InputsComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'An input field with adjustable class and background color, used in forms and dialogs.',
      },
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
    inputClass: { control: 'text' }, // control added for story UI
  },
};

export default meta;
type Story = StoryObj<InputsComponent>;

export const Input: Story = {
  args: {
    label: 'Inputs',
    inputClass: 'input',
  },
};


export const Select: Story = {
  args: {
    label: 'Select Box',
    inputClass: 'select',
  },
};

export const Validation: Story = {
  args: {
    label: 'Validation',
    inputClass: 'validation',
  },
};

export const Search: Story = {
  args: {
    label: 'Search',
    inputClass: 'search',
  },
};

export const Uploads: Story = {
  args: {
    label: 'Upload',
    inputClass: 'upload',
  },
};