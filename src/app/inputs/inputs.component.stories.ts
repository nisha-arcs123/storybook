import type { Meta, StoryObj } from '@storybook/angular';
import { InputsComponent } from './inputs.component';

const meta: Meta<InputsComponent> = {
  title: 'Testing/Inputs',
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
    label: 'Input',
    inputClass: 'input',
  },
};

// export const Label: Story = {
//   args: {
//     label: 'Label Input',
//     inputClass: 'label',
//   },
// };

// export const Login: Story = {
//   args: {
//     label: 'Login Input',
//     inputClass: 'login',
//   },
// };
