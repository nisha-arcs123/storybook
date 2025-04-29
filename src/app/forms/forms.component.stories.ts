import type { Meta, StoryObj } from '@storybook/angular';
import { FormsComponent } from './forms.component';

const meta: Meta<FormsComponent> = {
  title: 'Forms/Input',
  component: FormsComponent,
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
type Story = StoryObj<FormsComponent>;

export const SimpleInput: Story = {
  args: {
    label: 'Simple Input',
    inputClass: 'simple-input'
  },
};


export const LabelInput: Story = {
  args: {
    label: 'Label Input',
    inputClass: 'label-input',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    inputClass: 'with-icon',
  },
};
