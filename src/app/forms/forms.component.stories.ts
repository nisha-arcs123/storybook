import type { Meta, StoryObj } from '@storybook/angular';
import { FormComponent } from './forms.component';

const meta: Meta<FormComponent> = {
  title: 'Testing/Form',
  component: FormComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A simple form with name and email fields, including basic validation.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<FormComponent>;

export const Default: Story = {
  args: {},
};
