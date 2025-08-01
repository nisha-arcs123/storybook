import type { Meta, StoryObj } from '@storybook/angular';
import { InputsComponent } from './inputs.component';

const meta: Meta<InputsComponent> = {
  title: 'Testing/Input',
  component: InputsComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'An input field with adjustable class and background color, used in forms and dialogs.',
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
  parameters: {
    docs: {
      source: {
        code: `
 <div *ngSwitchCase="'input'">
    <h1>{{ label }}</h1>
    <div class="line"></div>

    <div class="container-in default nisha">
      <h2>Overview</h2>
      <p>
        An input field includes a label and a text field users can type text
        into. They typically appear in forms and dialogs.
      </p>
      <div class="input-container default">
          <input
            type="text"
            class="very-small"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
          <input
            type="text"
            class="small"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
          <input
            type="text"
            class="medium"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
          <input
            type="text"
            class="large"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
          <input
            type="text"
            class="extra-large"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
          <input
            type="text"
            class="xxl"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
      </div>
    </div>

    <div class="container-in label">
      <h2>Label Input</h2>
      <div class="input-container">
        <div class="label-container">
          <label>label</label>
          <input
            type="text"
            class="very-small"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
        </div>

        <div class="label-container">
          <label>label</label>
          <input
            type="text"
            class="small"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
        </div>
        <div class="label-container">
          <label>label</label>
          <input
            type="text"
            class="medium"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
        </div>
        <div class="label-container">
          <label>label</label>
          <input
            type="text"
            class="large"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
        </div>
        <div class="label-container">
          <label>label</label>
          <input
            type="text"
            class="extra-large"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
        </div>
        <div class="label-container">
          <label>label</label>
          <input
            type="text"
            class="xxl"
            [placeholder]="label"
            [ngStyle]="{ 'background-color': backgroundColor }"
            (click)="onClick.emit($event)"
          />
        </div>
      </div>
    </div>

    <div class="container-in login">
      <h2>Login Input</h2>
      <div class="input-container">
        <div class="label-container">
          <label>Domain</label>

          <div class="login-user">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.56267 6.23503L6.13604 8.78739C6.32198 8.92021 6.41495 8.98661 6.51225 9.00191C6.59786 9.01538 6.68554 9.00181 6.76309 8.96309C6.85121 8.9191 6.91976 8.8277 7.05686 8.6449L7.81194 7.63811C7.85071 7.58642 7.8701 7.56057 7.89288 7.53828C7.91311 7.51848 7.93531 7.50079 7.95913 7.4855C7.98595 7.46827 8.01547 7.45515 8.07452 7.4289L11.2983 5.99609C11.432 5.9367 11.4988 5.907 11.5492 5.86062C11.5938 5.8196 11.6288 5.76935 11.652 5.71338C11.6782 5.6501 11.6831 5.57715 11.6928 5.43123L11.9288 1.89052M11.2493 11.2493L13.4294 12.1836C13.6823 12.292 13.8088 12.3462 13.8757 12.4363C13.9345 12.5152 13.9634 12.6125 13.9573 12.7108C13.9504 12.8228 13.8741 12.9372 13.7215 13.1662L12.6973 14.7025C12.6249 14.811 12.5887 14.8653 12.5409 14.9046C12.4986 14.9394 12.4498 14.9655 12.3974 14.9814C12.3382 14.9994 12.273 14.9994 12.1426 14.9994H10.4799C10.3071 14.9994 10.2207 14.9994 10.1472 14.9705C10.0822 14.9449 10.0248 14.9035 9.98003 14.85C9.92936 14.7894 9.90204 14.7074 9.8474 14.5435L9.25334 12.7613C9.22111 12.6646 9.205 12.6163 9.20076 12.5672C9.19699 12.5236 9.20011 12.4797 9.21 12.4371C9.22115 12.3891 9.24393 12.3435 9.28951 12.2524L9.74077 11.3498C9.83246 11.1665 9.8783 11.0748 9.94891 11.0179C10.0111 10.9677 10.0865 10.9365 10.166 10.928C10.2561 10.9183 10.3534 10.9507 10.5479 11.0155L11.2493 11.2493ZM18.3327 9.99935C18.3327 14.6017 14.6017 18.3327 9.99935 18.3327C5.39698 18.3327 1.66602 14.6017 1.66602 9.99935C1.66602 5.39698 5.39698 1.66602 9.99935 1.66602C14.6017 1.66602 18.3327 5.39698 18.3327 9.99935Z"
                stroke="#676879"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              class="medium"
              [placeholder]="label"
              [ngStyle]="{ 'background-color': backgroundColor }"
              (click)="onClick.emit($event)"
            />
          </div>
        </div>
        <div class="label-container">
          <label>Password</label>
          <div class="login-user">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1673 7.33333V5.66667C12.1673 3.36548 10.3018 1.5 8.00065 1.5C5.69946 1.5 3.83398 3.36548 3.83398 5.66667V7.33333M8.00065 11.0833V12.75M5.33398 16.5H10.6673C12.0674 16.5 12.7675 16.5 13.3023 16.2275C13.7727 15.9878 14.1552 15.6054 14.3948 15.135C14.6673 14.6002 14.6673 13.9001 14.6673 12.5V11.3333C14.6673 9.9332 14.6673 9.23314 14.3948 8.69836C14.1552 8.22795 13.7727 7.8455 13.3023 7.60582C12.7675 7.33333 12.0674 7.33333 10.6673 7.33333H5.33398C3.93385 7.33333 3.23379 7.33333 2.69901 7.60582C2.2286 7.8455 1.84615 8.22795 1.60647 8.69836C1.33398 9.23314 1.33398 9.9332 1.33398 11.3333V12.5C1.33398 13.9001 1.33398 14.6002 1.60647 15.135C1.84615 15.6054 2.2286 15.9878 2.69901 16.2275C3.23379 16.5 3.93385 16.5 5.33398 16.5Z"
                stroke="#676879"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="password"
              class="medium"
              [placeholder]="label"
              [ngStyle]="{ 'background-color': backgroundColor }"
              (click)="onClick.emit($event)"
            />
          </div>
        </div>
        <div class="label-container">
          <label>User Name</label>

          <div class="login-user">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 15.6667C3.44649 13.6021 6.08918 12.3333 9 12.3333C11.9108 12.3333 14.5535 13.6021 16.5 15.6667M12.75 5.25C12.75 7.32107 11.0711 9 9 9C6.92893 9 5.25 7.32107 5.25 5.25C5.25 3.17893 6.92893 1.5 9 1.5C11.0711 1.5 12.75 3.17893 12.75 5.25Z"
                stroke="#676879"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              type="text"
              class="medium"
              [placeholder]="label"
              [ngStyle]="{ 'background-color': backgroundColor }"
              (click)="onClick.emit($event)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};

export const Select: Story = {
  args: {
    label: 'Select Box',
    inputClass: 'select',
  },
  parameters: {
    docs: {
      source: {
        code: `
 <div *ngSwitchCase="'select'">
    <h1>{{ label }}</h1>
    <div class="line"></div>

    <div class="container-in default">
      <h2>Overview</h2>
      <p>
        Dropdown present a list of options from which a user can select one or
        several.
      </p>
      <div class="input-container">
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select very-small"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select small"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select medium"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select large"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select extra-large"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select xxl"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </div>
    </div>

    <div class="container-in label">
      <h2>Label Input</h2>
      <div class="input-container">
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select very-small"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>

        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select small"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select medium"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select large"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select extra-large"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select xxl"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
      </div>
    </div>
  </div>
        `.trim(),
        language: 'html',
      },
    },
  },
};

export const Validation: Story = {
  args: {
    label: 'Validation',
    inputClass: 'validation',
  },
  parameters: {
    docs: {
      source: {
        code: `
 <div *ngSwitchCase="'validation'">
    <h1>{{ label }}</h1>
    <div class="line"></div>

    <div class="container-in default">
      <h2>Overview</h2>
      <p>
        Validation in forms refers to the process of ensuring that the data
        entered into a form meets certain criteria or rules before it is
        accepted and processed. This is important for maintaining data integrity
        and preventing errors or inconsistencies.
      </p>
      <div class="input-container">
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select validate-select very-small"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <p class="error-msg">This is error alert</p>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select validate-select small"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <p class="error-msg">This is error alert</p>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select validate-select medium"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <p class="error-msg">This is error alert</p>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select validate-select large"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <p class="error-msg">This is error alert</p>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select validate-select extra-large"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <p class="error-msg">This is error alert</p>
        <select
          (click)="onClick.emit($event)"
          [ngStyle]="{ 'background-color': backgroundColor }"
          class="custome-select validate-select xxl"
        >
          <option>Select an option</option>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
        <p class="error-msg">This is error alert</p>
      </div>
    </div>

    <div class="container-in label">
      <h2>Label Input</h2>
      <div class="input-container">
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select validate-select very-small"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <p class="error-msg">This is error alert</p>
        </div>

        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select validate-select small"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <p class="error-msg">This is error alert</p>
        </div>
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select validate-select medium"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <p class="error-msg">This is error alert</p>
        </div>
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select validate-select large"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <p class="error-msg">This is error alert</p>
        </div>
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select validate-select extra-large"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <p class="error-msg">This is error alert</p>
        </div>
        <div class="label-container">
          <label>{{ label }}</label>
          <select
            (click)="onClick.emit($event)"
            [ngStyle]="{ 'background-color': backgroundColor }"
            class="custome-select validate-select xxl"
          >
            <option>Select an option</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <p class="error-msg">This is error alert</p>
        </div>
      </div>
    </div>
  </div>
        `.trim(),
        language: 'html',
      },
    },
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
